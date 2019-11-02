# LocalStorage

> The [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## State

The `useLocalStorage` function exposes the following reactive state:

```js
import { useLocalStorage } from "vue-composable";

const { scrollTop, scrollLeft } = useLocalStorage(key);
```

| State   | Type  | Description                     |
| ------- | ----- | ------------------------------- |
| storage | `any` | handler with localStorage value |

## Methods

The `useLocalStorage` function exposes the following methods:

```js
import { useLocalStorage } from "vue-composable";

const { remove, clear } = useLocalStorage(key);
```

| Signature  | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `remove()` | Removes key from the localStorage, equivalent as `storage.value = undefined` |
| `clear()`  | Clears all used localStorage used so far                                     |

## Example

```vue
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
```

### Code

<local-storage-example/>
