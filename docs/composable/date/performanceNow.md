# PerformanceNow

> Reactive `performance.now()` with specified refresh rate

## Parameters

```js
import { usePerformanceNow } from "vue-composable";

const now = usePerformanceNow({
  refreshMs?: Number,
  sync?: Boolean
});
```

| Parameters | Type      | Required | Default | Description                                            |
| ---------- | --------- | -------- | ------- | ------------------------------------------------------ |
| refreshMs  | `Number`  | No       | `1000`  | Refresh rate in milliseconds that the now gets updated |
| sync       | `Boolean` | No       | `true`  | Sync with the clock by the second                      |

## State

The `usePerformanceNow` function exposes the following reactive state:

```js
import { usePerformanceNow } from "vue-composable";

const { now } = usePerformanceNow();
```

| State | Type          | Description  |
| ----- | ------------- | ------------ |
| now   | `Ref<Number>` | Current time |

## Methods

The `usePerformanceNow` function exposes the following methods:

```js
import { usePerformanceNow } from "vue-composable";

const { remove } = usePerformanceNow();
```

| Signature | Description                             |
| --------- | --------------------------------------- |
| `remove`  | Manually stop the `now` to be refreshed |

## Example

<performance-now-example/>

### Code

```vue
<template>
  <div>
    <p>
      Performance.now : {{ now }}</b>
    </p>
    <p>
      Created <b>{{Math.floor(now / 1000) }}</b> seconds ago
    </p>
  </div>
</template>

<script>
import { usePerformanceNow } from "vue-composable";

export default {
  name: "performance-now-example",
  setup() {
    return usePerformanceNow();
  }
};
</script>
```
