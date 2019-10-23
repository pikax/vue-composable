import { Ref } from "@vue/composition-api";
declare type PromiseType<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
interface PromiseResult<T extends Promise<any>, TR = PromiseType<T>, TError = any> {
    promise: Ref<T | undefined>;
    result: Ref<TR | null>;
    loading: Ref<boolean>;
    error: Ref<TError>;
}
export interface PromiseResultFactory<T extends Promise<any>, TArgs extends Array<any> = never> extends PromiseResult<T> {
    exec: (...args: TArgs) => Promise<PromiseType<T> | undefined>;
}
export declare function usePromise<T extends Promise<any>, TArgs extends Array<any>>(fn: (...args: TArgs) => T): PromiseResultFactory<T, TArgs>;
export declare function usePromise<T extends Promise<any>>(fn: () => T): PromiseResultFactory<T>;
export {};
