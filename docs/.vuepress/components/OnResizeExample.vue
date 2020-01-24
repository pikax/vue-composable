<template>
  <div>
    Window Resize
    <p>height: {{ height }}</p>
    <p>width: {{ width }}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnResize, isClient } from "vue-composable";

export default {
  name: "on-resize-example",
  setup(_) {
    const { height, width, remove } = useOnResize(
      (isClient && document.body) || null
    );

    return {
      height,
      width,
      remove
    };
  }
};
</script>
