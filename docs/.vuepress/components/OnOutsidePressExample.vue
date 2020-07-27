<template>
  <div>
    <div ref="elref" style="background: red;width:100px">
      Click Outside or inside
    </div>
    <p>check the console</p>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnOutsidePress } from "vue-composable";

export default {
  name: "on-mouse-move-example",
  setup(_) {
    const elref = ref(null);

    useOnOutsidePress(elref, () => console.log("clicked outside"));

    return { elref };
  }
};
</script>
