<template>
  <div ref="elref">
    Mouse Move
    <p>x: {{mouseX}}</p>
    <p>y: {{mouseY}}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnMouseMove } from "../../../packages/web";

export default {
  name: "on-mouse-move-example",
  setup(_) {
    const elref = ref(null);

    const { mouseX, mouseY, remove } = useOnMouseMove(elref);

    return {
      elref,
      remove,
      mouseX,
      mouseY
    };
  }
};
</script>