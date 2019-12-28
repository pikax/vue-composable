import Vue from "vue";
import VueRouter from "vue-router";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";

import HelloWorld from "./components/HelloWorld";
import ArrayPagination from "./components/ArrayPagination";
import Fetch from "./components/Fetch";
import CancellablePromise from "./components/CancellablePromise";
import SWAPI from "./components/SWAPI";

Vue.use(VueRouter);
Vue.use(VueCompositionApi);
window.SuperVue = Vue;

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: HelloWorld
  },
  {
    path: "/arrayPagination",
    component: ArrayPagination
  },
  { path: "/fetch", component: Fetch },
  {
    path: "/cancellablePromise",
    component: CancellablePromise
  },
  {
    path: "/swapi",
    component: SWAPI
  }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
