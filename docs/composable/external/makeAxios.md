# makeAxios

> Wraps [axios](https://github.com/axios/axios) instance.

## Installing

```bash
# install with yarn
yarn add @vue-composable/axios

# install with npm
npm install @vue-composable/axios
```

## Parameters

```js
import { makeAxios } from "@vue-composable/axios";

makeAxios(client, throwException?);

```

| Parameters     | Type            | Required | Default     | Description                                                                                    |
| -------------- | --------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------- |
| client         | `AxiosInstance` | `true`   | `undefined` | Uses this client                                                                               |
| throwException | `Boolean`       | `false`  | `false`     | Makes `exec` throw exceptions, when `false` the error will be handled only by the `usePromise` |

## State

The `makeAxios` function exposes the following reactive state:

```js
import { makeAxios } from "@vue-composable/axios";

const {
  client,
  data,
  status,
  statusText,

  // cancel
  isCancelled,
  cancelledMessage,

  // promise
  promise,
  result,
  loading,
  error,
} = makeAxios();
```

| State            | Type          | Description                                                          |
| ---------------- | ------------- | -------------------------------------------------------------------- |
| client           | `AxiosClient` | Axios client used                                                    |
| data             | `any`         | Axios `response.data`                                                |
| status           | `Number`      | Axios `response.status`                                              |
| statusText       | `String`      | Axios `response.statusText`                                          |
| isCancelled      | `Boolean`     | If the request has been cancelled by the user (executing `cancel()`) |
| cancelledMessage | `String`      | Message provided when cancelling the request                         |
| promise          | `Promise`     | Current promise                                                      |
| result           | `any`         | Resolved value                                                       |
| loading          | `boolean`     | Waiting for the promise to be resolved                               |
| error            | `any`         | Promise error                                                        |

## Methods

The `makeAxios` function exposes the following methods:

```js
import { makeAxios } from "@vue-composable/axios";

const { exec, cancel } = makeAxios();
```

| Signature          | Description              |
| ------------------ | ------------------------ |
| `exec(AxiosRequest | string)`                 | Executes axios request |
| `cancel(message?)` | Cancels the last request |

::: tip
You can pass `throwException` on the last argument of the `exec` to override the default behaviour
:::

### Code

```ts
const client = axios.create(config);

const { data, error, exec } = makeAxios(client);

exec(request);
exec(url);
```
