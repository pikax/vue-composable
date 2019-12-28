
import { Ref, isRef, ref } from "@vue/composition-api";

export type RefTyped<T> = T | Ref<T>;
export type RefElement = Element | Ref<Element | undefined>;

export function unwrap(o: RefElement): Element;
export function unwrap<T>(o: RefTyped<T>): T;
export function unwrap<T>(o: RefTyped<T>): T {
  return isRef(o) ? o.value : o;
}

export function wrap(o: RefElement): Ref<Element>;
export function wrap<T>(o: RefTyped<T>): Ref<T>;
export function wrap<T>(o: RefTyped<T>): Ref<T> {
  return isRef(o) ? o : ref(o);
}

export const isArray = Array.isArray;
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
// export const isString = (val: unknown): val is string =>
//   typeof val === "string";
// export const isSymbol = (val: unknown): val is symbol =>
//   typeof val === "symbol";

export const isDate = (val: unknown): val is Date =>
  isObject(val) && isFunction(val.getTime);

export const isNumber = (val: unknown): val is number =>
  typeof val === "number";

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";

export const isElement = (val: unknown): val is Element =>
  isObject(val) && !!val.tagName;

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function promisedTimeout(timeout: number): Promise<void> {
  return new Promise(res => {
    setTimeout(res, timeout);
  });
}

export function minMax(val: number, min: number, max: number) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}
