import { useBroadcastChannel } from "../web";
import { ref, Ref, watch, onUnmounted, computed } from "@vue/composition-api";
import { PASSIVE_EV, isObject } from "@vue-composable/core";


const enum RefSharedMessageType {
  INIT,
  SYNC,
  UPDATE,

  // changes the master to 
  SET_MIND,

  LEAVE,

  PING,
  PONG
}

const enum SharedRefMind {
  // everyone can update 
  HIVE,

  // only master can update
  MASTER,
}


type RefSharedMessage<T> = {
  t: RefSharedMessageType,
  m?: SharedRefMind,
  assignMaster?: boolean,
  v: T
}

export function useSharedRef<T = any>(id: string, defaultValue?: T) {
  const { addListener, send, close, supported } = useBroadcastChannel<RefSharedMessage<T>>(id);

  const master = ref(false);
  const mind = ref(SharedRefMind.HIVE);
  const editable = computed(() => mind.value === SharedRefMind.MASTER ? master.value : true)

  // const listeners 
  const targets = ref<EventTarget[]>([]);
  const data: Ref<T> = ref(defaultValue);

  let synced = false;
  let updateState = false;

  send({ t: RefSharedMessageType.INIT } as any);

  const ping = () => send({ t: RefSharedMessageType.PING } as any);
  ping();

  const sendNotification = (t: RefSharedMessageType, v: T) => {
    const vv = isObject(v) ? { ...v } : v;
    send({ t, v: vv });
  };

  window.addEventListener('unload', () => {
    // send({
    //   t: RefSharedMessageType.LEAVE,
    //   assignMaster: master.value
    // } as any)
    if (targets.value.length > 0 && master.value) {
      targets.value[0].dispatchEvent(new MessageEvent("message", {
        data: {
          t: RefSharedMessageType.LEAVE,
          assignMaster: true
        } as RefSharedMessage<T>
      }))
    }
  })

  const setMind = (t: SharedRefMind) => {
    switch (t) {
      case SharedRefMind.MASTER: {
        master.value = true;
        break;
      }
      case SharedRefMind.HIVE: {
        master.value = false;
        break;
      }
    }
    mind.value = t;
    send({
      t: RefSharedMessageType.SET_MIND,
      m: t,
    } as any)
  }

  addListener((e) => {
    switch (e.data.t) {
      case RefSharedMessageType.INIT: {
        if (master.value) {
          setMind(SharedRefMind.MASTER)
        }
        send({
          t: RefSharedMessageType.SYNC,
          v: data.value,
          m: mind.value
        })
        break;
      }
      case RefSharedMessageType.SYNC: {
        if (synced) {
          break;
        }
        synced = true;
        mind.value = e.data.m!;
      }
      case RefSharedMessageType.UPDATE: {
        updateState = true;
        data.value = e.data.v;
        break;
      }
      case RefSharedMessageType.SET_MIND: {
        mind.value = e.data.m!;
        master.value = false;
        break;
      }
      case RefSharedMessageType.LEAVE: {
        if (mind.value === SharedRefMind.MASTER && e.data.assignMaster) {
          setMind(SharedRefMind.MASTER)
        }
      }
      case RefSharedMessageType.PING: {
        targets.value = [];
        send({
          t: RefSharedMessageType.PONG,
        } as any);
        break;
      }
      case RefSharedMessageType.PONG: {
        if (e.target) {
          targets.value.push(e.target);
        }
        break;
      }
    }
  }, PASSIVE_EV);

  watch(
    data,
    (v, o) => {
      if (updateState) {
        updateState = false;
        return;
      }
      // mind is set to MASTER and we are not master, we shouldn't update!
      if (mind.value === SharedRefMind.MASTER && master.value === false) {
        updateState = true;
        data.value = o;
        return;
      }
      sendNotification(RefSharedMessageType.UPDATE, v);
      updateState = false;
    },
    { deep: true, lazy: true }
  );

  onUnmounted(() => {
    close();
  });

  return {
    supported,

    data,

    master,
    mind,
    editable,

    targets,

    ping,
    setMind,

    // addListener
  }
}