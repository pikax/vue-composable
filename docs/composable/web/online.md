# Navigator.onLine

> [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) reacts to the browser online state.

## State

The `useOnline` function exposes the following reactive state:

```js
import { useOnline } from "vue-composable";

const { supported, online } = useOnline();
```

| State     | Type           | Description                                                                                 |
| --------- | -------------- | ------------------------------------------------------------------------------------------- |
| supported | `Boolean`      | Returns true if the browser has [navigator.onLine](https://caniuse.com/#feat=online-status) |
| online    | `Ref(Boolean)` | browser online                                                                              |

| Signature | Description                         |
| --------- | ----------------------------------- |
| `remove`  | Manually removes the event listener |

## Example

<online-example/>

### Code

```vue
<template>
  <div>
    <h1>Is Online?</h1>

    <h3>
      Online: <b :class="{ green: online, red: !online }">{{ online }}</b>
    </h3>
    <h4>
      Supported: <b>{{ supported }}</b>
    </h4>

    <p>To test open dev tools and set your browser to offline (Network tab)</p>
  </div>
</template>

<script>
import { useOnline } from "vue-composable";
export default {
  setup() {
    return useOnline();
  },
};
</script>
<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
```
