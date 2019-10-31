import { ref, Ref, computed } from "@vue/composition-api";
import { isPromise, promisedTimeout } from "../utils";

const MAX_RETRIES = 9000;

const RetryId = Symbol(
  /* istanbul ignore else */ __DEV__ ? "RetryId" : undefined
);
const CancellationToken = Symbol(
  /* istanbul ignore else */ __DEV__ ? "CancellationToken" : undefined
);

type RetryDelayFactory = (retry: number) => number;

interface RetryOptions {
  maxRetries?: number;

  retryDelay?: RetryDelayFactory;
}

interface RetryContext {
  /**
   * Current retry number
   */
  retryCount: Ref<number>;
  nextRetry: Ref<number | undefined>;
  isRetrying: Ref<boolean>;
  retryErrors: Ref<object[]>;

  [RetryId]: { value: number };
  [CancellationToken]: { value: boolean };
}

type Factory<T, TArgs extends Array<any>, TReturn = T> = (
  ...args: TArgs
) => TReturn;

type RetryFactoryResult<T, TArgs extends Array<any>> = Factory<
  T,
  TArgs,
  Promise<(T extends Promise<infer R> ? R : T) | null>
>;

type RetryStrategy<T = any, TArgs extends Array<any> = any> = (
  options: RetryOptions,
  context: RetryContext,
  factory: Factory<T, TArgs>,
  args: TArgs
) => Promise<(T extends Promise<infer R> ? R : T) | null>;

const defaultStrategy: RetryStrategy = async (
  options,
  context,
  factory,
  args
) => {
  const retryId = context[RetryId].value;
  let i = -1;
  const maxRetries = options.maxRetries || MAX_RETRIES + 1;
  const delay = options.retryDelay || noDelay;

  context.retryErrors.value = [];
  context.isRetrying.value = false;
  context.nextRetry.value = undefined;

  let nextRetry: number | undefined = undefined;
  do {
    let success = false;
    let result: any | null = null;
    try {
      ++i;
      result = factory(...args);
      if (isPromise(result)) {
        result = await result;
      }

      // is cancelled?
      if (context[CancellationToken].value) {
        return null;
      }

      success = true;
    } catch (error) {
      context.retryErrors.value.push(error);
    }

    // is our retry current one?
    if (retryId !== context[RetryId].value) {
      return result;
    }

    if (success) {
      context.isRetrying.value = false;
      context.nextRetry.value = undefined;
      return result;
    }

    if (i >= maxRetries) {
      context.isRetrying.value = false;
      context.nextRetry.value = undefined;
      return Promise.reject(
        new Error(`[useRetry] max retries reached ${maxRetries}`)
      );
    }

    context.isRetrying.value = true;

    nextRetry = delay(i);
    context.nextRetry.value =
      nextRetry < Date.now() ? Date.now() + nextRetry : nextRetry;

    if (nextRetry > 0) {
      await promisedTimeout(nextRetry);
    }

    // is cancelled?
    if (context[CancellationToken].value) {
      return null;
    }

    // is our retry current one?
    if (retryId !== context[RetryId].value) {
      return result;
    }
  } while (i < MAX_RETRIES);

  return null;
};

export interface RetryReturn<T, TArgs extends Array<any>> extends RetryContext {
  exec: RetryFactoryResult<T, TArgs>;
  cancel: () => void;
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
  const cancellationToken = { value: false };
  const retryId = { value: 0 };

  const retryCount = computed(() => retryErrors.value.length);

  const context: RetryContext = {
    isRetrying,
    retryCount,
    nextRetry,
    retryErrors,
    [RetryId]: retryId,
    [CancellationToken]: cancellationToken
  };

  const exec: RetryFactoryResult<T, TArgs> = (...args) => {
    ++context[RetryId].value;
    return defaultStrategy(options, context, factory, args) as any;
  };

  const cancel = () => {
    context.isRetrying.value = false;
    context.retryErrors.value.push(new Error("[useRetry] cancelled"));
    context.nextRetry.value = undefined;

    cancellationToken.value = true;
  };

  return {
    ...context,
    cancel,
    exec
  };
}

export const exponentialDelay: RetryDelayFactory = retryNumber => {
  const delay = Math.pow(2, retryNumber) * 100;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
};

export const noDelay: RetryDelayFactory = () => 0;
