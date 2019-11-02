import { Ref } from "@vue/composition-api";
declare const ExecutionId: unique symbol;
declare const CancellationToken: unique symbol;
/**
 * @description How long should it delay or what time it should execute, it also supports Promises
 * @param {number} retry - Current retry number
 * @returns {number | Date | Promise<void> | Promise<number> | Promise<Date>} - Should wait until `Date`, wait until `Promise` finish or wait `number` ms
 */
declare type RetryDelayFactory = (retry: number) => number | Date | Promise<void> | Promise<number> | Promise<Date>;
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
    [ExecutionId]: {
        value: number;
    };
    /**
     * @description **INTERNAL** Used to cancel last retry
     */
    [CancellationToken]: {
        value: boolean;
    };
}
declare type Factory<T, TArgs extends Array<any>, TReturn = T> = (...args: TArgs) => TReturn;
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
export interface RetryReturnFactory<T, TArgs extends Array<any>> extends RetryReturn {
    /**
     * Executes factory with the arguments passed
     * @param args Arguments for the execution of the factory function passed at `useRetry`
     */
    exec(...args: TArgs): T;
}
export declare function useRetry(options?: RetryOptions): RetryReturnNoFactory;
export declare function useRetry<T, TArgs extends Array<any>>(factory: Factory<T, TArgs>): RetryReturnFactory<T, TArgs>;
export declare function useRetry<T, TArgs extends Array<any>>(options: RetryOptions, factory: Factory<T, TArgs>): RetryReturnFactory<T, TArgs>;
export declare const exponentialDelay: RetryDelayFactory;
export declare const noDelay: RetryDelayFactory;
export {};
