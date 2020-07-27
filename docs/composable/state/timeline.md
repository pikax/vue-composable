#

> The [mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event).

## Parameters

```js
import { useTimeline } from "vue-composable";

const options = {
    deep: Boolean,
    maxLength: Number,
    clone(entry: T): T
}

const timeline = useTimeline(value, options);
```

| Parameters | Type                 | Required | Default                                                     | Description            |
| ---------- | -------------------- | -------- | ----------------------------------------------------------- | ---------------------- |
| value      | `Ref<T>`             | `true`   |                                                             | `ref` to track history |
| options    | `TimelineOptions<T>` | `false`  | `{ deep: false, maxLength: MAX_ARRAY_SIZE, clone: (x)=>x }` | timeline options       |

::: tip

If tracking object please provide a `options.clone` function.

```ts
// example
function clone(e) {
  return JSON.parse(JSON.stringify(e));
}
```

:::

## State

The `useTimeline` function exposes the following reactive state:

```js
import { useTimeline } from "vue-composable";

const timeline = useTimeline();
```

| State    | Type                           | Description      |
| -------- | ------------------------------ | ---------------- |
| timeline | `Ref<{item: T, date: Date}[]>` | `timeline` array |

## Example

<timeline-example/>

### Code

```vue
<template>
  <div>
    <p>Type a text to enable undo and redo</p>
    <input v-model="value" />

    <p>
      <b>History</b>
      {{ timeline }}
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTimeline } from "vue-composable";

export default {
  setup() {
    const value = ref("");
    const timeline = useTimeline(value);

    return {
      value,
      timeline
    };
  }
};
</script>
```
