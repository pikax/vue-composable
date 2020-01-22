import { useBroadcastChannel } from "../web";
import { ref, Ref, watch, onUnmounted, computed } from "@vue/composition-api";
import { PASSIVE_EV, isObject } from "@vue-composable/core";


const enum RefSharedMessageType {
  INIT,
  SYNC,
  UPDATE,

  // changes the master to 
  SET_MIND,

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
  v: T
}

export function useSharedRef<T = any>(id: string, defaultValue?: T) {
  const { addListener, send, close } = useBroadcastChannel<RefSharedMessage<T>>(id);

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

        sendNotification(RefSharedMessageType.SYNC, data.value);
        break;
      }
      case RefSharedMessageType.SYNC: {
        if (synced) {
          break;
        }
        synced = true;
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