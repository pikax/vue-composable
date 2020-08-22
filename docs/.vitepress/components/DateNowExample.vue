<template>
  <p>
    Current date: {{ now }}: <b>{{ new Date(now) }}</b>
  </p>
</template>

<script>
import { useDateNow } from "vue-composable";

export default {
  name: "date-now-example",
  setup() {
    return useDateNow();
  }
};
</script>
