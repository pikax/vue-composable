# useValueSync

> Syncs variables value, across multiple `ref`s

## Parameters

```js
import { useValueSync } from "vue-composable";

useValueSync(main, list?);
useValueSync(main, arg1, arg2, arg3)
```

| Parameters | Type                       | Required | Default     | Description                             |
| ---------- | -------------------------- | -------- | ----------- | --------------------------------------- |
| main       | `Ref<T>`                   | `true`   |             | Main variable to keep the other synched |
| list       | `Ref<Ref<T[]>> | Ref<T>[]` | `false`  | `[]`        | List of `ref` to keep values synched    |
| arg1, arg2 | `Ref<T>`                   | `true`   | `undefined` | `ref` to keep values synched            |

## State

The `useValueSync` function exposes the following reactive state:

```js
import { useValueSync } from "vue-composable";

const list = useValueSync();
```

| State | Type            | Description            |
| ----- | --------------- | ---------------------- |
| list  | `Ref<Ref<T>[]>` | List of tracked `ref`s |

## Example

<value-sync-example/>

### Code

```vue
<template>
  <div>
    <input v-model="value" />

    <p>{{ list }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useValueSync } from "vue-composable";

export default {
  setup() {
    const value = ref("");
    const list = useValueSync(value, ref(1), ref("1"));

    return {
      value,
      list
    };
  }
};
</script>
```
