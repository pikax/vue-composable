<template>
  <div id="format">
    <div>
      <h4>Path example</h4>
      <div>
        Path:
        <input v-model="inputPath" />
      </div>
      <div>
        <p>Object</p>
        <textarea v-text="json" />
      </div>

      <div>
        <p>Value:</p>
        <textarea v-text="inputValue" disabled />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from "@vue/composition-api";
import { usePath } from "vue-composable";

export default defineComponent({
  name: "path-example",
  setup() {
    const inputPath = ref("user.name");
    const json = ref(JSON.stringify({ user: { name: "test" } }));

    const inputValue = usePath(
      computed(() => JSON.parse(json.value)),
      inputPath,
      ".",
      () => "Not Found"
    );

    return {
      inputPath,
      json,
      inputValue,
    };
  },
});
</script>
