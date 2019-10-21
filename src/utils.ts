import { Ref, isRef, ref } from "@vue/composition-api";

export type RefTyped<T> = T | Ref<T>;
export type RefElement = RefTyped<Element>;

export function unwrap<T>(o: T | Ref<T>): T {
  return isRef(o) ? o.value : o;
}
export function wrap<T>(o: RefTyped<T>): Ref<T>;
export function wrap<T>(o: T | Ref<T>): Ref<T> {
  return isRef(o) ? o : ref(o);
}

export function promisedTimeout(timeout: number) {
  return new Promise(res => {
    setTimeout(res, timeout);
  });
}

export function minMax(val: number, min: number, max: number) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}
