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
      <b>Check the value in the dev tools: `{{ key }}`</b>
    </p>
    <label for="storage">
      <input name="storage" v-model="storage" />
    </label>
  </div>
</template>

<script>
import { useLocalStorage } from "vue-composable";
export default {
  name: "local-storage-example",

  setup() {
    const key = "__vue_localStorage_example";
    const supportedSync = ref(true);
    const { storage } = useLocalStorage(key, 1);

    return {
      key,
      storage
    };
  }
};
</script>
```
