# Storage

> [LocalStorage](./localStorage.md) but falls back if not supported to [SessionStorage](./sessionStorage.md)

## Notes

Use this if you don't want to handle [Private Browsing / Incognito modes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#Private_Browsing_Incognito_modes) caveats.

This is recommended if you want to support safari users using private mode.

## Example

<storage-example/>

### Code

```vue
<template>
  <div>
    storage: {{ storage }}
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
      <p>Sync supported: {{ supportedSync }}</p>
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
import { useLocalStorage, useStorage } from "vue-composable";
import { ref, watch } from "@vue/composition-api";
export default {
  name: "storage-example",

  setup() {
    const key = "__vue_storage_example";
    const tabSync = ref(false);
    const supportedSync = ref(true);

    const { supported, storage, setSync, remove } = useStorage(key, 1);

    watch(tabSync, (s) => {
      if (setSync(s) === false) {
        supportedSync.value = false;
      }
    });

    return {
      key,
      supported,
      supportedSync,

      tabSync,
      storage,
      remove,
    };
  },
};
</script>
```
