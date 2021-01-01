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
    const { text, write, read } = useClipboard();

    function copy() {
      write(Math.random().toString());
      console.log(text.value);
    }

    return {
      copy,

      text,
    };
  },
};
</script>
