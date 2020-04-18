import { ref, watch, onUnmounted, computed, getCurrentInstance } from "../api";
import { PASSIVE_EV, isObject, RefTyped, isClient } from "../utils";
import { useBroadcastChannel, BroadcastMessageEvent } from "../web";
import { Ref } from "vue3";

export const enum RefSharedMessageType {
  INIT,
  SYNC,
  UPDATE,

  // changes the master to
  SET_MIND,

  LEAVE,

  PING,
  PONG
}

export const enum SharedRefMind {
  // everyone can update
  HIVE,

  // only master can update
  MASTER
}

export type RefSharedMessageInit = { type: RefSharedMessageType.INIT };
export type RefSharedMessageSync<T> = {
  type: RefSharedMessageType.SYNC;
  value: T;
  mind: SharedRefMind;
};
export type RefSharedMessageUpdate<T> = {
  type: RefSharedMessageType.UPDATE;
  value: T;
  mind: SharedRefMind;
};
export type RefSharedMessageSetMind = {
  type: RefSharedMessageType.SET_MIND;
  mind: SharedRefMind;
  id: number;
};
export type RefSharedMessagePing = {
  type: RefSharedMessageType.PING;
  id: number;
};
export type RefSharedMessagePong = {
  type: RefSharedMessageType.PONG;
  id: number;
};

export type RefSharedMessageLeave = {
  type: RefSharedMessageType.LEAVE;
  id: number;
};

export type RefSharedMessage<T = any> =
  | RefSharedMessageInit
  | RefSharedMessageSync<T>
  | RefSharedMessageLeave
  | RefSharedMessageUpdate<T>
  | RefSharedMessageSetMind
  | RefSharedMessagePing
  | RefSharedMessagePong;

export function useSharedRef<T = any>(name: string, defaultValue?: T) {
  const { addListener, send, close, supported } = useBroadcastChannel<
    RefSharedMessage<T>
  >(name, () => disconnect());

  const id = Date.now();
  const master = ref(false);
  const mind = ref(SharedRefMind.HIVE);
  const editable = computed(() =>
    mind.value === SharedRefMind.MASTER ? master.value : true
  );

  // who's listening to this broadcast
  const targets = ref<number[]>([]);
  const data: Ref<T> = ref(defaultValue!) as any;

  // if the state was updated by an event it sets to true
  let updateState = false;
  let masterId: number | undefined = undefined;

  send({ type: RefSharedMessageType.INIT });

  const ping = () => send({ type: RefSharedMessageType.PING, id });

  const disconnect = () => {
    if (targets.value.length === 0) return;
    if (master.value) {
      send({
        type: RefSharedMessageType.SET_MIND,
        mind: SharedRefMind.MASTER,
        id: Math.min(...targets.value)
      });
    }
    send({
      type: RefSharedMessageType.LEAVE,
      id
    });
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
      type: RefSharedMessageType.SET_MIND,
      id: id,
      mind: mind.value
    });
  };

  addListener(e => {
    switch (e.data.type) {
      case RefSharedMessageType.INIT: {
        send({
          type: RefSharedMessageType.UPDATE,
          value: data.value as T,
          mind: mind.value
        });
        break;
      }
      case RefSharedMessageType.LEAVE: {
        const index = targets.value.indexOf(e.data.id);
        if (index >= 0) {
          targets.value.splice(index, 1);
        }
        // if master disconnects
        if (masterId === e.data.id && targets.value.length > 0) {
          send({
            type: RefSharedMessageType.SET_MIND,
            mind: SharedRefMind.MASTER,
            id: Math.min(id, ...targets.value)
          });
        }
        break;
      }
      case RefSharedMessageType.UPDATE: {
        updateState = true;
        data.value = e.data.value;
        mind.value = e.data.mind;
        break;
      }
      case RefSharedMessageType.SET_MIND: {
        mind.value = e.data.mind;
        masterId =
          (e.data.mind === SharedRefMind.MASTER && e.data.id) || undefined;
        master.value = masterId === id;
        if (master.value) {
          targets.value = [];
          ping();
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

      send({
        type: RefSharedMessageType.UPDATE,
        mind: mind.value,
        value: isObject(v) ? { ...v } : v
      });
      updateState = false;
    },
    { deep: true, immediate: false }
  );

  if (isClient) {
    window.addEventListener("unload", disconnect, PASSIVE_EV);
  }
  onUnmounted(() => {
    disconnect();
    close();
  });

  return {
    supported,
    id,

    data,

    master,
    mind,
    editable,

    targets,

    ping,
    setMind,

    addListener: addListener as (
      cb: (ev: BroadcastMessageEvent<RefSharedMessage<T>>) => void,
      options?: boolean | AddEventListenerOptions
    ) => void
  };
}

let shared: Set<string> | undefined = undefined;

export function refShared<T = any>(defaultValue?: RefTyped<T>, id?: string) {
  const vm = getCurrentInstance()!;
  const name = id
    ? id
    : __VUE_2__
    ? (vm as any).$vnode.tag
    : (vm as any).vnode.scopeId; // TODO test this :/ NOTE @vue/runtime-core might be different

  if (!name) {
    if (__DEV__) {
      console.warn("[refShared] please assign an id, returning `ref`");
    }
    return ref(defaultValue);
  }

  /* istanbul ignore else  */
  if (__DEV__) {
    if (!shared) {
      shared = new Set();
    }
    if (shared.has(name)) {
      console.warn(
        "[refShared] You can only have one refShared per component, if you need more please assign pass an id refShared(defaultValue, id)"
      );
    }
    shared.add(name);
  }

  const { data, supported } = useSharedRef(name, defaultValue);

  /* istanbul ignore next  */
  if (__DEV__) {
    if (!supported) {
      console.warn("[refShared] is dependent of BroadcastChannel");
    }
  }

  return data;
}
