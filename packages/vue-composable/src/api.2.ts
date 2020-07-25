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
export { VueConstructor as App } from "vue";

import { Ref, set, computed } from "@vue/composition-api";
import Vue, { PluginFunction } from "vue";

export type Plugin = PluginFunction<any>;

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

// FAKE readonly
export function readonly<T extends object>(target: T): Readonly<Ref<T>> {
  return computed(() => target) as any;
}
