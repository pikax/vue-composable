<template>
  <div>
    Window Resize
    <p>height: {{height}}</p>
    <p>width: {{width}}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnResize } from "../../../";

export default {
  name: "on-resize-example",
  setup(_) {
    const { height, width, remove } = useOnResize(document.body);

    return {
      height,
      width,
      remove
    };
  }
};
</script>