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
