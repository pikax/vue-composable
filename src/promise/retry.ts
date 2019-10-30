import { ref, Ref, computed } from "@vue/composition-api";
import { isPromise, promisedTimeout } from "../utils";

const MAX_RETRIES = 9000;

interface RetryOptions {
  maxRetries?: number;

  retryDelay?: (retry: number) => number;
}

interface RetryContext {
  retryCount: Ref<number>;
  nextRetry: Ref<number | undefined>;
  isRetrying: Ref<boolean>;
  retryErrors: Ref<object[]>;
}

type Factory<T, TArgs extends Array<any>, TReturn = T> = (
  ...args: TArgs
) => TReturn;

type RetryFactoryResult<T, TArgs extends Array<any>> = Factory<
  T,
  TArgs,
  Promise<(T extends Promise<infer R> ? R : T) | null>
>;

const defaultStrategy = async <T, TArgs extends Array<any>>(
  options: RetryOptions,
  context: RetryContext,
  factory: Factory<T, TArgs>,
  args: TArgs
): Promise<(T extends Promise<infer R> ? R : T) | null> => {
  let i = 0;
  if (context.nextRetry.value! >= 0) {
    // reset nextRetry
    context.nextRetry.value = undefined;
  }
  let nextRetry: number | undefined = undefined;
  do {
    if (options.maxRetries && context.retryCount.value > options.maxRetries) {
      context.isRetrying.value = false;
      context.nextRetry.value = undefined;
      throw new Error(`[useRetry] max retries reached ${options.maxRetries}`);
    }

    try {
      let result = factory(...args);
      if (isPromise(result)) {
        result = await result;
      }

      context.isRetrying.value = false;
      context.nextRetry.value = undefined;

      return result as any;
    } catch (error) {
      ++i;
      context.retryErrors.value.push(error);
      nextRetry =
        (options.retryDelay && options.retryDelay(context.retryCount.value)) ||
        Date.now();

      nextRetry = nextRetry > Date.now() ? nextRetry : Date.now() + nextRetry;

      context.nextRetry.value = nextRetry;
      context.isRetrying.value = true;
    }
    const ms = Math.max(nextRetry - Date.now(), 0);
    if (ms > 0) {
      await promisedTimeout(ms);
    }
    // exec has been called again
    if (context.nextRetry.value !== nextRetry) {
      return null;
    }
  } while (i < MAX_RETRIES);

  return null;
};

export interface RetryReturn<T, TArgs extends Array<any>> extends RetryContext {
  exec: RetryFactoryResult<T, TArgs>;
}

export function useRetry<T, TArgs extends Array<any>>(
  options: RetryOptions = {},
  factory: Factory<T, TArgs>
): RetryReturn<T, TArgs> {
  if (typeof factory !== "function") {
    throw new Error("[useRetry] requires an function as second argument");
  }
  const isRetrying = ref(false);
  const nextRetry = ref<number>();
  const retryErrors = ref<object[]>([]);
  const retryCount = computed(() => retryErrors.value.length);

  const context: RetryContext = {
    isRetrying,
    retryCount,
    nextRetry,
    retryErrors
  };

  const exec: RetryFactoryResult<T, TArgs> = (...args) =>
    defaultStrategy(options, context, factory, args) as any;

  return {
    ...context,
    exec
  };
}
