# Fetch

> The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch).

## State

The `useFetch` function exposes the following reactive state:

```js
import { useFetch } from "vue-composable";

const { loading, json, text, error, exec } = useFetch();

exec("./api/")
```

| State      | Type            | Description                             |
| ---------- | --------------- | --------------------------------------- |
| promise    | `Promise`       | Last result promise.                    |
| result     | `Response`      | The response.                           |
| loading    | `Boolean`       | If the request is loading.              |
| error      | `any`           | If the request threw exception.         |
| json       | `any`           | The response body as JSON.              |
| status     | `number | null` | The HTTP status code.                   |
| statusText | `number | null` | The HTTP status text, eg: "OK" for 200. |
| jsonError  | `any`           | Error parsing the `json`.               |

## Methods

The `useFetch` function exposes the following methods:

```js
import { useFetch } from "vue-composable";

const { exec } = useFetch();
```

| Signature | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `cancel`  | Cancels the fetch request if browser supports `AbortController`, otherwise the request will complete but will not update the state. |
| `exec`    | Executes the request similar to `fetch`.                                                                                            |

## Example

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

### Fetch example

<fetch-example/>
