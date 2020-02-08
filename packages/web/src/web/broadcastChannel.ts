import { ref, onUnmounted } from "@vue/composition-api";
import { PASSIVE_EV, NO_OP, isClient } from "@vue-composable/core";

export interface BroadcastMessageEvent<T> extends MessageEvent {
  readonly data: T;
}

export function useBroadcastChannel<T = any>(
  name: string,
  onBeforeClose?: Function
) {
  const supported = isClient && "BroadcastChannel" in self;
  const data = ref<T | null>(null);

  const messageEvent = ref<MessageEvent>(null);
  const errorEvent = ref<MessageEvent>(null);
  const errored = ref(false);
  const isClosed = ref(false);

  let send: (data: T) => void = NO_OP;

  let close: Function = NO_OP;
  let addListener: (
    cb: (ev: BroadcastMessageEvent<T>) => void,
    options?: boolean | AddEventListenerOptions
  ) => void = NO_OP;

  /* istanbul ignore else  */
  if (supported) {
    const bc = new BroadcastChannel(name);

    bc.addEventListener(
      "messageerror",
      e => {
        errorEvent.value = e;
        errored.value = true;
      },
      PASSIVE_EV
    );

    bc.addEventListener(
      "message",
      ev => {
        messageEvent.value = ev;
        data.value = ev.data;
      },
      PASSIVE_EV
    );

    send = d => bc.postMessage(d);
    close = () => {
      bc.close();
      isClosed.value = true;
    };
    addListener = (cb, o) => {
      bc.addEventListener("message", cb, o);
      onUnmounted(() => bc.removeEventListener("message", cb));
    };

    onUnmounted(() => {
      onBeforeClose && onBeforeClose();
      close();
    });
  } else {
    if (__DEV__) {
      console.warn("[BroadcastChannel] is not supported");
    }
  }

  return {
    supported,

    data,

    messageEvent,
    errorEvent,

    errored,
    isClosed,

    send,
    close,
    addListener
  };
}
