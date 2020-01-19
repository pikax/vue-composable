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
      {{ result }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useAxios } from "@vue-composable/axios";

export default {
  setup() {
    const id = ref(1);
    const { result, loading, exec, status } = useAxios();

    watch(id, id => {
      exec({ url: "https://reqres.in/api/user/" + id });
    });

    return {
      id,
      result,
      loading,
      status
    };
  }
};
</script>
