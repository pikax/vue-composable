import { VueConstructor } from "vue";
import { setVm } from "./vue-router";

export { getVueRouter } from "./vue-router";

// plugin

let currentVue: VueConstructor | null = null;
export function install(Vue: VueConstructor) {
  currentVue = Vue;
  setVm(Vue);
}
const plugin = {
  install
};

if (currentVue && typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default plugin;
