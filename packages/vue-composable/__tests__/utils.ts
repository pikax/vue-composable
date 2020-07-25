// export { nextTick } from "vue3";
// import { Component, ComponentPublicInstance } from "vue";
// import { createApp, Component, ComponentPublicInstance } from "vue3";
export { nextTick } from "@vue/runtime-dom";
import {
  createApp,
  Component,
  ComponentPublicInstance
} from "@vue/runtime-dom";

import { compile, CompilerOptions, CompilerError } from "@vue/compiler-dom";
import {
  registerRuntimeCompiler,
  RenderFunction,
  warn
} from "@vue/runtime-dom";
import { isString, NOOP, generateCodeFrame, extend } from "@vue/shared";
import * as runtimeDom from "@vue/runtime-dom";

/** Vue render */
// same as vue/index.ts
const compileCache: Record<string, RenderFunction> = Object.create(null);

function compileToFunction(
  template: string | HTMLElement,
  options?: CompilerOptions
): RenderFunction {
  if (!isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      __DEV__ && warn(`invalid template option: `, template);
      return NOOP;
    }
  }

  const key = template;
  const cached = compileCache[key];
  if (cached) {
    return cached;
  }

  if (template[0] === "#") {
    const el = document.querySelector(template);
    if (__DEV__ && !el) {
      warn(`Template element not found or is empty: ${template}`);
    }
    // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.
    template = el ? el.innerHTML : ``;
  }

  const { code } = compile(
    template,
    extend(
      {
        hoistStatic: true,
        onError(err: CompilerError) {
          if (__DEV__) {
            const message = `Template compilation error: ${err.message}`;
            const codeFrame =
              err.loc &&
              generateCodeFrame(
                template as string,
                err.loc.start.offset,
                err.loc.end.offset
              );
            warn(codeFrame ? `${message}\n${codeFrame}` : message);
          } else {
            /* istanbul ignore next */
            throw err;
          }
        }
      },
      options
    )
  );

  // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.
  const render = new Function("Vue", code)(runtimeDom);
  return (compileCache[key] = render);
}

registerRuntimeCompiler(compileToFunction);
/**/

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
