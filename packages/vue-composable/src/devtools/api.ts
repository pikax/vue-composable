import { DevtoolsPluginApi } from "@vue/devtools-api";
import { App, InjectionKey, inject } from "../api";

// istanbul ignore next
const DEVTOOLS_KEY: InjectionKey<DevtoolsPluginApi> = /*#__PURE__*/ Symbol(
  (__DEV__ && "DEVTOOLS_KEY") || ``
);

/**
 * provide devtools api instance to the app
 * @param app
 * @param api
 */
export function setDevtools(app: App, api: DevtoolsPluginApi) {
  app.provide(DEVTOOLS_KEY, api);
}

/**
 * Exposes the internal devtools api instance
 */
export function getDevtools(): DevtoolsPluginApi | undefined {
  const devtools = inject(DEVTOOLS_KEY);
  if (!devtools) {
    console.warn(
      `[vue-composable] devtools not found, please run app.use(VueComposableDevtools)`
    );
  }
  return devtools;
}
