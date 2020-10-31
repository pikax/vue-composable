<template>
  <div>
    Mouse distance: <b>{{ distance }}px</b>

    <div ref="el" style="height: 10px; width: 10px; background: red"></div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useMouseDistanceFromElement } from "vue-composable";
export default {
  setup() {
    const el = ref(null);
    const { distance } = useMouseDistanceFromElement(el);

    return {
      el,
      distance,
    };
  },
};
</script>
