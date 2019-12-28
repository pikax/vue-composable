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


## State

The `useAxios` function exposes the following reactive state:

```js
import { useAxios } from "@vue-composable/axios";

const {
  client,
  data,
  status,
  statusText,
  // promise
  promise,
  result,
  loading,
  error
} = useAxios();
```

| State      | Type          | Description                            |
| ---------- | ------------- | -------------------------------------- |
| client     | `AxiosClient` | Axios client used                      |
| data       | `any`         | Axios `response.data`                  |
| status     | `Number`      | Axios `response.status`                |
| statusText | `String`      | Axios `response.statusText`            |
| promise    | `Promise`     | Current promise                        |
| result     | `any`         | Resolved value                         |
| loading    | `boolean`     | Waiting for the promise to be resolved |
| error      | `any`         | Promise error                          |

## Methods

The `useAxios` function exposes the following methods:

```js
import { useAxios } from "@vue-composable/axios";

const { exec } = useAxios();
```

| Signature       | Description            |
| --------------- | ---------------------- |
| `exec(request)` | Executes axios request |

## Example

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

    watch(id, id => {
      exec({
        method: "GET",
        url: "https://reqres.in/api/user/" + id
      });
    });

    return {
      id,
      data,
      loading,
      status
    };
  }
};
</script>
```

### Code

<ClientOnly>
<axios-example/>
</ClientOnly>
