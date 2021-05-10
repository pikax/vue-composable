import { App } from "../api";
import { UseDevtoolsApp } from "./app";

export const VueComposableDevtools = {
  install(
    app: App,
    options: { id: string; label: string } = {
      id: "vue-composable",
      label: "Vue-composable devtools plugin",
    },
  ) {
    return UseDevtoolsApp(app, options.id, options.label);
  },
};
