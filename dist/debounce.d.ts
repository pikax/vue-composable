export declare function useDebounce<T extends Function>(handler: T, wait?: number): T;
/**
 * A function that emits a side effect and does not return anything.
 * https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
 */
export declare type Procedure = (...args: any[]) => void;
export declare type Options = {
    isImmediate: boolean;
};
export declare function debounce<F extends Procedure>(func: F, waitMilliseconds?: number, options?: Options): F;
