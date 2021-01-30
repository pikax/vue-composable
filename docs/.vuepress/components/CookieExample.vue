<template>
  <div>
    cookie value: {{ cookie }}
    <p>
      <button @click="updateCookie">Update Cookie</button>
    </p>
    <p>
      <button @click="removeCookie">Remove Cookie</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useCookie } from "vue-composable";

export default defineComponent({
  name: "cookie-example",

  setup() {
    let idx = 0;

    let { cookie, setCookie, removeCookie } = useCookie("my-cookie");

    function updateCookie() {
      cookie.value = `my-cookie-${++idx}`;
    }

    return {
      cookie,

      updateCookie,
      removeCookie,
    };
  },
});
</script>

<style></style>
