import { ref } from "@vue/composition-api";

export function useWebSocket(url: string, protocols?: string | string[]) {
  const ws = new WebSocket(url, protocols);
  const messageEvent = ref<MessageEvent>(null);
  const errorEvent = ref<Event>();
  const data = ref<any>(null);

  const isOpen = ref(false);
  const isClosed = ref(false);
  const errored = ref(false);

  /* istanbul ignore next  */
  let lastMessage = (__DEV__ && Date.now()) || undefined;

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
            ' Use "ws..addEventListener("message", handler)" instead'
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

  const send = (data: string | ArrayBufferLike | Blob | ArrayBufferView) =>
    ws.send(data);

  const close = (code?: number, reason?: string) => {
    ws.close(code, reason);
  };

  return {
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
