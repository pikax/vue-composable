# Cancellable Promise

Prevents result to be set if the `cancel` is called

::: warning
Javascript doesn't provide a way to cancel promises, so this will execute the promise until the end.
:::

## State

The `useCancellablePromise` function exposes the following reactive state:

```js
import { useCancellablePromise } from "vue-composable";

const { promise, result, loading, error, cancelled } = useCancellablePromise();
```

| State     | Type      | Description                            |
| --------- | --------- | -------------------------------------- |
| promise   | `Promise` | Current promise                        |
| result    | `any`     | Resolved value                         |
| loading   | `boolean` | Waiting for the promise to be resolved |
| error     | `any`     | Promise error                          |
| cancelled | `boolean` | Was cancelled                          |

## Methods

The `useCancellablePromise` function exposes the following methods:

```js
import { useCancellablePromise } from "vue-composable";

const { exec, cancel } = useCancellablePromise();
```

| Signature        | Description                  |
| ---------------- | ---------------------------- |
| `exec(args?)`    | Resolves new promise         |
| `cancel(error?)` | Cancels by rejecting promise |

## Example

```vue
<template>
  <div>
    <div>
      <label for="delayPromise">Delay seconds</label>
      <input name="delayPromise" v-model="delay" />
    </div>
    <div>
      <button @click="exec(delay)" :disabled="loading">Execute</button>
      <button @click="cancel()" :disabled="!loading">Cancel</button>
    </div>

    <div v-if="loading">loading...</div>
    <div v-else-if="cancelled">
      <p>Request cancelled</p>
      <p>Result: {{ result }}</p>
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <p>Result: {{ result }}</p>
      <p>Error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useCancellablePromise } from "vue-composable";
export default {
  name: "cancellable-promise-example",
  setup() {
    const {
      exec,
      loading,
      cancel,
      error,
      cancelled,
      result
    } = useCancellablePromise(delay =>
      fetch(`https://reqres.in/api/users?delay=${delay}`).then(x => x.json())
    );

    const delay = ref(1);
    return {
      delay,
      exec,
      error,
      loading,
      cancel,
      cancelled,
      result
    };
  }
};
</script>
```

### Code

<ClientOnly>
<cancellable-promise-example/>
</ClientOnly>
