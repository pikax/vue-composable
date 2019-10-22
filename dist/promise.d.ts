import { Ref } from "@vue/composition-api";
interface PromiseResult<T extends Promise<TR>, TR, TError = any> {
    promise: Ref<T | undefined>;
    result: Ref<TR | null>;
    loading: Ref<boolean>;
    error: Ref<TError>;
}
export interface PromiseResultFactory<T extends Promise<TR>, TR, TArgs extends Array<any> = never> extends PromiseResult<T, TR> {
    exec: (...args: TArgs) => Promise<TR | undefined>;
}
export declare function usePromise<T extends Promise<TR>, TR, TArgs extends Array<any>>(fn: (...args: TArgs) => T): PromiseResultFactory<T, TR, TArgs>;
export declare function usePromise<T extends Promise<TR>, TR>(fn: () => T): PromiseResultFactory<T, TR>;
export {};
