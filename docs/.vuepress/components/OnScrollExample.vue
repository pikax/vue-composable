<template>
  <div>
    Scroll
    <p>top: {{scrollTop}}</p>
    <p>left: {{scrollLeft}}</p>

    <div ref="elref" style="overflow:scroll;height:70px;background:gray">
      <p v-for="x in 10" :key="x">{{x}}</p>
    </div>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnScroll } from "../../..";

export default {
  name: "on-scroll-example",
  setup(_) {
    const elref = ref(null);

    const { scrollTop, scrollLeft, remove } = useOnScroll(elref);

    return {
      elref,
      scrollTop,
      scrollLeft,
      remove
    };
  }
};
</script>