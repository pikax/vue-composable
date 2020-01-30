# IntersectionObserver

> The [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## State

The `useIntersectionObserver` function exposes the following reactive state:

```js
import { useIntersectionObserver } from "vue-composable";

const { supported, elements, isIntersecting } = useIntersectionObserver(
  options
);
```

| State          | Type                               | Description                                                                                             |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| supported      | `Boolean`                          | Is supported                                                                                            |
| elements       | `Ref<IntersectionObserverEntry[]>` | [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) |
| isIntersecting | `Ref<Boolean?`                     | Returns true if **all** observed elements are intersection                                              |

## Methods

The `useIntersectionObserver` function exposes the following methods:

```js
import { useIntersectionObserver } from "vue-composable";

const { observe, unobserve, disconnect, debug } = useIntersectionObserver();
```

| Signature           | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `observe(Element)`  | Starts observing Element                                                                                            |
| `unobserve(Element` | Stops observing Element                                                                                             |
| `disconnect()`      | [IntersectionObserver.disconnect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect) |

<!-- | `debug()`           | Provides some debug information: [WIP]                                                                              | -->

## Example

<intersection-observer-example/>

### Code

```vue
<template>
  <div>
    Visible: {{ isIntersecting }}

    <p>Scroll down</p>
    <div style="height:500px" />

    <div ref="el" style="background:lightgreen">
      Hide me
    </div>

    <p>Scroll up</p>
  </div>
</template>

<script>
import { ref, watch, reactive } from "@vue/composition-api";
import { useIntersectionObserver } from "vue-composable";

export default {
  name: "intersection-observer-example",
  setup() {
    const el = ref(null);
    const o = useIntersectionObserver(el);
    return {
      ...o,
      el
    };
  }
};
</script>
```
