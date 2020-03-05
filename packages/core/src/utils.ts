import { Ref, isRef, ref } from "@vue/composition-api";

export type RefTyped<T> = T | Ref<T>;
export type RefElement = Element | Ref<Element | undefined>;

export type UnwrapRef<T> = T extends Ref<infer R> ? R : T;
export type WrapRef<T> = T extends Ref<any> ? T : Ref<T>;

// export function unwrap(o: RefElement): Element;
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
export const isString = (val: unknown): val is string =>
  typeof val === "string";
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === "symbol";

export const isBoolean = (val: unknown): val is Boolean =>
  typeof val === "boolean";

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

export const NO_OP = () => {};
export const FALSE_OP = () => false;

export const PASSIVE_EV: AddEventListenerOptions = { passive: true };

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

export const isClient = typeof window != "undefined";

export function deepClone<T extends object = object>(
  result: T,
  ...sources: T[]
): T {
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    if (source === undefined || !isObject(source)) continue;

    const keys = Object.keys(source);

    for (let j = 0; j < keys.length; j++) {
      const k = keys[j] as keyof T;
      const v = unwrap(source[k]);
      const sourceType = typeof v;
      const type = typeof result[k];

      if (result[k] === undefined || sourceType === type) {
        result[k] = isObject(v)
          ? deepClone<any>(result[k] || {}, v)
          : source[k]; // source[k] is assigned because if is ref we want to override to this ref
      }
    }
  }
  return result;
}

// compact version: https://stackoverflow.com/a/33146982/1209882
/**
 * returns a random string
 * @param len length of the string max: 36
 */
// export function randomString(len: number) {
//   return (+new Date).toString(36).slice(-len);
// }
