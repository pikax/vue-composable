export { nextTick } from "vue3";
// import { Component, ComponentPublicInstance } from "vue";
import { createApp, Component, ComponentPublicInstance } from "vue3";

export const createVue = <
  T extends Component,
  TProps extends Record<string, unknown>
>(
  component: T,
  props?: TProps
) => {
  const app = createApp(
    {
      template: `<div></div>`,
      ...component
    },
    props
  );

  const el = document.createElement("div");
  // Reset the document.body
  // document.getElementsByTagName('html')[0].innerHTML = ''
  // const el = document.createElement('div')
  // el.id = MOUNT_ELEMENT_ID
  document.body.appendChild(el);

  const mount = (): ComponentPublicInstance<TProps> => {
    return app.mount(el as any) as any;
  };

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
