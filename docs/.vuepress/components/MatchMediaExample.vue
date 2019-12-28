<template>
  <div>
    <p>Screen less than 600px: <b>{{ matches }}</b></p>
  </div>
</template>

<script>
import { useMatchMedia } from "vue-composable";

export default {
  name: "match-media-example",
  setup() {
    return useMatchMedia("(max-width: 600px)");
  }
};
</script>
