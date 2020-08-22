<template>
  <div>
    Toggle
    <b>locked</b> to enable or disable
    <b>scroll</b>
    <div ref="elref" class="scroll-component">
      <p v-for="x in 10" :key="x">{{ x }}</p>
    </div>

    <button @click="remove">remove</button>
    <span>
      <input type="checkbox" v-model="locked" />
      Locked
    </span>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useLockScroll } from "vue-composable";

export default {
  setup(_) {
    const elref = ref(null);

    const { locked, remove } = useLockScroll(elref);

    return {
      elref,
      locked,
      remove
    };
  }
};
</script>
<style scoped>
.scroll-component {
  overflow: scroll;
  height: 70px;
  background: gray;
}

.no-scroll {
  overflow: hidden !important;
}
</style>
