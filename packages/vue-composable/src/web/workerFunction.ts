import { RefTyped, unwrap, PASSIVE_EV, NO_OP, isClient } from "../utils";
import { watch, computed, isRef } from "../api";
import {
  PromiseResultFactory,
  useCancellablePromise,
  CancellablePromiseResult,
} from "../promise";

export const inlineWorkExecution = (f: Function) =>
  function (e: MessageEvent) {
    const args = e.data || [];

    return new Promise((res) => {
      try {
        Promise.resolve(f.apply(f, args))
          // @ts-ignore
          .then((x) => res(postMessage([true, x])))
          // @ts-ignore
          .catch((x) => res(postMessage([false, x])));
      } catch (e) {
        // @ts-ignore
        res(postMessage([false, e]));
      }
    });
  };

export function createBlobUrl(fn: Function, dependencies: readonly string[]) {
  const scripts =
    dependencies.length > 0
      ? `importScripts("${dependencies.join('","')}");`
      : "";

  const blobScript = [
    scripts,
    "onmessage=",
    `(${inlineWorkExecution.toString()})(${fn.toString()})`,
  ];

  const blob = new Blob(blobScript, { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

export interface WebWorkerFunctionOptions {
  dependencies?: RefTyped<string[]>;
  timeout?: RefTyped<number>;
}

export function useWorkerFunction<T, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T,
  options?: WebWorkerFunctionOptions
): PromiseResultFactory<Promise<T | undefined>, TArgs> &
  CancellablePromiseResult {
  const supported = isClient && "Worker" in self;
  // reactive
  const dependencies = computed(
    () => (options && unwrap(options.dependencies)) || []
  );
  const timeoutRef = computed(() => options && unwrap(options.timeout));

  if (!supported) {
    return useCancellablePromise(fn, { lazy: true, throwException: true });
  }

  const promise = useCancellablePromise<T | undefined, TArgs>(
    (...args: TArgs) =>
      new Promise<T | undefined>((res, rej) => {
        const blobUrl = createBlobUrl(fn, dependencies.value);
        const worker = new Worker(blobUrl);

        let timeoutId = -1;
        const timeout = timeoutRef.value;

        const terminate = () => {
          worker.terminate();
          URL.revokeObjectURL(blobUrl);
          clearTimeout(timeoutId);
          removeWatch();
        };

        // if the last argument is ref(false) we should also track it
        const watchCancel =
          args.length === fn.length + 1 &&
          isRef(args[args.length - 1]) &&
          args[args.length - 1].value === false
            ? computed(
                () => promise.cancelled.value || args[args.length - 1].value
              )
            : promise.cancelled;

        const removeWatch = watchCancel
          ? watch(
              watchCancel as any,
              () => {
                terminate();
                res(undefined);
              },
              { immediate: false }
            )
          : NO_OP;

        worker.addEventListener(
          "message",
          (e) => {
            if (e.data[0]) {
              res(e.data[1]);
            } else {
              rej(e.data[1]);
            }
            terminate();
          },
          PASSIVE_EV
        );

        worker.addEventListener(
          "error",
          (e) => {
            terminate();
            rej(e);
          },
          PASSIVE_EV
        );

        worker.postMessage([...args]);

        if (timeout) {
          timeoutId = setTimeout(() => {
            promise.cancel(`[WebWorker] timeout after ${timeout}ms`);
          }, timeout) as any;
        }
      }),
    {
      lazy: true,
      throwException: true,
    }
  );

  return promise;
}
