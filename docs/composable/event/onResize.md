# Resize

> The [resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event).

# WIP

## State

The `useOnResize` function exposes the following reactive state:

```js
import { useOnResize } from "vue-composable";

const { height, width } = useOnResize();
```

| State  | Type     | Description    |
| ------ | -------- | -------------- |
| height | `Number` | element height |
| width  | `Number` | element width  |

## Methods

The `useOnResize` function exposes the following methods:

```js
import { useOnResize } from "vue-composable";

const { remove } = useOnResize();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<ClientOnly>
<on-resize-example/>
</ClientOnly>

### Code

```vue
<template>
  <div>
    Window Resize
    <p>height: {{ height }}</p>
    <p>width: {{ width }}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnResize } from "vue-composable";

export default {
  name: "on-resize-example",
  setup(_) {
    const { height, width, remove } = useOnResize(document.body);

    return {
      height,
      width,
      remove
    };
  }
};
</script>
```
