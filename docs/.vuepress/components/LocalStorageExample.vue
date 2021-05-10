<template>
  <div>
    localStorage: {{ storage }}
    <p>
      supported:
      <b :class="{ green: supported, red: !supported }">{{ supported }}</b>
    </p>
    <p>
      <b>Check the value in the dev tools: `{{ key }}`</b>
    </p>
    <label for="storage">
      <input name="storage" v-model="storage" />
    </label>

    <div>
      <p>Enable tab sync? <input type="checkbox" v-model="tabSync" /></p>
      <p v-if="tabSync">
        Now this tab is listening for changes, please change the storage value
        in other tab
      </p>
    </div>
    <div>
      <button @click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { useLocalStorage } from "vue-composable";
import { ref, watch } from "@vue/composition-api";
export default {
  name: "local-storage-example",

  setup() {
    const key = "__vue_localStorage_example";
    const tabSync = ref(false);
    const { supported, storage, setSync, remove } = useLocalStorage(key, 1);

    watch(tabSync, setSync);

    return {
      key,
      supported,
      tabSync,
      storage,
      remove,
    };
  },
};
</script>
