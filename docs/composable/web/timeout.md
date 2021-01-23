# Timeout

> The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout).

## Parameters

```js
import { useTimeout } from "vue-composable";

useTimeout(fn, delay);
```

| Parameters | Type       | Required | Default | Description                                                                                                           |
| ---------- | ---------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| fn         | `Function` | `true`   |         | A function to be executed after the timer expires.                                                                    |
| delay      | `Number`   | `false`  | `0 `    | The time, in milliseconds (thousandths of a second), the timer should wait before the specified function is executed. |

## State

The `useTimeout` function exposes the following reactive state:

```js
import { useTimeout } from "vue-composable";

const { ready } = useTimeout(fn, delay);
```

| State | Type         | Description |
| ----- | ------------ | ----------- | ---------------------------------------------------------------------------------------------------- |
| ready | `Ref<Boolean | null>`      | current timeout state:<br/>&emsp;false - pending <br/>&emsp;true - called <br/>&emsp;null - canceled |

## Methods

The `useTimeout` function exposes the following methods:

```js
import { useTimeout } from "vue-composable";

const { cancel } = useTimeout(fn, delay);
```

| Signature | Description        |
| --------- | ------------------ |
| `cancel`  | cancel the timeout |

## Example

<timeout-example s/>

### Code

```vue
<template>
  <div>
    <p />
    <button @click="show">Show an alert box after two seconds</button>
    <p />
    <button @click="cancel">Cancel alert before it happens</button>
  </div>
</template>
<script>
import { useTimeout } from "vue-composable";
export default {
  setup() {
    let cancelTimeout;

    function show() {
      const { cancel } = useTimeout(() => {
        alert("useTimeout callback invoked");
      }, 2000);
      cancelTimeout = cancel;
    }

    function cancel() {
      cancelTimeout();
    }

    return {
      show,
      cancel,
    };
  },
};
</script>
```
