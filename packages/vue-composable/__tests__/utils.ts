export { nextTick } from "@vue/runtime-core";
// import { Component, ComponentPublicInstance } from "vue";
import {
  createApp,
  Component,
  ComponentPublicInstance
} from "@vue/runtime-dom";

export const createVue = <
  T extends Component,
  TProps extends Record<string, unknown>
>(
  component: T,
  props?: TProps
) => {
  const app = createApp(component, props);

  const el = document.createElement("div");
  // Reset the document.body
  // document.getElementsByTagName('html')[0].innerHTML = ''
  // const el = document.createElement('div')
  // el.id = MOUNT_ELEMENT_ID
  document.body.appendChild(el);

  const mount = (): ComponentPublicInstance<TProps> => app.mount(el) as any;

  const destroy = () => app.unmount(el);

  app.config.warnHandler = (err: any) => {
    throw err;
  };

  app.config.errorHandler = (err: any) => {
    throw err;
  };
  return {
    el,
    mount,
    destroy
  };
};
