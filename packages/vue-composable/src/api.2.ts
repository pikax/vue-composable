/* istanbul ignore file */

export {
  ref,
  isRef,
  unref,
  Ref,
  onMounted,
  onUnmounted,
  inject,
  InjectionKey,
  provide,
  watch,
  reactive,
  computed,
  getCurrentInstance,
  ComputedRef,
  UnwrapRef // Plugin,
} from "@vue/composition-api";
export { VueConstructor as App } from "vue";

import { Ref, set, computed } from "@vue/composition-api";
import Vue, { PluginFunction } from "vue";

export type Plugin = PluginFunction<any>;

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

// FAKE readonly
export function readonly<T extends object>(
  target: T
): T extends Ref ? DeepReadonly<T> : DeepReadonly<Ref<T>> {
  return computed(() => target) as any;
}

// FAKE DeepReadonly
export type DeepReadonly<T> = Readonly<T>;
