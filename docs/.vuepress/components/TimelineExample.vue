<template>
  <div>
    <p>Type a text to enable undo and redo</p>
    <input v-model="value" />

    <p>
      <b>History</b>
      {{ timeline }}
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTimeline } from "vue-composable";

export default {
  setup() {
    const value = ref("");
    const timeline = useTimeline(value);

    return {
      value,
      timeline,
    };
  },
};
</script>
