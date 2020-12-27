# Clipboard API

> [Clipboard_API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## State

The `useClipboard` function exposes the following reactive state:

```js
import { useClipboard } from "vue-composable";

const { clipboardData, supported, write, read } = useClipboard();
```

| State         | Type       | Description                                                                                                                 |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| supported     | `Boolean`  | Returns true if the browser has [navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard) |
| clipboardData | `Ref(any)` | data in clipboard                                                                                                           |

## Example

<ClientOnly>
  <clipboard-example/>
</ClientOnly>

### Code

```vue
<template>
  <div>
    <p>click the button to copy a random number</p>
    <button @click="copy">copy</button>
    <p>To see what has been copied to the clipboard open your devTools</p>
  </div>
</template>

<script>
import { useClipboard } from "vue-composable";
export default {
  setup() {
    const { clipboardData, write } = useClipboard();

    function copy() {
      write(Math.random());
      console.log(clipboardData.value);
    }

    return {
      copy,
    };
  },
};
</script>
```
