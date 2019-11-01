import { ref, Ref, computed } from "@vue/composition-api";
import {
  isPromise,
  promisedTimeout,
  isNumber,
  isDate,
  isObject,
  isFunction
} from "../utils";

const MAX_RETRIES = 9000;

/* istanbul ignore next */
const RetryId = Symbol(__DEV__ ? "RetryId" : undefined);
/* istanbul ignore next */
const CancellationToken = Symbol(__DEV__ ? "CancellationToken" : undefined);

/**
 * @description How long should it delay or what time it should execute, it also supports Promises
 * @param {number} retry - Current retry number
 * @returns {number | Date | Promise<void> | Promise<number> | Promise<Date>} - Should wait until `Date`, wait until `Promise` finish or wait `number` ms
 */
type RetryDelayFactory = (
  retry: number
) => number | Date | Promise<void> | Promise<number> | Promise<Date>;

interface RetryOptions {
  /**
   * @description Maximum of times it should retry
   */
  maxRetries?: number;

  /**
   * @description How long should it delay or what time it should execute, it also supports Promises
   */
  retryDelay?: RetryDelayFactory;
}

interface RetryContext {
  /**
   * @description Current attempt number
   */
  retryCount: Ref<number>;
  /**
   * @description When it should retry
   * @example new Date(nextRetry.value)
   */
  nextRetry: Ref<number | undefined>;
  /**
   * @description Get the current state, set to true after the first failure
   */
  isRetrying: Ref<boolean>;
  /**
   * @description List of all the errors occurred in since the last `exec` call
   */
  retryErrors: Ref<object[]>;

  /**
   * @description **INTERNAL** incremented every time `exec` is called
   */
  [RetryId]: { value: number };
  /**
   * @description **INTERNAL** Used to cancel last retry
   */
  [CancellationToken]: { value: boolean };
}

type Factory<T, TArgs extends Array<any>, TReturn = T> = (
  ...args: TArgs
) => TReturn;

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
      if (args) {
        result = factory(...args);
      } else {
        result = factory();
      }
      
      if (isPromise(result)) {
        result = await result;
      }

      // is cancelled?
      if (context[CancellationToken].value) {
        return null;
      }

      success = true;
    } catch (error) {
      result = null;
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

    const now = Date.now();
    const pDelayBy = delay(i); // wrapped
    const delayBy = isPromise(pDelayBy) ? await pDelayBy : pDelayBy; // unwrap promise

    if (!isPromise(pDelayBy) || !!delayBy) {
      if (isNumber(delayBy)) {
        nextRetry = delayBy;
      } else if (isDate(delayBy)) {
        nextRetry = delayBy.getTime();
      } else {
        throw new Error(
          `[useRetry] invalid value received from options.retryDelay '${typeof delayBy}'`
        );
      }

      // if the retry is in the past, means we need to await that amount
      if (nextRetry < now) {
        context.nextRetry.value = now + nextRetry;
      } else {
        context.nextRetry.value = nextRetry;
        nextRetry = nextRetry - now;
      }

      if (nextRetry > 0) {
        await promisedTimeout(nextRetry);
      }
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

interface RetryReturn extends RetryContext {
  /**
   * @description Cancels last retry
   */
  cancel: () => void;
}

export interface RetryReturnNoFactory extends RetryReturn {
  /**
   * Executes factory until success
   * @param fn Factory function
   */
  exec<T>(fn: () => T): T;
}

export interface RetryReturnFactory<T, TArgs extends Array<any>>
  extends RetryReturn {
  /**
   * Executes factory with the arguments passed
   * @param args Arguments for the execution of the factory function passed at `useRetry`
   */
  exec(...args: TArgs): T;
}

export function useRetry(options?: RetryOptions): RetryReturnNoFactory;
export function useRetry<T, TArgs extends Array<any>>(
  factory: Factory<T, TArgs>
): RetryReturnFactory<T, TArgs>;
export function useRetry<T, TArgs extends Array<any>>(
  options: RetryOptions,
  factory: Factory<T, TArgs>
): RetryReturnFactory<T, TArgs>;
export function useRetry(
  options?: RetryOptions | Factory<any, any>,
  factory?: Factory<any, any>
): RetryReturnNoFactory {
  const opt = !options || isFunction(options) ? {} : options;
  const fn = isFunction(options) ? options : factory;

  if (!isFunction(options) && !isObject(options)) {
    throw new Error("[useRetry] options needs to be 'object'");
  }

  if (!!fn && !isFunction(fn)) {
    throw new Error("[useRetry] factory needs to be 'function'");
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

  const exec: any = fn
    ? (...args: any[]) => {
        ++context[RetryId].value;
        return defaultStrategy(opt, context, fn, args);
      }
    : (f: Factory<any, any>) => {
        ++context[RetryId].value;
        return defaultStrategy(opt, context, f, undefined);
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
