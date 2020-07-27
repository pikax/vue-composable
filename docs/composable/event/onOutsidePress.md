# useOnOutsidePress

> Execute callback when click is outside of element

## Parameters

```js
import { useOnOutsidePress } from "vue-composable";

useOnOutsidePress(element, callback);
```

| Parameters | Type                      | Required | Default | Description                              |
| ---------- | ------------------------- | -------- | ------- | ---------------------------------------- |
| element    | `Ref<Element>`            | `true`   |         | Element to keep track if clicked outside |
| callback   | `(e: MouseEvent) => void` | `true`   |         | Callback when clicked outside            |

## Methods

The `useOnOutsidePress` function exposes the following methods:

```js
import { useOnOutsidePress } from "vue-composable";

const remove = useOnOutsidePress();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<on-outside-press-example/>

### Code

```vue
<template>
  <div>
    <div ref="elref" style="background: red;width:100px">
      Click Outside or inside
    </div>
    <p>check the console</p>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnOutsidePress } from "vue-composable";

export default {
  name: "on-mouse-move-example",
  setup(_) {
    const elref = ref(null);

    useOnOutsidePress(elref, () => console.log("clicked outside"));

    return { elref };
  }
};
</script>
```
