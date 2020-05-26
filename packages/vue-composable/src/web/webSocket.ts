import { ref, Ref } from "../api";
import { isClient, NO_OP } from "../utils";

export interface WebSocketReturn {
  supported: boolean;

  data: Ref<any | null>;

  messageEvent: Ref<MessageEvent | null>;
  errorEvent: Ref<Event | null>;
  errored: Ref<boolean>;
  isClosed: Ref<boolean>;
  isOpen: Ref<boolean>;

  send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
  close: Function;

  ws: WebSocket | null;
}

export function useWebSocket(
  url: string,
  protocols?: string | string[]
): WebSocketReturn {
  const supported = isClient && "WebSocket" in window;
  let ws: WebSocket | null = null;
  const messageEvent = ref<MessageEvent | null>(null);
  const errorEvent = ref<Event | null>(null);
  const data = ref<any>(null);

  const isOpen = ref(false);
  const isClosed = ref(false);
  const errored = ref(false);

  /* istanbul ignore next  */
  let lastMessage = (__DEV__ && Date.now()) || undefined;

  let send: (
    data: string | ArrayBufferLike | Blob | ArrayBufferView
  ) => void = NO_OP;
  let close: (code?: number, reason?: string) => void = NO_OP;

  if (supported) {
    ws = new WebSocket(url, protocols);
    ws.addEventListener("message", x => {
      messageEvent.value = x;
      data.value = x.data;

      // if the messages are to quick, we need to warn
      /* istanbul ignore else  */
      if (__DEV__) {
        if (Date.now() - lastMessage! < 2) {
          console.warn(
            '[useWebSocket] message rate is too high, if you are using "data" or "messageEvent"' +
              " you might not get updated of all the messages." +
              ' Use "ws.addEventListener("message", handler)" instead'
          );
        }
        lastMessage = Date.now();
      }
    });

    ws.addEventListener("error", error => {
      errorEvent.value = error;
      errored.value = true;
    });

    ws.addEventListener("close", () => {
      isOpen.value = false;
      isClosed.value = true;
    });

    ws.addEventListener("open", () => {
      isOpen.value = true;
      isClosed.value = false;
    });

    send = (data: string | ArrayBufferLike | Blob | ArrayBufferView) =>
      ws!.send(data);

    close = (code?: number, reason?: string) => {
      ws!.close(code, reason);
    };
  }
  return {
    supported,

    ws,
    send,
    close,

    messageEvent,
    errorEvent,

    data,

    isOpen,
    isClosed,
    errored
  };
}
