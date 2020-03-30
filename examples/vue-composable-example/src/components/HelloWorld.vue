<template>
  <div class="hello">
    <h1>Vue composable examples</h1>
    <h3>Select one above</h3>
    <input v-model.number="timeout" />
    <div>
      <svg
        :style="{ transform: `rotate(${rotationDegrees}deg)` }"
        width="50"
        height="50"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        fill="none"
      >
        <g stroke-width="2">
          <path d="M10 3H3v4h7" stroke="#35495E" />
          <path d="M10 1H1v8h9" stroke="#41B883" />
        </g>
      </svg>
    </div>
    <p>loading: {{ loading }}</p>

    <button @click="exec">Click me</button>
    <button @click="terminate" :disabled="!loading">Cancel</button>
    <button @click="execNonWorker" :disabled="loading">Non worker</button>
    <button @click="onWorkerSortClick">Date</button>
  </div>
</template>

<script>
import { useWebWorkerFunction, useDateNow } from "vue-composable";
import { defineComponent, computed, ref } from "@vue/composition-api";
import { promises } from "fs";

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

const sortDates = dates => {
  // eslint-disable-next-line no-undef
  return dates.sort(dateFns.compareAsc);
};

const dates = [...Array(100000)].map(
  () => new Date(1995, Math.floor(Math.random() * 2000), 6, 2)
);

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },

  setup() {
    const { now } = useDateNow({
      refreshMs: 1
    });

    const timeout = ref(500);
    const rotationDegrees = computed(() => (now.value / 10) % 360);

    const numbers = [...Array(50000)].map(() =>
      Math.floor(Math.random() * 1000000)
    );

    const { exec: sortWorker } = useWebWorkerFunction(sortDates, {
      dependencies: [
        "https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js"
      ],
      timeout
    });

    const work = useWebWorkerFunction(bubleSort, { timeout });

    const exec = async () => {
      console.log("starting");
      const r = await work.exec(numbers).catch(x => x);
      console.log("ended");
      console.log(r);
    };

    const execNonWorker = () => {
      console.log("starting");
      const r = bubleSort(numbers);
      console.log("ended");
      console.log(r);
    };

    const onWorkerSortClick = () => {
      sortWorker(dates).then(result => {
        console.log("Buble Sort useWorker()", result);
        // addToast("Finished: Sort using useWorker.", { appearance: "success" });
      });
    };

    const terminate = () => {
      debugger;

      work.cancel();
    };

    return {
      ...work,
      exec,
      rotationDegrees,
      execNonWorker,
      onWorkerSortClick,
      terminate,
      timeout
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
