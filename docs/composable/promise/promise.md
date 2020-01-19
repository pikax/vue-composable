# Promise

Provides promise state

## Parameters

```js
import { usePromise } from "vue-composable";

const promise = usePromise(factory, throwException?);
```

| Parameters     | Type       | Required | Default | Description                                                                                                   |
| -------------- | ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| factory        | `Function` | `true`   |         | Factory will be called every time the exec is called, the arguments will be passed to the factory. `Required` |
| throwException | `Boolean`  | `false`  | `false` | Makes `exec` throw exceptions, when `false` the error will be handled only by the `usePromise`                |

## State

The `usePromise` function exposes the following reactive state:

```js
import { usePromise } from "vue-composable";

const { promise, result, loading, error } = usePromise();
```

| State   | Type      | Description                            |
| ------- | --------- | -------------------------------------- |
| promise | `Promise` | Current promise                        |
| result  | `any`     | Resolved value                         |
| loading | `boolean` | Waiting for the promise to be resolved |
| error   | `any`     | Promise error                          |

## Methods

The `usePromise` function exposes the following methods:

```js
import { usePromise } from "vue-composable";

const { exec } = usePromise();
```

| Signature     | Description          |
| ------------- | -------------------- |
| `exec(args?)` | Resolves new promise |

## Example

<ClientOnly>
<promise-example/>
</ClientOnly>

### Code

```vue
<template>
  <div>
    <label for="timeout">
      Duration (ms)
      <input type="number" name="timeout" v-model.number="timeout" />
    </label>
    <label for="error">
      Reject promise
      <input type="checkbox" name="error" v-model="throwError" />
    </label>

    <button @click="exec(timeout)">Execute</button>

    <div v-if="loading">loading...</div>
    <div v-else-if="result">{{ result }}</div>
    <div v-else>
      <p>error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { usePromise } from "vue-composable";

export default {
  name: "promise-example",
  setup() {
    const timeout = ref(1000);
    const throwError = ref(false);

    const { exec, error, loading, result } = usePromise(ms => {
      if (throwError.value) {
        return Promise.reject(new Error("Throw Error checked"));
      }
      return new Promise(res => setTimeout(() => res("sucess"), ms));
    });

    return {
      timeout,
      throwError,
      error,
      exec,
      loading,
      result
    };
  }
};
</script>
```
