# refDebounced

> debounces the update value of a `ref`

## Parameters

```js
import { useRefDebounced } from "vue-composable";

useRefDebounced(delay);
useRefDebounced(value, delay);
```

| Parameters | Type     | Required | Default     | Description    |
| ---------- | -------- | -------- | ----------- | -------------- |
| `delay`    | `number` | `true`   |             | debounce delay |
| `value`    | `T`      | `false`  | `undefined` | initial value  |

## State

The `useRefDebounced` function retuns a `ref`:

```js
import { useRefDebounced } from "vue-composable";

const debouncedValue = useRefDebounced();
```

| State          | Type     | Description     |
| -------------- | -------- | --------------- |
| debouncedValue | `Ref<T>` | debounced `ref` |
