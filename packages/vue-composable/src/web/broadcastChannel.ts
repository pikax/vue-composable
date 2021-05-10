import { onUnmounted, Ref, ref } from "../api";
import { isClient, NO_OP, PASSIVE_EV } from "../utils";

export interface BroadcastMessageEvent<T> extends MessageEvent {
  readonly data: T;
}

export interface BroadCastChannelReturn<T> {
  supported: boolean;

  data: Ref<T | null>;

  messageEvent: Ref<MessageEvent | null>;
  errorEvent: Ref<MessageEvent | null>;
  errored: Ref<boolean>;
  isClosed: Ref<boolean>;

  send: (data: T) => void;
  close: Function;
  addListener: (
    cb: (ev: BroadcastMessageEvent<T>) => void,
    options?: boolean | AddEventListenerOptions,
  ) => void;
}

export function useBroadcastChannel<T = any>(
  name: string,
  onBeforeClose?: Function,
): BroadCastChannelReturn<T> {
  const supported = isClient && "BroadcastChannel" in self;
  const data = ref<T | null>(null) as Ref<T | null>;

  const messageEvent = ref<MessageEvent | null>(
    null,
  ) as Ref<MessageEvent | null>;
  const errorEvent = ref<MessageEvent | null>(null) as Ref<MessageEvent | null>;
  const errored = ref(false);
  const isClosed = ref(false);

  let send: (data: T) => void = NO_OP;

  let close: Function = NO_OP;
  let addListener: (
    cb: (ev: BroadcastMessageEvent<T>) => void,
    options?: boolean | AddEventListenerOptions,
  ) => void = NO_OP;

  /* istanbul ignore else  */
  if (supported) {
    const bc = new BroadcastChannel(name);

    bc.addEventListener(
      "messageerror",
      (e) => {
        errorEvent.value = e;
        errored.value = true;
      },
      PASSIVE_EV,
    );

    bc.addEventListener(
      "message",
      (ev) => {
        messageEvent.value = ev;
        data.value = ev.data;
      },
      PASSIVE_EV,
    );

    send = (d) => bc.postMessage(d);
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
    addListener,
  };
}
