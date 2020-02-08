# Breakpoint

Allows to get reactive object on the current windows size.

::: warning
If `Number` or `{Number}px` it checks the defined breakpoint against window.innerWidth.
`bp >= window.innerWidth`
If `MediaQuery` is passed it will not be able to resolve the `current` breakpoint
:::

## State

The `useBreakpoint` function exposes the following reactive state:

```js
import { useBreakpoint } from "vue-composable";

const { current, /* properties from the arguments */ L, XL } = useBreakpoint({
  L: 720,
  XL: 1280,
  S: "(min-width: 320px)" // also supports media query - it uses `useMatchMedia`
});
```

| State   | Type     | Description                                                           |
| ------- | -------- | --------------------------------------------------------------------- |
| current | `String` | Smallest breakpoint key. where the breakpoint is an `Number`          |
| ...args | `Args`   | returns the object with the same keys but with reactive boolean value |

## Methods

The `useBreakpoint` function exposes the following methods:

```js
import { useBreakpoint } from "vue-composable";

const { remove } = useBreakpoint();
```

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<breakpoint-example/>

### Code

```vue
<template>
  <div>
    <div>Current breakpoint {{ current || "none" }}</div>
    <div>valid breakpoints:</div>
    <p><b v-if="S">Small</b></p>
    <p><b v-if="L">Large</b></p>
    <p><b v-if="XL">Extra Large</b></p>
  </div>
</template>

<script>
import { useBreakpoint } from "vue-composable";
export default {
  name: "breakpoint-example",
  setup() {
    // it will return object with reactive properties {XL: boolean, L: boolean, S: boolean}
    return useBreakpoint({ XL: 1280, L: 768, S: "(min-width: 320px)" });
  }
};
</script>
```
