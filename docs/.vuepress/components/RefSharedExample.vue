<template>
  <div>
    <p>To test please open 2 or more tabs and edit the input box</p>
    <input v-model="myRefVar" />
  </div>
</template>

<script>
import { refShared } from "vue-composable";
export default {
  name: "ref-shared-example",
  setup() {
    const myRefVar = refShared("Hello world");
    return { myRefVar };
  },
};
</script>
