import { inject, InjectionKey } from "../api";

export function injectFactory<T>(
  key: InjectionKey<T> | string,
  defaultValueFactory: () => Promise<T>
): Promise<T>;
export function injectFactory<T>(
  key: InjectionKey<T> | string,
  defaultValueFactory: () => T
): T;
export function injectFactory<T>(
  key: InjectionKey<T> | string,
  defaultValueFactory: () => Promise<T> | T
): T {
  const uniqueSymbol = Symbol();
  const r = inject<T | Symbol>(key, uniqueSymbol);
  if (r === uniqueSymbol) {
    return defaultValueFactory() as T;
  }
  return r as T;
}
