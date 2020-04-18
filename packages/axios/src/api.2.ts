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

import { Ref, isRef } from "@vue/composition-api";

export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}

export type ComputedRef<T> = Readonly<Ref<Readonly<T>>>;
export type UnwrapRef<T> = T extends Ref<infer R> ? R : T;
