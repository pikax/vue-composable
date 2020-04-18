/* istanbul ignore file */

export {
  ref,
  isRef,
  Ref,
  onMounted,
  onUnmounted,
  inject,
  InjectionKey,
  provide,
  reactive,
  computed,
  getCurrentInstance
} from "@vue/composition-api";

import { Ref, watch as vueWatch, isRef, set } from "@vue/composition-api";
import Vue from "vue";
import { isBoolean } from "vue-composable";

export const watch = (source: any, cb: any, options: any) =>
  vueWatch(source, cb, {
    ...options,
    lazy: isBoolean(options.immediate) ? !options.immediate : undefined
  });
export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

export type ComputedRef<T> = Readonly<Ref<Readonly<T>>>;
export type UnwrapRef<T> = T extends Ref<infer R> ? R : T;
