// import { setupDevtoolsPlugin } from "@vue/devtools-api";
import { App } from "./api";
import { setDevtoolApi } from "./misc/devtools";

// todo remove this for devtools-api
// @ts-ignore
export const hook = global.__VUE_DEVTOOLS_GLOBAL_HOOK__;

const setupDevtoolsPlugin = (pluginDescriptor: any, setupFn: any) =>
  hook.emit("devtools-plugin:setup", pluginDescriptor, setupFn);

export const UseDevtoolsApp = (
  app: App,
  id = "vue-composable",
  label = "Vue-composable devtools plugin"
) => {
  const promise: any = new Promise((res) => {
    setupDevtoolsPlugin(
      {
        id,
        label,
        app,
      },
      res
    );
  });

  setDevtoolApi(app, promise);
};
