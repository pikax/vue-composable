<template>
  <div>
    <label for="title-updater">document.title:</label>
    <input name="title-updater" v-model="title" />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { useTitle } from "vue-composable";

export default defineComponent({
  setup() {
    const title = useTitle();
    return {
      title
    };
  }
});
</script>
