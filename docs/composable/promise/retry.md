# Retry

Retry

## State

The `useRetry` function exposes the following reactive state:

```js
import { useRetry } from "vue-composable";

const { retryCount, nextRetry, isRetrying, retryErrors } = useRetry();
```

| State       | Type         | Description                                                   |
| ----------- | ------------ | ------------------------------------------------------------- |
| retryCount  | `Number`     | Current attempt number                                        |
| nextRetry   | `Number`     | When it should retry, `new Date(nextRetry.value)`             |
| isRetrying  | `Boolean`    | Get the current state, set to true after the first failure    |
| retryErrors | `Array<any>` | List of all the errors occurred in since the last `exec` call |

## Methods

The `useRetry` function exposes the following methods:

```js
import { useRetry } from "vue-composable";

const { cancel, exec } = useRetry();
```

| Signature   | Description                               |
| ----------- | ----------------------------------------- |
| `cancel`    | Stops the retrying                        |
| `exec(fn?)` | executes function or the factory provided |

## Example

<retry-example/>

### Code

```vue
<template>
  <div>
    <p>current Id {{ id }}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <div>
      <label for="throwError">Throw error</label>
      <input type="checkbox" name="throwError" v-model="throwError" />
    </div>
    <div>
      <label for="retryMode">Retry mode:</label>
      <select name="retryMode" v-model="mode">
        <option value="delay">Delay</option>
        <option value="backoff">Exponential backoff</option>
      </select>
    </div>
    <div v-if="mode === 'delay'">
      <label for="delay">Delay</label>
      <input type="number" name="delay" v-model.number="delay" />
    </div>
    <p v-if="loading">loading...</p>
    <p v-else-if="isRetrying">
      retrying in {{ Math.floor(nextRetry - dateNow) }}ms
      <span>Current: {{ retryCount }} retries</span>
    </p>
    <div v-else>
      <p>Status: {{ status }}</p>
      <span>{{ json }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "@vue/composition-api";
import { useFetch, useRetry, exponentialDelay } from "vue-composable";

export default {
  name: "retry-example",

  setup() {
    const id = ref(1);
    const throwError = ref(false);
    const delay = ref(200);
    const dateNow = ref(Date.now());
    const mode = ref("delay");

    const retryDelay = (n) => {
      switch (mode.value) {
        case "delay":
          return delay.value;
        case "backoff":
          return exponentialDelay(n);
      }
    };

    const { json, loading, exec: fetchExec, error, status } = useFetch();
    const { isRetrying, nextRetry, retryCount, exec } = useRetry({
      retryDelay,
    });

    watch(id, (id) => {
      exec(() => {
        if (throwError.value) {
          throw new Error("blocked");
        }
        return fetchExec(`https://reqres.in/api/user/${id}`);
      });
    });

    // just to have a nice countdown
    setInterval(() => (dateNow.value = Date.now()), 10);

    return {
      id,
      json,
      loading,
      status,
      retryCount,
      delay,
      mode,
      throwError,
      isRetrying,
      nextRetry,
      dateNow,
    };
  },
};
</script>
```
