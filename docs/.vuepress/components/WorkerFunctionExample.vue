<template>
  <div>
    <h3>Sort</h3>
    <p>time: {{ now }}</p>
    <h6>
      If UI thread is working the refresh rate should go down and the time will
      stop
    </h6>
    <div>
      <label>Timeout</label>
      <input v-model.number="timeout" type="number" />
    </div>

    <p>
      Numbers:
      <b>{{ firstSegment }}</b
      >...
      <b>{{ lastSegment }}</b>
    </p>

    <ul>
      <li>
        <button @click="sortArray">Function</button>
      </li>
      <li>
        <button @click="sortWorker" :disabled="working">Worker</button>
        <p v-if="cancelled" :style="{ color: 'red' }">{{ error }}</p>
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
} from "@vue/composition-api";
import { useWorkerFunction, useDateNow } from "vue-composable";

const bubbleSort = (input) => {
  let swap;
  let n = input.length - 1;
  const sortedArray = input.slice();
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
  } while (swap);

  return sortedArray;
};

export default defineComponent({
  name: "worker-function-example",
  setup() {
    const timeout = ref(15000);
    const { now } = useDateNow({ refreshMs: 10 });

    const numbers = [...Array(50000)].map(() =>
      Math.floor(Math.random() * 1000000)
    );

    const sortedNumbers = ref([]);

    const firstSegment = computed(() => sortedNumbers.value.slice(0, 10));
    const lastSegment = computed(() => sortedNumbers.value.slice(-10));

    const sortArray = () => {
      sortedNumbers.value = bubbleSort(numbers);
    };
    const {
      exec,
      loading: working,
      error,
      cancelled,
    } = useWorkerFunction(bubbleSort, { timeout });
    const sortWorker = () => {
      exec(numbers)
        .then((x) => (sortedNumbers.value = x))
        .catch((x) => (sortedNumbers.value = ["error", x]));
    };

    return {
      now,
      timeout,

      firstSegment,
      lastSegment,

      sortArray,

      sortWorker,
      working,
      error,
      cancelled,
    };
  },
});
</script>
