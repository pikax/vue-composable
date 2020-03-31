<template>
  <div>
    <h3>Sort</h3>
    <p>time: {{ now }}</p>

    <div>
      <label>Size</label>
      <input v-model.number="size" type="number" />
    </div>
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
        <button @click="suffleArray">Function</button>
      </li>
      <li>
        <button @click="suffleWorker" :disabled="working">Worker</button>
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
  watchEffect
} from "@vue/composition-api";
import { useWorkerFunction, useDateNow } from "vue-composable";

const bubleSort = input => {
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
    const timeout = ref(1500);
    const { now } = useDateNow({ refreshMs: 10 });

    const numbers = [...Array(50000)].map(() =>
      Math.floor(Math.random() * 1000000)
    );

    const sortedNumbers = ref([]);

    const firstSegment = computed(() => sortedNumbers.value.slice(0, 10));
    const lastSegment = computed(() => sortedNumbers.value.slice(-10));

    const suffleArray = () => {
      sortedNumbers.value = bubleSort(numbers);
    };
    const {
      exec,
      loading: working,
      error,
      cancelled
    } = useWorkerFunction(bubleSort, { timeout });
    const suffleWorker = () => {
      exec(numbers)
        .then(x => (sortedNumbers.value = x))
        .catch(x => (sortedNumbers.value = ["error", x]));
    };

    return {
      now,
      timeout,

      size,
      firstSegment,
      lastSegment,

      suffleArray,

      suffleWorker,
      working,
      error,
      cancelled
    };
  }
});
</script>
