import { PromiseResultFactory, usePromise } from "./promise";

/**
 * Promise only created on `exec()`
 * @param fn - factory function
 * @param throwException - if `true` allows to catch exception when `exec()`
 */
export function usePromiseLazy<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => Promise<T>,
  throwException?: boolean
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromiseLazy<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => Promise<T>
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromiseLazy<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => T,
  throwException: boolean
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromiseLazy<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromiseLazy<T = any>(
  fn: () => Promise<T>,
  throwException: boolean
): PromiseResultFactory<Promise<T>>;

export function usePromiseLazy<T = any>(
  fn: () => Promise<T>
): PromiseResultFactory<Promise<T>>;

export function usePromiseLazy<T = any>(
  fn: () => T,
  throwException: boolean
): PromiseResultFactory<Promise<T>>;

export function usePromiseLazy<T = any>(
  fn: () => T
): PromiseResultFactory<Promise<T>>;

export function usePromiseLazy<
  T extends Promise<any>,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T,
  throwException = false
): PromiseResultFactory<T, TArgs> {
  // @ts-ignore
  return usePromise(fn, {
    lazy: true,
    throwException
  });
}
