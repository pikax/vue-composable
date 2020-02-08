<template>
  <div>
    <label for="timeout">
      Duration (ms)
      <input type="number" name="timeout" v-model.number="timeout" />
    </label>
    <label for="error">
      Reject promise
      <input type="checkbox" name="error" v-model="throwError" />
    </label>

    <button @click="exec(timeout)">Execute</button>

    <div v-if="loading">loading...</div>
    <div v-else-if="result">{{ result }}</div>
    <div v-else>
      <p>error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { usePromise } from "vue-composable";

export default {
  name: "promise-example",
  setup() {
    const timeout = ref(1000);
    const throwError = ref(false);

    const { exec, error, loading, result } = usePromise(ms => {
      if (throwError.value) {
        return Promise.reject(new Error("Throw Error checked"));
      }
      return new Promise(res => setTimeout(() => res("sucess"), ms));
    });

    return {
      timeout,
      throwError,
      error,
      exec,
      loading,
      result
    };
  }
};
</script>
