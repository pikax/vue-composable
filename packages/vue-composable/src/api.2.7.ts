/* istanbul ignore file */

export {
  ref,
  isRef,
  unref,
  Ref,
  inject,
  InjectionKey,
  provide,
  watch,
  reactive,
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  ComputedRef,
  toRaw,
  UnwrapRef, // Plugin,
  customRef,
  watchEffect,
} from "vue2.7";
export { VueConstructor as App } from "vue2.7";

import Vue, { PluginFunction } from "vue2.7";
import { computed, Ref, set } from "vue2.7";
import { unwrap } from "./utils";

export type Plugin = PluginFunction<any>;

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

// FAKE readonly
export function readonly<T extends object>(
  target: T
): T extends Ref ? DeepReadonly<T> : DeepReadonly<Ref<T>> {
  return computed(() => unwrap(target)) as any;
}

// FAKE DeepReadonly
export type DeepReadonly<T> = Readonly<T>;

declare module "vue2.7" {
  interface VueConstructor {
    provide(key: any, value: any): void;
  }
}
