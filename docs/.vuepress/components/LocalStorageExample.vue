<template>
  <div>
    localStorage: {{storage}}
    <p>
      <b>Check the value in the dev tools: `{{key}}`</b>
    </p>
    <label for="storage">
      <input name="storage" v-model="storage" />
    </label>
  </div>
</template>

<script>
import { useLocalStorage } from "../../../";
export default {
  name: "local-storage-example",

  setup() {
    const key = "__vue_localStorage_example";
    const { storage } = useLocalStorage(key, 1);

    return {
      key,
      storage
    };
  }
};
</script>