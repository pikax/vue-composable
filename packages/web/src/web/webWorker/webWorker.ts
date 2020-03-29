import { usePromise } from "@vue-composable/core";
// import runner from "./_runner.js";

function createBlobUrl(fn: Function, dependencies: string[]) {
  // const scripts =
  //   dependencies.length > 0 ? `importScripts("${dependencies.join(",")}")` : "";

  // @ts-check
  // const r = (func: Function) => (e: MessageEvent) => {
  //   const args = e.data || [];

  //   return Promise.resolve(func(...args))
  //     .then(x => {
  //       // @ts-ignore
  //       postMessage([true, x]);
  //     })
  //     .catch(x => {
  //       // @ts-ignore
  //       postMessage([false, e]);
  //     });
  // };

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

  const blobScript = ["self.onmessage=", `(${r.toString()})(${fn.toString()})`];

  const blob = new Blob(blobScript, { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

export function useWorker<T extends Promise<any>, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T
) {
  const promise = usePromise(
    (...args: TArgs) =>
      new Promise((res, rej) => {
        const blobUrl = createBlobUrl(fn, []);

        const worker = new Worker(blobUrl);

        let timeout = -1;

        const terminate = () => {
          worker.terminate();
          clearTimeout(timeout);
        };

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
      }),
    {
      lazy: true,
      throwException: true
    }
  );

  return {
    ...promise
  };
}
