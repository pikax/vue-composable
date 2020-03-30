# Web Worker API

> The [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## Parameters

```js
import { useWorker } from "vue-composable";

useWorker(stringUrl, args?, options?);
```

| Parameters | Type         | Required | Default     | Description                                                                     |
| ---------- | ------------ | -------- | ----------- | ------------------------------------------------------------------------------- |
| stringUrl  | `String|URL` | `true`   |             | Webworker file path                                                             |
| args       | `any|any[]`  | `false`  | `undefined` | arguments for the first message sent to the worker                              |
| options    | `Options`    | `false`  | `undefined` | [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) |

## State

The `useWorker` function exposes the following reactive state:

```js
import { useWorker } from "vue-composable";

const { worker, data, terminated, errorEvent, errored } = useWorker();
```

| State      | Type           | Description                            |
| ---------- | -------------- | -------------------------------------- |
| worker     | `Worker`       | Worker instance                        |
| data       | `Ref<any>`     | Last message received by the worker    |
| terminated | `Ref<boolean>` | Has worker being terminated            |
| errorEvent | `Ref<any>`     | Last event received on 'error' message |
| errored    | `Ref<boolean>` | Has error occurred                     |

## Methods

The `useWorker` function exposes the following methods:

```js
import { useWorker } from "vue-composable";

const { postMessage, terminate } = useWorker();
```

| Signature     | Description               |
| ------------- | ------------------------- |
| `postMessage` | PostMessage to the worker |
| `terminate`   | Terminates the worker     |

## Inside the worker

```js
// super.worker.js
import { exposeWorker } from "vue-composable";

const max = numbers => Math.max(...numbers);

exposeWorker(max);
```

## Example

<!-- <on-scroll-example/> -->

### Code

```vue

```
