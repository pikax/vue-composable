<template>
  <div>
    <p>click the button to copy a random number</p>
    <button @click="copy">copy</button>
    <<<<<<< HEAD
    <p>To see what has been copied to the clipboard open your devTools</p>
    =======
    <p>Check your dev tools to see what has been copied to your clipboard</p>

    <p>You can also change the clipboard</p>
    <input v-model="text" />

    <div>
      <p>Current clipboard:</p>
      <p>{{ text }}</p>
    </div>
    >>>>>>> 7c0c1ad10188fd22d3a501c2b353a1742a119eec
  </div>
</template>

<script>
import { useClipboard } from "vue-composable";
export default {
  setup() {
<<<<<<< HEAD
    const { clipboardData, write, read } = useClipboard();

    function copy() {
      write(Math.random());
      console.log(clipboardData.value);
=======
    const { text, writeText } = useClipboard();

    function copy() {
      writeText(Math.random().toString());
      console.log(text.value);
>>>>>>> 7c0c1ad10188fd22d3a501c2b353a1742a119eec
    }

    return {
      copy,
<<<<<<< HEAD
=======

      text,
>>>>>>> 7c0c1ad10188fd22d3a501c2b353a1742a119eec
    };
  },
};
</script>
