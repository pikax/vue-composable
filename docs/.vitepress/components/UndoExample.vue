<template>
  <div>
    <p>Type a text to enable undo and redo</p>
    <input v-model="value" />

    <div>
      <button @click="undo()" :disabled="!prev.length">Undo</button>
      <button @click="redo()" :disabled="!next.length">Redo</button>
    </div>

    <p>
      <b>Prev</b>
      {{ prev }}
    </p>

    <p>
      <b>Next</b>
      {{ next }}
    </p>
  </div>
</template>

<script>
import { useUndo } from "vue-composable";
export default {
  setup() {
    return useUndo();
  }
};
</script>
