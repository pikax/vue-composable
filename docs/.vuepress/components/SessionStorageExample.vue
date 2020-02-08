<template>
  <div>
    sessionStorage: {{ storage }}
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
      <button @click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { useSessionStorage } from "vue-composable";
import { ref, watch } from "@vue/composition-api";
export default {
  name: "session-storage-example",

  setup() {
    const key = "__vue_sessionStorage_example";
    const tabSync = ref(false);
    const { supported, storage, remove } = useSessionStorage(key, 1);

    return {
      key,
      supported,
      tabSync,
      storage,
      remove
    };
  }
};
</script>
