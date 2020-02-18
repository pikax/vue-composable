# Fetch

> The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch).

## Parameters

```ts
import { useFetch } from "vue-composable";

// string
useFetch(url, init?);
useFetch(options, init?);

interface UseFetchOptions {
  /**
   * @description if the value is `true` it will parse the response automatically `json`
   * @default true
   */
  isJson?: boolean;
  /**
   * @description if the value is `true` it will parse the `json` before resolving the promise
   * @default true
   */
  parseImmediate?: boolean;
}

```

| Parameters | Type                        | Required | Default     | Description                                                                                  |
| ---------- | --------------------------- | -------- | ----------- | -------------------------------------------------------------------------------------------- |
| url        | `string`                    | `false`  | `undefined` | Url for the first request                                                                    |
| options    | `UseFetchOptions & Request` | `false`  | `undefined` | Options for useFetch and [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) |
| init       | `RequestInit`               | `false`  | `undefined` | [RequestOptions](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)     |

::: tip
If url or options are passed, the request will execute immediately, otherwise you need to call `exec(url)`
:::

## State

The `useFetch` function exposes the following reactive state:

```js
import { useFetch } from "vue-composable";

const {
  promise,
  result,
  loading,
  error,
  json,
  text,
  blob,
  status,
  statusText,
  jsonError
} = useFetch();

exec("./api/");
```

| State      | Type                 | Description                             |
| ---------- | -------------------- | --------------------------------------- |
| promise    | `Ref<Promise>`       | Last result promise.                    |
| result     | `Ref<Response>`      | The response.                           |
| loading    | `Ref<Boolean>`       | If the request is loading.              |
| error      | `Ref<any>`           | If the request threw exception.         |
| json       | `Ref<T>`             | The response body as JSON.              |
| text       | `Ref<string>`        | The response body as text.              |
| blob       | `Ref<Blob>`          | The response body as BLOB.              |
| status     | `Ref<number | null>` | The HTTP status code.                   |
| statusText | `Ref<number | null>` | The HTTP status text, eg: "OK" for 200. |
| jsonError  | `Ref<any>`           | Error parsing the `json`.               |

## Methods

The `useFetch` function exposes the following methods:

```js
import { useFetch } from "vue-composable";

const { exec, cancel } = useFetch();
```

| Signature | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `cancel`  | Cancels the fetch request if browser supports `AbortController`, otherwise the request will complete but will not update the state. |
| `exec`    | Executes the request similar to `fetch`. It returns [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           |

## Example

<fetch-example/>

### Code

```vue
<template>
  <div id="fetch">
    <h3>Using <b>reqres.in</b> API</h3>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">
      loading...
    </p>
    <div v-else>
      <p>Status: {{ status }}</p>
      {{ json }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from "@vue/composition-api";
import { useFetch } from "vue-composable";

export default {
  setup() {
    const id = ref(1);
    const { json, loading, exec, status } = useFetch();

    watch(id, id => {
      exec("https://reqres.in/api/user/" + id);
    });

    return {
      id,
      json,
      loading,
      status
    };
  }
};
</script>
```
