<template>
  <div class="hello">
    <h1>Vue composable examples</h1>
    <h3>Select one above</h3>

    <p>loading: {{ loading }}</p>

    <button @click="exec" :disabled="loading">Click me</button>
  </div>
</template>

<script>
import { useWorker } from "vue-composable";
import { defineComponent } from "@vue/composition-api";

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
  name: "HelloWorld",
  props: {
    msg: String
  },

  setup() {
    const numbers = [...Array(50000)].map(() =>
      Math.floor(Math.random() * 1000000)
    );

    const work = useWorker(bubleSort);

    const exec = async () => {
      console.log("starting");
      const r = await work.exec(numbers);
      console.log("ended");
      console.log(r);
    };

    return {
      ...work,
      exec
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
