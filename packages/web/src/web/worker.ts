import { ref, onUnmounted } from "@vue/composition-api";

// from https://github.com/dai-shi/react-hooks-worker/blob/1e842ad15c558fc04dd7339a62aaa43f46d1c7cd/src/exposeWorker.js
export function exposeWorker(this: Worker, func: (...args: any[]) => any) {
  this.onmessage = async (e: MessageEvent) => {
    const r = func(e.data);
    if (r[Symbol.asyncIterator]) {
      for await (const i of r) this.postMessage(i);
    } else if (r[Symbol.iterator]) {
      for (const i of r) this.postMessage(i);
    } else {
      this.postMessage(await r);
    }
  };
}

export function useWorker<TData = any, TArgs = any | any[]>(
  stringUrl: string | URL,
  args?: TArgs,
  options?: WorkerOptions
) {
  const errorEvent = ref<Event>();
  const data = ref<TData>();

  const terminated = ref(false);
  const errored = ref(false);

  const worker = new Worker(stringUrl, options);

  /* istanbul ignore next  */
  let lastMessage = (__DEV__ && Date.now()) || undefined;

  const postMessage: (data: TArgs) => void = data => worker.postMessage(data);
  function terminate() {
    worker.terminate();
    terminated.value = true;
  }

  worker.addEventListener("message", x => {
    data.value = x.data;

    // if the messages are to quick, we need to warn
    /* istanbul ignore else  */
    if (__DEV__) {
      if (Date.now() - lastMessage! < 2) {
        console.warn(
          "[useWorker] message rate is too high, " +
            " you might not get updated of all the messages."
        );
      }
      lastMessage = Date.now();
    }
  });

  worker.addEventListener("error", error => {
    errorEvent.value = error;
    errored.value = true;
  });

  onUnmounted(terminate);

  if (args) {
    postMessage(args);
  }

  return {
    worker,
    data,

    postMessage,
    terminate,

    errorEvent,
    errored,
    terminated
  };
}
