export { nextTick, onErrorCaptured } from "@vue/runtime-core";
import { Component } from "vue";
import { createApp } from "vue";

export const createVue = (component: Component, props?: any) => {
  const app = createApp(component, props);

  const el = document.createElement("div");

  const mount = () => app.mount(el);

  const destroy = () => app.unmount(el);

  app.config.errorHandler = (err: any) => {
    throw err;
  };

  return {
    el,
    mount,
    destroy
  };
};
