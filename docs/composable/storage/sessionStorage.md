# SessionStorage

> [SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

## Parameters

```js
import { useSessionStorage } from "vue-composable";

const SessionStorage = useSessionStorage(key, defaultValue?);
```

| Parameters   | Type                            | Required | Default     | Description                                      |
| ------------ | ------------------------------- | -------- | ----------- | ------------------------------------------------ |
| key          | `string|SessionStorageTyped<T>` | `true`   |             | Key that will be used to store in SessionStorage |
| defaultValue | `object`                        | `false`  | `undefined` | default value stored in the SessionStorage       |

## State

The `useSessionStorage` function exposes the following reactive state:

```js
import { useSessionStorage } from "vue-composable";

const { supported, storage } = useSessionStorage(key);
```

| State     | Type       | Description                                   |
| --------- | ---------- | --------------------------------------------- |
| supported | `boolean`  | returns true is `SessionStorage` is available |
| storage   | `Ref<any>` | handler with SessionStorage value             |

## Methods

The `useSessionStorage` function exposes the following methods:

```js
import { useSessionStorage } from "vue-composable";

const { remove, clear, setSync } = useSessionStorage(key);
```

| Signature          | Description                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `remove()`         | Removes key from the SessionStorage, equivalent as `storage.value = undefined`                                                         |
| `clear()`          | Clears all used SessionStorage used so far                                                                                             |
| `setSync(boolean)` | Does nothing, since the session is only available on the tab, this is here to allow the same API as `useLocalStorage`. Returns `false` |

## Example


<Session-storage-example/>


### Code

```vue
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

This uses [WebStorage](./webStorage.md), if access to the internal store is required, use `useWebStorage('sessionStorage').store` to access it.
