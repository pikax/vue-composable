import { Component, render } from "vue";

export { nextTick } from "@vue/runtime-core";

import { createApp } from "vue";

// export class Vue  {
//   constructor(component: Component) {

//   }
// }

export const createVue = (component: Component, props?: any) => {
  const app = createApp(component, props);

  const el = document.createElement("div");

  const mount = () => app.mount(el);

  const destroy = () => render(null, el);

  return {
    el,
    mount,
    destroy
  };
};
