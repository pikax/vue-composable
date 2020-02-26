import { VueConstructor } from "vue";
import "vue-router";
import Vue from "vue";

export function getVueRouter() {
  if (!vm) {
    return console.warn(
      "[@vue-composable/router] router not setup, please make sure you Vue.use(VueComposableRouter)"
    );
  }
  return vm.$router;
}

let vm: Vue | null;

export function setVm(Vue: VueConstructor) {
  Vue.mixin({
    beforeCreate() {
      vm = this;
    }
  });
}
