// expose worker code without typing
// based from https://github.com/dai-shi/react-hooks-worker/blob/1e842ad15c558fc04dd7339a62aaa43f46d1c7cd/src/exposeWorker.js
// code from /packages/web/worker.ts
function exposeWorker(func) {
  this.onmessage = async e => {
    const r = func(e.data);

    if (r === undefined) {
      if (__DEV__) {
        console.warn(
          `[exposeWorker] returned \`${r}\`, this might cause unexpected behaviour`
        );
      }
      this.postMessage(r);
    } else if (r === null) {
      this.postMessage(r);
    } else if (Array.isArray(r)) {
      this.postMessage(r);
    } else if (r[Symbol.asyncIterator]) {
      for await (const i of r) this.postMessage(i);
    } else if (r[Symbol.iterator]) {
      for (const i of r) this.postMessage(i);
    } else {
      this.postMessage(await r);
    }
  };
}
// / exposeWorker

function* bubbleSort(input) {
  let swap;
  let n = input.length - 1;
  const sortedArray = input.slice();

  yield ["sorting", `${input.length} items`];
  do {
    swap = false;
    for (let index = 0; index < n; index += 1) {
      if (sortedArray[index] > sortedArray[index + 1]) {
        const tmp = sortedArray[index];
        sortedArray[index] = sortedArray[index + 1];
        sortedArray[index + 1] = tmp;
        swap = true;
      }
    }
    n -= 1;

    if (Math.floor(input.length / 2) === n) {
      yield ["sorted", `${n} items processed`];
    }
  } while (swap);

  yield sortedArray;
}

exposeWorker(bubbleSort);
