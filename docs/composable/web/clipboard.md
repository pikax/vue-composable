# Clipboard API

> [Clipboard_API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## State

The `useClipboard` function exposes the following reactive state:

```js
import { useClipboard } from "vue-composable";

const { text, supported, write, read } = useClipboard();
```

| State     | Type              | Description                                                                                                                 |
| --------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| supported | `Boolean`         | Returns true if the browser has [navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard) |
| text      | `Ref<string       | undefined>`                                                                                                                 | Reactive text in clipboard, also updates the clipboard if changed          |
| data      | `Ref<DataTransfer | undefined>`                                                                                                                 | Reactive data in clipboard, it does **not** update the clipboard on change |

## Example

<ClientOnly>
  <clipboard-example/>
</ClientOnly>

## Methods

The `useClipboard` function exposes the following methods:

```js
import { useClipboard } from "vue-composable";

const { writeText, readText } = useClipboard();
```

| Signature   | Description                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| `writeText` | Writes text to the clipboard                                                                                  |
| `readText`  | Reads text from the clipboard                                                                                 |
| `write`     | Writes to the clipboard [Clipboard.write()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write) |
| `read`      | Reads from the clipboard [Clipboard.read()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read)  |

### Code

```vue
<template>
  <div>
    <p>click the button to copy a random number</p>
    <button @click="copy">copy</button>
    <p>Check your dev tools to see what has been copied to your clipboard</p>

    <p>You can also change the clipboard</p>
    <input v-model="text" />

    <div>
      <p>Current clipboard:</p>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { useClipboard } from "vue-composable";
export default {
  setup() {
    const { text, writeText } = useClipboard();

    function copy() {
      writeText(Math.random().toString());
      console.log(text.value);
    }

    return {
      copy,

      text,
    };
  },
};
</script>
```
