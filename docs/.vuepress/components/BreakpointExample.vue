<template>
  <div>
    <div>Current breakpoint {{ current || "none" }}</div>
    <div>valid breakpoints:</div>
    <p><b v-if="S">Small</b></p>
    <p><b v-if="L">Large</b></p>
    <p><b v-if="XL">Extra Large</b></p>
  </div>
</template>

<script>
import { useBreakpoint } from "vue-composable";

export default {
  name: "breakpoint-example",
  setup() {
    // it will return object with reactive properties {XL: boolean, L: boolean, S: boolean}
    return useBreakpoint({ XL: 1280, L: 768, S: "(min-width: 320px)" });
  },
};
</script>
