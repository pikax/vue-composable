import { ref, Ref } from "@vue/composition-api";
import { isBoolean, isObject } from "../utils";

type PromiseType<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;

interface PromiseResult<
  T extends Promise<any>,
  TR = PromiseType<T>,
  TError = any
> {
  promise: Ref<T | undefined>;
  result: Ref<TR | null>;

  loading: Ref<boolean>;
  error: Ref<TError>;
}

export interface PromiseResultFactory<
  T extends Promise<any>,
  TArgs extends Array<any> = Array<any>
> extends PromiseResult<T> {
  exec: (...args: TArgs) => Promise<PromiseType<T> | undefined>;
}

export interface PromiseOptions {
  /**
   * if `true` allows to catch exception when `exec()`
   */
  throwException?: boolean;

  /**
   * Only executes on `exec`
   */
  lazy?: boolean;
}

/**
 *
 * @param fn - factory function
 * @param lazy - Delays execution until `exec` is called
 */
export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => Promise<T>,
  lazy?: boolean
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => Promise<T>,
  options: PromiseOptions
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => Promise<T>
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => T,
  lazy: boolean
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => T,
  options: PromiseOptions
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any, TArgs extends Array<any> = Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<Promise<T>, TArgs>;

export function usePromise<T = any>(
  fn: () => Promise<T>,
  lazy: boolean
): PromiseResultFactory<Promise<T>>;

export function usePromise<T = any>(
  fn: () => Promise<T>,
  options: PromiseOptions
): PromiseResultFactory<Promise<T>>;

export function usePromise<T = any>(
  fn: () => Promise<T>
): PromiseResultFactory<Promise<T>>;

export function usePromise<T = any>(
  fn: () => T,
  lazy: boolean
): PromiseResultFactory<Promise<T>>;

export function usePromise<T = any>(
  fn: () => T,
  options: PromiseOptions
): PromiseResultFactory<Promise<T>>;

export function usePromise<T = any>(
  fn: () => T
): PromiseResultFactory<Promise<T>>;

export function usePromise<T extends Promise<any>, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T,
  lazyOptions?: PromiseOptions | boolean
): PromiseResultFactory<T, TArgs> {
  if (!fn) {
    throw new Error(`[usePromise] argument can't be '${fn}'`);
  }
  if (typeof fn !== "function") {
    throw new Error(`[usePromise] expects function, but received ${typeof fn}`);
  }

  const [lazy, throwException] = isBoolean(lazyOptions)
    ? [lazyOptions, false]
    : isObject(lazyOptions)
    ? [lazyOptions.lazy, lazyOptions.throwException]
    : [false, false];

  const loading = ref(false);
  const error = ref(null);
  const result = ref<PromiseType<T> | null>(null);
  const promise = ref<T>();

  const exec = async (...args: TArgs): Promise<PromiseType<T> | undefined> => {
    loading.value = true;
    error.value = null;

    const throwExp =
      args &&
      fn.length !== args.length &&
      args.length > 0 &&
      isBoolean(args[args.length - 1])
        ? args[args.length - 1]
        : throwException;

    const currentPromise = (promise.value = fn(...args));
    try {
      const r = await currentPromise;
      if (promise.value === currentPromise) {
        result.value = r;
      }
      return r;
    } catch (er) {
      if (promise.value === currentPromise) {
        error.value = er;
        result.value = null;
      }
      return throwExp ? currentPromise : undefined;
    } finally {
      if (promise.value === currentPromise) {
        loading.value = false;
      }
    }
  };

  if (!lazy) {
    /* istanbul ignore else */
    if (__DEV__) {
      if (
        fn.length > 0 &&
        !isBoolean(isObject(lazyOptions) ? lazyOptions.lazy : lazyOptions)
      ) {
        console.warn(
          "[usePromise] parameters detected on `fn` factory. Executing promise without arguments."
        );
      }
    }
    // @ts-ignore
    exec();
  }

  return {
    exec,
    result,
    promise,
    loading,
    error
  };
}
