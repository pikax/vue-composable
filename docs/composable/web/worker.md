# Web Worker API

> The [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## Parameters

```js
import { useWorker } from "vue-composable";

useWorker(stringUrl, args?, options?);
```

| Parameters | Type      | Required | Default     | Description                                                                     |
| ---------- | --------- | -------- | ----------- | ------------------------------------------------------------------------------- |
| stringUrl  | `String   | URL`     | `true`      |                                                                                 | Webworker file path |
| args       | `any      | any[]`   | `false`     | `undefined`                                                                     | arguments for the first message sent to the worker |
| options    | `Options` | `false`  | `undefined` | [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) |

## State

The `useWorker` function exposes the following reactive state:

```js
import { useWorker } from "vue-composable";

const { worker, data, terminated, errorEvent, errored } = useWorker();
```

| State      | Type           | Description                            |
| ---------- | -------------- | -------------------------------------- |
| worker     | `Worker`       | Worker instance                        |
| data       | `Ref<any>`     | Last message received by the worker    |
| terminated | `Ref<boolean>` | Has worker being terminated            |
| errorEvent | `Ref<any>`     | Last event received on 'error' message |
| errored    | `Ref<boolean>` | Has error occurred                     |

## Methods

The `useWorker` function exposes the following methods:

```js
import { useWorker } from "vue-composable";

const { postMessage, terminate } = useWorker();
```

| Signature     | Description               |
| ------------- | ------------------------- |
| `postMessage` | PostMessage to the worker |
| `terminate`   | Terminates the worker     |

## Inside the worker

Inside of worker you can use the `exposeWorker`, it will post the result and execute the method when receiving the message.

```js
// super.worker.js
import { exposeWorker } from "vue-composable";

const max = (numbers) => Math.max(...numbers);

exposeWorker(max);
```

::: tip
`exposeWorker` you can use `yield` to sending a stream of data to the main thread
:::

## Example

<worker-example/>

### Code

You can find the `worker` used in this example at [worker.example.js](https://pikax.me/vue-composable/worker.example.js)

```js
// worker.example.js

import { exposeWorker } from "vue-composable";

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
```

```vue
<template>
  <div>
    <h3>Sort</h3>
    <p>time: {{ now }}</p>
    <h6>
      The worker can take more than 10 seconds to finish, the timer shouldn't
      stop while the worker is processing
    </h6>

    <p>
      Numbers:
      <b>{{ firstSegment }}</b
      >...
      <b>{{ lastSegment }}</b>
    </p>

    <ul>
      <li>
        <button @click="sortWorker">Worker</button>
        <p v-if="errored" :style="{ color: 'red' }">{{ errorEvent }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
  watch,
} from "@vue/composition-api";
import { useWorker, useDateNow } from "vue-composable";

export default defineComponent({
  name: "worker-example",
  setup() {
    const timeout = ref(1500);
    const { now } = useDateNow({ refreshMs: 10 });

    const numbers = [...Array(50000)].map(() =>
      Math.floor(Math.random() * 1000000)
    );

    const sortedNumbers = ref([]);

    const firstSegment = computed(() => sortedNumbers.value.slice(0, 10));
    const lastSegment = computed(() => sortedNumbers.value.slice(-10));

    const { postMessage, data, errored, errorEvent } = useWorker(
      "/vue-composable/worker.example.js"
    );

    watch(
      data,
      (d) => {
        sortedNumbers.value = d;
      },
      { lazy: true }
    );

    watch(
      errorEvent,
      (e) => {
        sortedNumbers.value = ["error", e.returnValue];
      },
      { lazy: true }
    );

    const sortWorker = () => {
      postMessage(numbers);
    };

    return {
      now,

      firstSegment,
      lastSegment,

      sortWorker,
      errored,
      errorEvent,
    };
  },
});
</script>
```
