# Now

> Reactive custom timer with specified refresh rate

## Parameters

```js
import { useNow } from "vue-composable";

const now = useNow({
  refreshMs?: Number,
  sync?: Boolean,
  timeFn?: Function<Boolean>
});
```

| Parameters | Type                | Required | Default    | Description                                            |
| ---------- | ------------------- | -------- | ---------- | ------------------------------------------------------ |
| refreshMs  | `Number`            | No       | `1000`     | Refresh rate in milliseconds that the now gets updated |
| sync       | `Boolean`           | No       | `true`     | Sync with the clock by the second                      |
| timeFn     | `Function<Boolean>` | NO       | `Date.now` | Function called when refresh the date                  |

## State

The `useNow` function exposes the following reactive state:

```js
import { useNow } from "vue-composable";

const { now } = useNow();
```

| State | Type          | Description  |
| ----- | ------------- | ------------ |
| now   | `Ref<Number>` | Current time |

## Methods

The `useNow` function exposes the following methods:

```js
import { useNow } from "vue-composable";

const { remove } = useNow();
```

| Signature | Description                             |
| --------- | --------------------------------------- |
| `remove`  | Manually stop the `now` to be refreshed |

## Example

<now-example/>

### Code

```vue
<template>
  <p>
    Created <b>{{ now }}</b> seconds ago
  </p>
</template>

<script>
import { useNow } from "vue-composable";

export default {
  name: "now",
  setup() {
    let i = 0;
    return useNow({
      timeFn: () => ++i,
    });
  },
};
</script>
```
