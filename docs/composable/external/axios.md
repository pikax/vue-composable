# Axios

> The [axios](https://github.com/axios/axios).

Provides a wrapper to use [axios](https://github.com/axios/axios).

## Installing

```bash
# install with yarn
yarn add @vue-composable/axios

# install with npm
npm install @vue-composable/axios
```

## Parameters

```js
import { useAxios } from "@vue-composable/axios";

useAxios(url?, opts?, throwException?);
useAxios(url, opts?);
useAxios(url, throwException?);
useAxios(opts, throwException?);
useAxios(throwException);

```

| Parameters     | Type                 | Required | Default     | Description                                                                                    |
| -------------- | -------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------- |
| url            | `String`             | `false`  | `undefined` | Makes a request at creation                                                                    |
| opts           | `AxiosRequestConfig` | `false`  | `undefined` | Arguments for axios.client                                                                     |
| throwException | `Boolean`            | `false`  | `false`     | Makes `exec` throw exceptions, when `false` the error will be handled only by the `usePromise` |

> NOTE: if `url` or `config.url` is provided the request will be made when calling `useAxios`

## State

The `useAxios` function exposes the following reactive state:

```js
import { useAxios } from "@vue-composable/axios";

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
} = useAxios();
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

The `useAxios` function exposes the following methods:

```js
import { useAxios } from "@vue-composable/axios";

const { exec, cancel } = useAxios();
```

| Signature          | Description              |
| ------------------ | ------------------------ |
| `exec(AxiosRequest | string)`                 | Executes axios request |
| `cancel(message?)` | Cancels the last request |

::: tip
You can pass `throwException` on the last argument of the `exec` to override the default behaviour
:::

## Example

<axios-example/>

### Code

```vue
<template>
  <div>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">loading...</p>
    <div v-else>
      <p>Status: {{ status }}</p>
      {{ data }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "@vue/composition-api";
import { useAxios } from "@vue-composable/axios";

export default {
  name: "axios-example",
  setup() {
    const id = ref(1);
    const { data, loading, exec, error, status } = useAxios();

    watch(id, (id) => {
      exec({
        method: "GET",
        url: "https://reqres.in/api/user/" + id,
      });
    });

    return {
      id,
      data,
      loading,
      status,
    };
  },
};
</script>
```
