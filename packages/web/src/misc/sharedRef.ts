import { useBroadcastChannel } from "../web";
import { ref, Ref, watch, onUnmounted, computed } from "@vue/composition-api";
import { PASSIVE_EV, isObject, randomString } from "@vue-composable/core";


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



type RefSharedMessageInit = { t: RefSharedMessageType.INIT };
type RefSharedMessageSync<T> = { t: RefSharedMessageType.SYNC, v: T, m: SharedRefMind };
type RefSharedMessageUpdate<T> = { t: RefSharedMessageType.UPDATE, v: T };
type RefSharedMessageSetMind = { t: RefSharedMessageType.SET_MIND, m: SharedRefMind, id?: string };
type RefSharedMessagePing = { t: RefSharedMessageType.PING, id: string };
type RefSharedMessagePong = { t: RefSharedMessageType.PONG, id: string };



type RefSharedMessage<T> = RefSharedMessageInit
  | RefSharedMessageSync<T>
  | RefSharedMessageUpdate<T>
  | RefSharedMessageSetMind
  | RefSharedMessagePing
  | RefSharedMessagePong;

export function useSharedRef<T = any>(name: string, defaultValue?: T) {
  const { addListener, send, close, supported } = useBroadcastChannel<RefSharedMessage<T>>(name);

  const id = randomString(5);
  const master = ref(false);
  const mind = ref(SharedRefMind.HIVE);
  const editable = computed(() => mind.value === SharedRefMind.MASTER ? master.value : true)

  // who's listening to this broadcast
  const targets = ref<string[]>([]);
  const data: Ref<T> = ref(defaultValue);

  let synced = false;
  let updateState = false;

  send({ t: RefSharedMessageType.INIT });

  const ping = () => send({ t: RefSharedMessageType.PING, id });

  const sendNotification = (t: RefSharedMessageType.SYNC | RefSharedMessageType.UPDATE, v: T) => {
    const vv = isObject(v) ? { ...v } : v;
    send({ t, v: vv, m: mind.value });
  };

  window.addEventListener('unload', () => {
    if (targets.value.length > 0 && master.value) {
      send({
        t: RefSharedMessageType.SET_MIND,
        m: SharedRefMind.MASTER,
        id: targets.value[0]
      });
    }
  }, PASSIVE_EV)

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
    })
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
          m: mind.value,
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
        master.value = e.data.id === id || false;
        if (master.value) {
          ping()
        }
        break;
      }
      case RefSharedMessageType.PING: {
        targets.value = [];
        targets.value.push(e.data.id!);
        send({
          t: RefSharedMessageType.PONG,
          id
        });
        break;
      }
      case RefSharedMessageType.PONG: {
        targets.value.push(e.data.id!);
        break;
      }
    }
  }, PASSIVE_EV);

  ping();

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

    addListener
  }
}