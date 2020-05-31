<template>
  <div id="fetch">
    <h3>Using <b>reqres.in</b> API</h3>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">
      loading...
    </p>
    <div v-else>
      <p>Status: {{ status }}</p>
      {{ json }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useFetch, useTitle } from "vue-composable";

export default {
  setup() {
    const title = useTitle("Fetch example");
    const id = ref(1);
    const { json, loading, exec, status } = useFetch();

    watch(
      id,
      id => {
        exec("https://reqres.in/api/user/" + id);
      },
      { immediate: true }
    );
    watch(json, json => {
      title.value = `Fetch example: ` + json.data.name;
    });

    return {
      id,
      json,
      loading,
      status
    };
  }
};
</script>
