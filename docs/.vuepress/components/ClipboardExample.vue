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
    const { clipboardData, write, read } = useClipboard();

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
