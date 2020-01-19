<template>
  <div>
    <h4>
      Hidden: <b>{{ hidden }}</b>
    </h4>
    <h4>
      State: <b>{{ visibility }}</b>
    </h4>
    <p>You can change the state by switching tab - Check console</p>
    <p>
      <a
        href="https://sqa.stackexchange.com/a/32355"
        target="_blank"
        rel="noopener noreferrer"
        >Check this link</a
      >
    </p>
  </div>
</template>

<script>
import { usePageVisibility, unwrap } from "vue-composable";
import { watch, reactive } from "@vue/composition-api";
export default {
  setup() {
    const { visibility, hidden } = usePageVisibility();
    watch(visibility, () => {
      console.log("visibility changed", {
        visibility: visibility.value,
        hidden: hidden.value
      });
    });
    return { visibility, hidden };
  }
};
</script>
