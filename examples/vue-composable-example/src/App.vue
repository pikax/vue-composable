<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/sharedRef">Shared Ref</router-link>
      </li>
      <li>
        <router-link to="/arrayPagination">Array Pagination</router-link>
      </li>
      <li>
        <router-link to="/fetch">Fetch</router-link>
      </li>

      <li>
        <router-link to="/networkInformation">Network Information</router-link>
      </li>

      <li>
        <router-link to="/cancellablePromise">Cancellable Promise</router-link>
      </li>

      <li>
        <router-link to="/SWAPI">SWAPI</router-link>
      </li>

      <li>
        <router-link to="/validation">Validation</router-link>
      </li>

      <li>
        <router-link to="/i18n">I18n</router-link>
      </li>

      <li>
        <router-link to="/intl">Intl</router-link>
      </li>

      <li>
        <router-link to="/currency">CurrencyFormat</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Fetch from "./components/Fetch";
import {
  onUnmounted,
  ref,
  computed,
  getCurrentInstance,
  Ref
} from "@vue/composition-api";
import { useBroadcastChannel, refShared, useSharedRef } from "vue-composable";

export default {
  name: "App",
  components: {
    HelloWorld,
    Fetch
  },

  setup() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
