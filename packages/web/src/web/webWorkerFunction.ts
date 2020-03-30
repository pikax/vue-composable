import { useCancellablePromise, RefTyped, unwrap } from "@vue-composable/core";
import { watch, computed } from "@vue/composition-api";

function createBlobUrl(fn: Function, dependencies: string[]) {
  const scripts =
    dependencies.length > 0
      ? `importScripts("${dependencies.join(",")}");`
      : "";

  const r = (f: Function) => (e: MessageEvent) => {
    const args = e.data || [];

    return (
      Promise.resolve(f(...args))
        // @ts-ignore
        .then(x => postMessage([true, x]))
        // @ts-ignore
        .catch(x => postMessage([false, x]))
    );
  };

  const blobScript = [
    scripts,
    "onmessage=",
    `(${r.toString()})(${fn.toString()})`
  ];

  const blob = new Blob(blobScript, { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

export interface WebWorkerFunctionOptions {
  dependencies?: RefTyped<string[]>;
  timeout?: RefTyped<number>;
}

export function useWebWorkerFunction<
  T extends Promise<any>,
  TArgs extends Array<any>
>(fn: (...args: TArgs) => T, options?: WebWorkerFunctionOptions) {
  const dependencies = computed(() => options && unwrap(options.dependencies));
  const timeoutRef = computed(() => options && unwrap(options.timeout));

  const promise = useCancellablePromise(
    (...args: TArgs) =>
      new Promise((res, rej) => {
        const blobUrl = createBlobUrl(
          fn,
          (dependencies.value as string[]) || []
        );
        const worker = new Worker(blobUrl);

        let timeoutId = -1;
        const timeout = timeoutRef.value;

        const terminate = () => {
          worker.terminate();
          URL.revokeObjectURL(blobUrl);
          clearTimeout(timeoutId);
          removeWatch();
        };

        const removeWatch = watch(promise.cancelled, terminate, { lazy: true });

        worker.onmessage = e => {
          if (e.data[0]) {
            res(e.data[1]);
          } else {
            rej(e.data[1]);
          }
          terminate();
        };

        worker.onerror = e => {
          rej(e);
          terminate();
        };

        worker.postMessage([...args]);

        if (timeout) {
          timeoutId = setTimeout(() => {
            promise.cancel(`[WebWorker] timeout after ${timeout}ms`);
          }, timeoutId) as any;
        }
      }),
    {
      lazy: true,
      throwException: true
    }
  );

  return promise;
}
