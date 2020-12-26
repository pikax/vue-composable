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

<clipboard-example/>

### Code

```vue
<template>
  <div>
    <p>click the button to copy a random number</p>
    <button @click="write(Math.random())">copy</button>
    <p>Text In Clipboard: {{ clipboardData }}</p>
    <button @click="read">readText In Clipboard</button>
  </div>
</template>

<script>
import { useClipboard } from "vue-composable";
export default {
  setup() {
    const { clipboardData, write, read } = useClipboard();
    return {
      clipboardData,
      copy,
      read,
    };
  },
};
</script>
```
