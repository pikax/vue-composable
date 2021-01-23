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
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  name: "timeout-example",
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
});
</script>
