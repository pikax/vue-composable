import { App } from "../api";
import ProxyApi from "./proxy";
import { setDevtools } from "./api";
import { NO_OP } from "../utils";

let setupDevtoolsPlugin: Function = NO_OP;
// NOTE maybe change this to other flag
if (__DEV__) {
  try {
    setupDevtoolsPlugin = require("@vue/devtools-api").setupDevtoolsPlugin;
  } catch {}
}

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

  setDevtools(app, ProxyApi(promise));
};
