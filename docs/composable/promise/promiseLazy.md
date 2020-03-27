# Lazy Promise

> Sugar for [usePromise](https://pikax.me/vue-composable/composable/promise/promise)

This is only a sugar method to call Promise, passing the option for lazy, might not be clear enough.

## Parameters

```js
import { usePromiseLazy } from "vue-composable";

const use = usePromiseLazy(fn, throwException?);
```

| Parameters     | Type       | Required | Default | Description                   |
| -------------- | ---------- | -------- | ------- | ----------------------------- |
| fn             | `Function` | true     |         | Promise factory               |
| throwException | `Boolean`  | false    | false   | Exposes exception on `exec()` |

## State

Check [usePromise#State](https://pikax.me/vue-composable/composable/promise/promise.html#state)

## Methods

Check [usePromise#Methods](https://pikax.me/vue-composable/composable/promise/promise.html#methods)

## Implementation

```js
// this is basically the code for this with no typings

function usePromiseLazy(fn, throwException) {
  return usePromise(fn, {
    lazy: true,
    throwException
  });
}
```
