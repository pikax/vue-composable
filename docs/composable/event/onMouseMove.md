# MouseMove

> The [mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event).

## State

The `useOnMouseMove` function exposes the following reactive state:

```js
import { useOnMouseMove } from "vue-composable";

const { mouseX, mouseY } = useOnMouseMove();
```

| State  | Type     | Description      |
| ------ | -------- | ---------------- |
| mouseX | `Number` | Mouse X position |
| mouseY | `Number` | Mouse Y position |

## Methods

The `useOnMouseMove` function exposes the following methods:

```js
import { useOnMouseMove } from "vue-composable";

const { remove } = useOnMouseMove();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

```vue
<template>
  <div ref="elref">
    Mouse Move
    <p>x: {{ mouseX }}</p>
    <p>y: {{ mouseY }}</p>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useMouseMove } from "vue-composable";

export default {
  name: "on-mouse-move-example",
  setup(_) {
    const elref = ref(null);

    const { mouseX, mouseY, remove } = useMouseMove(elref);

    return {
      elref,
      remove,
      mouseX,
      mouseY
    };
  }
};
</script>
```

### Code

<ClientOnly>
<on-mouse-move-example/>
</ClientOnly>
