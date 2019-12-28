import { ref, Ref } from "@vue/composition-api";

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
  TArgs extends Array<any> = never
> extends PromiseResult<T> {
  exec: (...args: TArgs) => Promise<PromiseType<T> | undefined>;
}

// TODO fix the typings, T doesn't need to extend Promise<any>

export function usePromise<T extends Promise<any>, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TArgs>;
export function usePromise<T extends Promise<any>>(
  fn: () => T
): PromiseResultFactory<T>;
export function usePromise<T extends Promise<any>, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TArgs> {
  if (!fn) {
    throw new Error(`[usePromise] argument can't be '${fn}'`);
  }
  if (typeof fn !== "function") {
    throw new Error(`[usePromise] expects function, but received ${typeof fn}`);
  }

  const loading = ref(false);
  const error = ref(null);
  const result = ref<PromiseType<T> | null>(null);
  const promise = ref<T>();

  const exec = async (...args: TArgs): Promise<PromiseType<T> | undefined> => {
    loading.value = true;
    error.value = null;
    result.value = null;

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
      return undefined;
    } finally {
      if (promise.value === currentPromise) {
        loading.value = false;
      }
    }
  };

  return {
    exec,
    result,
    promise,
    loading,
    error
  };
}
