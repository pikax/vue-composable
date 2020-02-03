# DateNow

> Reactive `Date.now()` with specified refresh rate

## Parameters

```js
import { useDateNow } from "vue-composable";

const now = useDateNow({
  refreshMs?: Number,
  sync?: Boolean
});
```

| Parameters | Type      | Required | Default | Description                                            |
| ---------- | --------- | -------- | ------- | ------------------------------------------------------ |
| refreshMs  | `Number`  | No       | `1000`  | Refresh rate in milliseconds that the now gets updated |
| sync       | `Boolean` | No       | `true`  | Sync with the clock by the second                      |

## State

The `useDateNow` function exposes the following reactive state:

```js
import { useDateNow } from "vue-composable";

const { now } = useDateNow();
```

| State | Type          | Description  |
| ----- | ------------- | ------------ |
| now   | `Ref<Number>` | Current time |

## Methods

The `useDateNow` function exposes the following methods:

```js
import { useDateNow } from "vue-composable";

const { remove } = useDateNow();
```

| Signature | Description                             |
| --------- | --------------------------------------- |
| `remove`  | Manually stop the `now` to be refreshed |

## Example

<date-now-example/>

### Code

```vue
<template>
  <p>
    Current date: {{ now }}: <b>{{ new Date(now) }}</b>
  </p>
</template>

<script>
import { useDateNow } from "vue-composable";

export default {
  name: "date-now-example",
  setup() {
    return useDateNow();
  }
};
</script>
```
