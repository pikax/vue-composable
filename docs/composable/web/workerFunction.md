# WebWorker Function

> Creates a WebWorker based on a function, useful for offloading heavy tasks easily

The `useWorkerFunction` function uses [CancellablePromise](../promise/cancellablePromise)

## Parameters

```ts
import { useWorkerFunction } from "vue-composable";

useWorkerFunction(fn, options);

interface WebWorkerFunctionOptions {
  dependencies?: RefTyped<string[]>;
  timeout?: RefTyped<number>;
}
```

| Parameters | Type                       | Required | Default     | Description                               |
| ---------- | -------------------------- | -------- | ----------- | ----------------------------------------- |
| fn         | `Function`                 | `true`   |             | Function we want to execute in the worker |
| options    | `WebWorkerFunctionOptions` | `false`  | `undefined` | Options for the webworker                 |

## State

The `useWorkerFunction` function exposes the following reactive state:

```js
import { useWorkerFunction } from "vue-composable";

const { promise, result, loading, error, cancelled } = useWorkerFunction();
```

| State     | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| promise   | `Promise` | Current worker process           |
| result    | `any`     | Resolved value                   |
| loading   | `boolean` | Waiting for the worker to finish |
| error     | `any`     | Promise error                    |
| cancelled | `boolean` | Was cancelled                    |

## Methods

The `useWorkerFunction` function exposes the following methods:

```js
import { useWorkerFunction } from "vue-composable";

const { exec, cancel } = useWorkerFunction();
```

| Signature        | Description           |
| ---------------- | --------------------- |
| `exec(args?)`    | Resolves new promise  |
| `cancel(error?)` | Terminates the worker |

## Example

<!-- <on-scroll-example/> -->

### Code

```vue

```
