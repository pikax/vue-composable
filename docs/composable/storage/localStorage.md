# LocalStorage

> [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Parameters

```js
import { useLocalStorage } from "vue-composable";

const localStorage = useLocalStorage(key, defaultValue?, sync?);
```

| Parameters   | Type                          | Required | Default     | Description                                         |
| ------------ | ----------------------------- | -------- | ----------- | --------------------------------------------------- |
| key          | `string|LocalStorageTyped<T>` | `true`   |             | Key that will be used to store in localStorage      |
| defaultValue | `object`                      | `false`  | `undefined` | default value stored in the localStorage            |
| sync         | `Boolean`                     | `false`  | `true`      | sets the storage to sync automatically between tabs |

## State

The `useLocalStorage` function exposes the following reactive state:

```js
import { useLocalStorage } from "vue-composable";

const { supported, storage } = useLocalStorage(key);
```

| State     | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| supported | `boolean`  | returns true is `localStorage` is available |
| storage   | `Ref<any>` | handler with localStorage value             |

## Methods

The `useLocalStorage` function exposes the following methods:

```js
import { useLocalStorage } from "vue-composable";

const { remove, clear, setSync } = useLocalStorage(key);
```

| Signature          | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `remove()`         | Removes key from the localStorage, equivalent as `storage.value = undefined` |
| `clear()`          | Clears all used localStorage used so far                                     |
| `setSync(boolean)` | Update the local `storage` if the value is changed in other tab              |

## Sync

::: warning
When using `sync: true`, only the **last** ref per key will be able to update
:::

## Example

![Local Storage Cross tab](/vue-composable/localStorage.gif)

<local-storage-example/>

### Code

```vue
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
      remove
    };
  }
};
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
```

## Notes

This uses [WebStorage](./webStorage.md), if access to the internal store is required, use `useWebStorage('localStorage').store` to access it.
