/* istanbul ignore file */

export {
  computed,
  ComputedRef,
  customRef,
  getCurrentInstance,
  inject,
  InjectionKey,
  isRef,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  Ref,
  ref,
  toRaw,
  unref,
  UnwrapRef, // Plugin,
  watch,
  watchEffect,
} from "@vue/composition-api";
export { VueConstructor as App } from "vue";

import { computed, Ref, set } from "@vue/composition-api";
import Vue, { PluginFunction } from "vue";
import { unwrap } from "./utils";

export type Plugin = PluginFunction<any>;

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

// FAKE readonly
export function readonly<T extends object>(
  target: T,
): T extends Ref ? DeepReadonly<T> : DeepReadonly<Ref<T>> {
  return computed(() => unwrap(target)) as any;
}

// FAKE DeepReadonly
export type DeepReadonly<T> = Readonly<T>;

declare module "vue" {
  interface VueConstructor {
    provide(key: any, value: any): void;
  }
}
