<template>
  <div>
    <p>
      Performance.now : <b>{{ now }}</b>
    </p>
    <p>
      Created <b>{{ Math.floor(now / 1000) }}</b> seconds ago
    </p>
  </div>
</template>

<script>
import { usePerformanceNow } from "vue-composable";

export default {
  name: "performance-now-example",
  setup() {
    return usePerformanceNow();
  },
};
</script>
