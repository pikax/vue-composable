export * from "./event";
export * from "./web";
export * from "./misc";
export * from "./intl";
export * from "./breakpoint";
export * from "./storage";
export * from "./utils";
export * from "./pagination";
export * from "./promise";
export * from "./debounce";
export * from "./date";
export * from "./format";
export * from "./validation";
export * from "./i18n";
export * from "./meta";
export * from "./ssr";
export * from "./state";
export * from "./devtools";

export const VERSION = __VERSION__;
// istanbul ignore next
export const VUE_VERSION: "2" | "3" = __VUE_2__ ? "2" : "3";
export const COMMIT = __COMMIT__;
