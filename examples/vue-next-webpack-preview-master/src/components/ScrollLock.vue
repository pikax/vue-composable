<template>
  <div>
    <label>scrollLock</label>
    <input type="checkbox" v-model="locked" />
  </div>
  <div ref="scrollable" class="scroll-lock-example">
    <p v-for="i in 100">
      NOBODY READS THESE ANYMORE
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useLockScroll } from "vue-composable";

export default defineComponent({
  setup() {
    const scrollable = ref();

    const { locked } = useLockScroll(scrollable);

    return {
      scrollable,
      locked
    };
  }
});
</script>

<style>
.scroll-lock-example {
  height: 300px;
  width: 300px;
  overflow: scroll;
}

.no-scroll {
  overflow: hidden;
}
</style>
