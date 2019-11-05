<template>
  <div>
    Loading Axios: {{url}}
    <p>Loading: {{loading}}</p>
    <p>Success: {{success}}</p>
    <p>Error: {{error}}</p>
  </div>
</template>

<script>
import { useScript } from "../../..";
export default {
  name: "script-example",
  setup() {
    const axios = "https://unpkg.com/axios/dist/axios.min.js";
    return {
      ...useScript(axios),
      url: axios
    };
  }
};
</script>