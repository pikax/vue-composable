/* istanbul ignore file */

export const Vue: any = require("vue2/dist/vue.common");
import { Component, ComponentPublicInstance } from "@vue/runtime-dom";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.config.warnHandler = (err: any) => {
  throw err;
};

Vue.config.errorHandler = (err: any) => {
  throw err;
};

export function nextTick<T>(callback: (this: T) => void, context?: T): void;
export function nextTick(): Promise<void>;
export function nextTick<T>(callback?: (this: T) => void, context?: T) {
  if (!callback) {
    return Vue.nextTick();
  }
  return Vue.nextTick(callback, context);
}

export const createVue = <
  T extends Component,
  TProps extends Record<string, unknown>
>(
  component: T,
  props?: TProps
) => {
  const vm = new Vue(component);
  const el = document.createElement("div");

  document.body.appendChild(el);

  const mount = (): ComponentPublicInstance<TProps> => vm.$mount(el) as any;

  const destroy = () => vm.$destroy();

  return {
    el,
    mount,
    destroy
  };
};
