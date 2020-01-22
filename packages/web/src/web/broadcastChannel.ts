import { ref, onUnmounted } from "@vue/composition-api";
import { PASSIVE_EV } from "@vue-composable/core";

interface BroadcastMessageEvent<T> extends MessageEvent {
  readonly data: T;
}

export function useBroadcastChannel<T = any>(name: string) {
  const supported = 'BroadcastChannel' in self;

  const bc = new BroadcastChannel(name);

  const data = ref<T | null>(null)

  const messageEvent = ref<MessageEvent>(null);
  const errorEvent = ref<MessageEvent>();
  const errored = ref(false);
  const isClosed = ref(false);

  const send: (data: T) => void = (d) => bc.postMessage(d);

  const close = () => {
    bc.close();
    isClosed.value = true;
  }

  bc.addEventListener('messageerror', (e) => {
    errorEvent.value = e;
    errored.value = true;
  }, PASSIVE_EV)

  bc.addEventListener('message', (ev) => {
    messageEvent.value = ev;
    data.value = ev.data;
  }, PASSIVE_EV)

  const addListener: (cb: (ev: BroadcastMessageEvent<T>) => void, options?: boolean | AddEventListenerOptions) => void = (cb, o) => {
    bc.addEventListener('message', cb, o);
    onUnmounted(() => bc.removeEventListener('message', cb));
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
  }
}