# Interval

> `setInterval` with `start`/`remove` and `clearInterval` on unmounted.

## Parameters

```js
import { useInterval } from "vue-composable";

useInterval(callback, ms?, ...args);
```

| Parameters | Type                         | Required | Default     | Description                                                                  |
| ---------- | ---------------------------- | -------- | ----------- | ---------------------------------------------------------------------------- |
| `callback` | `(...args):void`             | `true`   |             | `setInterval` callback                                                       |
| `ms`       | `number | false | undefined` | `false`  | `undefined` | callback interval `ms`, if `ms` provided it will `setInterval` automatically |
| `...args`  | `any`                        | `false`  | `[]`        | callback args                                                                |

## Methods

The `useInterval` function exposes the following methods:

```js
import { useInterval } from "vue-composable";

const { start, remove } = useInterval();
```

| Signature | Description              |
| --------- | ------------------------ |
| `start`   | Start                    |
| `remove`  | Manually `clearInterval` |

### Code

```vue
<script>
export default {
  setup() {
    useInterval(() => console.log(Date.now()), 1000);
  }
};
</script>
```
