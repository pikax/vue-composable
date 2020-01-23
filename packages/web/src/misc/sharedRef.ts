import { useBroadcastChannel } from "../web";
import { ref, Ref, watch, onUnmounted, computed, getCurrentInstance } from "@vue/composition-api";
import { PASSIVE_EV, isObject, randomString, RefTyped, debounce } from "@vue-composable/core";


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



type RefSharedMessageInit = { type: RefSharedMessageType.INIT };
type RefSharedMessageSync<T> = { type: RefSharedMessageType.SYNC, value: T, mind: SharedRefMind };
type RefSharedMessageUpdate<T> = { type: RefSharedMessageType.UPDATE, value: T, mind: SharedRefMind };
type RefSharedMessageSetMind = { type: RefSharedMessageType.SET_MIND, mind: SharedRefMind, id: string };
type RefSharedMessagePing = { type: RefSharedMessageType.PING, id: string };
type RefSharedMessagePong = { type: RefSharedMessageType.PONG, id: string };

type RefSharedMessageLeave = { type: RefSharedMessageType.LEAVE, id: string };



type RefSharedMessage<T> = RefSharedMessageInit
  | RefSharedMessageSync<T>
  | RefSharedMessageLeave
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

  // if the state was updated by an event it sets to true
  let updateState = false;
  let masterId: string | undefined = undefined;

  send({ type: RefSharedMessageType.INIT });

  const ping = () => send({ type: RefSharedMessageType.PING, id });

  const sendNotification = (t: RefSharedMessageType.UPDATE, v: T) => {
    const vv = isObject(v) ? { ...v } : v;
    send({ type: t, value: vv, mind: mind.value });
  };

  const disconnect = () => {
    if (targets.value.length > 0 && master.value) {
      send({
        type: RefSharedMessageType.SET_MIND,
        mind: SharedRefMind.MASTER,
        id: targets.value[0]
      });
    }
    send({
      type: RefSharedMessageType.LEAVE,
      id
    })
  }


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
      type: RefSharedMessageType.SET_MIND,
      id: id,
      mind: mind.value,
    })
  }


  addListener((e) => {
    switch (e.data.type) {
      case RefSharedMessageType.INIT: {
        send({
          type: RefSharedMessageType.UPDATE,
          value: data.value,
          mind: mind.value
        })
        break;
      }
      case RefSharedMessageType.LEAVE: {
        targets.value.splice(targets.value.indexOf(e.data.id), 1);
        break
      }
      case RefSharedMessageType.UPDATE: {
        updateState = true;
        data.value = e.data.value;
        mind.value = e.data.mind;
        break;
      }
      case RefSharedMessageType.SET_MIND: {
        mind.value = e.data.mind;
        masterId = e.data.mind === SharedRefMind.MASTER && e.data.id || undefined;
        master.value = masterId === id;
        if (master.value) {
          targets.value = [];
          ping()
        }
        break;
      }
      case RefSharedMessageType.PING: {
        targets.value = [e.data.id];
        send({
          type: RefSharedMessageType.PONG,
          id
        });
        break;
      }
      case RefSharedMessageType.PONG: {
        targets.value.push(e.data.id);
        if (mind.value === SharedRefMind.MASTER) {
          // note this might call SetMind multiple times
          debounce(() => {
            if (targets.value.indexOf(masterId!) === -1) {
              const sorted = targets.value.concat(id).sort(x => x.charCodeAt(0) + x.charCodeAt(1));
              const newMaster = sorted[0];
              if (newMaster === id) {
                setMind(SharedRefMind.MASTER)
              }
            }
          }, 10)()
        }
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

  window.addEventListener('unload', disconnect, PASSIVE_EV)
  onUnmounted(() => {
    disconnect();
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


let shared: Set<string> | undefined = undefined;

export function refShared<T = any>(defaultValue?: RefTyped<T>, id?: string) {
  const vm = getCurrentInstance()!;
  const name = id ? id : vm.$vnode.tag!;

  if (__DEV__) {
    if (!shared) {
      shared = new Set();
    }
    if (shared.has(name)) {
      console.warn('[refShared] You can only have one refShared per component, if you need more please assign pass an id refShared(defaultValue, id)')
    }
    shared.add(name);
  }

  const { data, supported } = useSharedRef(name, defaultValue);

  if (__DEV__) {
    if (!supported) {
      console.warn('[refShared] is dependent of BroadcastChannel');
    }
  }

  return data;
}
