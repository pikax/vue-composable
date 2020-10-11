<template>
  <div ref="elref">
    Mouse Move
    <p>x: {{ mouseX }}</p>
    <p>y: {{ mouseY }}</p>
    <p>pageX: {{ pageX }}</p>
    <p>pageY: {{ pageY }}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useMouseMove } from "vue-composable";

export default {
  name: "on-mouse-move-example",
  setup(_) {
    const elref = ref(null);

    const { mouseX, mouseY, pageX, pageY, remove } = useMouseMove(elref);

    return {
      elref,
      remove,
      mouseX,
      mouseY,
      pageX,
      pageY,
    };
  },
};
</script>
