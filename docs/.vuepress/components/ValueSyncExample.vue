<template>
  <div>
    <input v-model="value" />

    <p>{{ list }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useValueSync } from "vue-composable";

export default {
  setup() {
    const value = ref("");
    const list = useValueSync(value, ref(1), ref("1"));

    return {
      value,
      list,
    };
  },
};
</script>
