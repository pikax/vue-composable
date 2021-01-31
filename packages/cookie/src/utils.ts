export const isArray = Array.isArray;
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
export const isString = (val: unknown): val is string =>
  typeof val === "string";
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === "symbol";

export const isBoolean = (val: unknown): val is Boolean =>
  typeof val === "boolean";

export const isUndefined = (val: unknown): val is undefined =>
  typeof val === "undefined";

export const isNull = (val: unknown): val is null => val === null;

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
