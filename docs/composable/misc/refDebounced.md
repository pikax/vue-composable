# refDebounced

> debounces the update value of a `ref`

## Parameters

```js
import { refDebounced } from "vue-composable";

refDebounced(delay);
refDebounced(value, delay);
```

| Parameters | Type     | Required | Default     | Description    |
| ---------- | -------- | -------- | ----------- | -------------- |
| `delay`    | `number` | `true`   |             | debounce delay |
| `value`    | `T`      | `false`  | `undefined` | initial value  |

## State

The `refDebounced` function retuns a `ref`:

```js
import { refDebounced } from "vue-composable";

const debouncedValue = refDebounced();
```

| State          | Type     | Description     |
| -------------- | -------- | --------------- |
| debouncedValue | `Ref<T>` | debounced `ref` |
