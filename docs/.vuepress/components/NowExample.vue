<template>
  <p>
    Created <b>{{ now }}</b> seconds ago
  </p>
</template>

<script>
import { useNow } from "vue-composable";

export default {
  name: "now-example",
  setup() {
    let i = 0;
    return useNow({
      timeFn: () => {
        ++i;
        return i;
      },
    });
  },
};
</script>
