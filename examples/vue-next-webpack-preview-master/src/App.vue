<template>
  <img src="./logo.png" />
  <h1>Hello Vue 3!</h1>

  <p>hydrating: {{ hydrating }}</p>

  <ul>
    <li
      v-for="({ name, use }, i) in components"
      :key="name"
      @click="selected = i"
    >
      {{ name }}
    </li>
  </ul>
  <div>
    <array-pagination v-if="selected === 0" />
    <axios v-else-if="selected === 1" />
    <cancellable-promise v-else-if="selected === 2" />
    <fetch v-else-if="selected === 3" />
    <hello-world v-else-if="selected === 4" />
    <swapi v-else-if="selected === 5" />
    <todo-list v-else-if="selected === 6" />
    <validation v-else-if="selected === 7" />
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import ArrayPagination from "./components/ArrayPagination.vue";
import Validation from "./components/Validation.vue";
import CancellablePromise from "./components/CancellablePromise.vue";
import Axios from "./components/Axios.vue";
import Fetch from "./components/Fetch.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Swapi from "./components/SWAPI.vue";
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";
import { useHydration } from "vue-composable";
import { onMounted } from "vue";

export default {
  components: {
    ArrayPagination,
    Axios,
    CancellablePromise,
    Fetch,
    HelloWorld,
    Swapi,
    TodoList,
    Validation
  },

  setup(props, ctx) {
    const hydrating = useHydration();

    console.log("setup hydrating", hydrating.value);
    onMounted(() => {
      console.log("mounted hydrating", hydrating.value);
    });

    const selected = ref(0);
    const components = require
      .context("./components", true, /\.(vue)$/)
      .keys()
      .map(x => x.slice(2))
      .map(x => {
        console.log(x);
        return {
          name: x.split(".")[0]
        };
      });

    return {
      components,
      selected,
      hydrating
    };
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
