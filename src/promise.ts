import { ref, Ref } from "@vue/composition-api";

type PromiseResultFactory<T extends Promise<TR>, TR> = {
  exec: () => Promise<TR>;
  promise: Ref<T | undefined>;
  result: Ref<TR | null>;

  loading: Ref<boolean>;
  error: Ref<any>;
};

type PromiseResultArgFactory<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
> = {
  exec: (...args: TArgs) => Promise<TR>;
  promise: Ref<T | undefined>;
  result: Ref<TR | null>;

  loading: Ref<boolean>;
  error: Ref<any>;
};

export function usePromise<T extends Promise<TR>, TR, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultArgFactory<T, TR, TArgs>;
export function usePromise<T extends Promise<TR>, TR>(
  fn: () => T
): PromiseResultFactory<T, TR>;
export function usePromise<T extends Promise<TR>, TR, TArgs extends Array<any>>(
  fn: (...args: TArgs) => T
): PromiseResultArgFactory<T, TR, TArgs> {
  if (!fn) {
    throw new Error(`[usePromise] argument can't be null`);
  }
  if (typeof fn !== "function") {
    throw new Error(`[usePromise] expects function, but received ${typeof fn}`);
  }

  const loading = ref(true);
  const error = ref(null);
  const result = ref<TR>(null);
  const promise = ref<T>();

  let lastPromise: T | null = null;
  const exec = async (...args: TArgs) => {
    loading.value = true;
    error.value = null;
    result.value = null;

    const currentPromise = (promise.value = lastPromise = fn(...args));
    try {
      const r = await currentPromise;
      if (lastPromise === currentPromise) {
        result.value = r;
      }
      return r;
    } catch (er) {
      if (lastPromise === currentPromise) {
        error.value = er;
        result.value = null;
      }
      throw er;
    } finally {
      if (lastPromise === currentPromise) {
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
