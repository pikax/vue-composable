import { inject, InjectionKey } from "../api";

export function injectFactory<T, K extends Symbol | string>(
  key: K extends InjectionKey<any> ? never : K,
  defaultValueFactory: () => Promise<K extends InjectionKey<infer IK> ? IK : T>
): Promise<K extends InjectionKey<infer IK> ? IK : T>;

export function injectFactory<T, K extends Symbol | string>(
  key: K,
  defaultValueFactory: () => K extends InjectionKey<infer IK> ? IK : T
): K extends InjectionKey<infer IK> ? IK : T;

export function injectFactory<T>(
  key: InjectionKey<T> | Symbol | string,
  defaultValueFactory: () => T
): T;

export function injectFactory<T>(
  key: InjectionKey<T> | Symbol | string,
  defaultValueFactory: () => Promise<T>
): Promise<T>;

export function injectFactory<T>(
  key: InjectionKey<T> | string,
  defaultValueFactory: () => Promise<T> | T
): T {
  return inject(key, defaultValueFactory, true) as T;
}
