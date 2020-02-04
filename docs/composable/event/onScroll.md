# Event

> The [mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event).

## State

The `useOnScroll` function exposes the following reactive state:

```js
import { useOnScroll } from "vue-composable";

const { scrollTop, scrollLeft } = useOnScroll();
```

| State      | Type     | Description         |
| ---------- | -------- | ------------------- |
| scrollTop  | `Number` | Scroll top position |
| scrollLeft | `Number` | Scroll let position |

## Methods

The `useOnScroll` function exposes the following methods:

```js
import { useOnScroll } from "vue-composable";

const { remove } = useOnScroll();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example


<on-scroll-example/>


### Code

```vue
<template>
  <div>
    Scroll
    <p>top: {{ scrollTop }}</p>
    <p>left: {{ scrollLeft }}</p>

    <div ref="elref" style="overflow:scroll;height:70px;background:gray">
      <p v-for="x in 10" :key="x">{{ x }}</p>
    </div>

    <button @click="remove">remove</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import { useOnScroll } from "vue-composable";

export default {
  name: "on-scroll-example",
  setup(_) {
    const elref = ref(null);

    const { scrollTop, scrollLeft, remove } = useOnScroll(elref);

    return {
      elref,
      scrollTop,
      scrollLeft,
      remove
    };
  }
};
</script>
```
