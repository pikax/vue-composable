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
  UnwrapRef // Plugin,
} from "@vue/composition-api";
export { VueConstructor as App } from "vue2";

import { Ref, set, computed } from "@vue/composition-api";
import Vue, { PluginFunction } from "vue2";
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
