# Event

> The [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event).

## Parameters

```js
import { useOnScroll } from "vue-composable";

const scroll = useOnScroll();
const scroll = useOnScroll(wait);
const scroll = useOnScroll(options, wait?);
const scroll = useOnScroll(element, options?, wait?);

```

| Parameters | Type          | Required                 | Default     | Description            |
| ---------- | ------------- | ------------------------ | ----------- | ---------------------- |
| element    | `Ref<Element> | Element`                 | `false`     | `window`               | DOM element used to track scroll position |
| options    | `boolean      | AddEventListenerOptions` | `false`     | `{passive: true}`      | Listener options |
| wait       | `Number`      | `false`                  | `undefined` | Debounce event in `ms` |

::: tip

If no `element` is passed it will use `window` to get the scroll of the page

:::

## State

The `useOnScroll` function exposes the following reactive state:

```js
import { useOnScroll } from "vue-composable";

const { scrollTop, scrollLeft } = useOnScroll();
```

| State      | Type     | Description                                                    |
| ---------- | -------- | -------------------------------------------------------------- |
| scrollTop  | `Number` | Scroll top position, if value is set it will call scrollTopTo  |
| scrollLeft | `Number` | Scroll let position, if value is set it will call scrollLeftTo |

## Methods

The `useOnScroll` function exposes the following methods:

```js
import { useOnScroll } from "vue-composable";

const { remove, scrollTo, scrollLeftTo, scrollTopTo } = useOnScroll();
```

| Signature        | Description                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| `remove`         | Manually removes the event listener                                                                                 |
| `scrollTo`       | Same as calling [element.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)             |
| `scrollBy`       | Same as calling [element.scrollBy()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy)             |
| `scrollIntoView` | Same as calling [element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) |
| `scrollLeftTo`   | Calls scrollTo with left argument                                                                                   |
| `scrollTopTo`    | Calls scrollTo with top argument                                                                                    |

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
      remove,
    };
  },
};
</script>
```
