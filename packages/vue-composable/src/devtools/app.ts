import { setupDevtoolsPlugin } from "@vue/devtools-api";
import { App } from "../api";
import ProxyApi from "./proxy";
import { setDevtools } from "./api";

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
