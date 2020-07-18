import Vue from "vue";
import VueRouter from "vue-router";
import VueCompositionApi from "@vue/composition-api";
import { hydrationPlugin } from "vue-composable";
import App from "./App.vue";

import HelloWorld from "./components/HelloWorld";
import ArrayPagination from "./components/ArrayPagination";
import Fetch from "./components/Fetch";
import NetworkInformation from "./components/NetworkInformation";
import CancellablePromise from "./components/CancellablePromise";
import SWAPI from "./components/SWAPI";
import SharedRef from "./components/SharedRef";

Vue.use(VueRouter);
Vue.use(VueCompositionApi);
Vue.use(hydrationPlugin);

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
    path: "/networkInformation",
    component: NetworkInformation
  },
  {
    path: "/swapi",
    component: SWAPI
  },
  {
    path: "/sharedRef",
    component: SharedRef
  },
  {
    path: "/validation",
    component: () => import("./components/Validation")
  },
  {
    path: "/i18n",
    component: () => import("./components/I18n")
  },
  {
    path: "/intl",
    component: () => import("./components/Intl")
  },
  {
    path: "/currency",
    component: () => import("./components/CurrencyFormat")
  }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
