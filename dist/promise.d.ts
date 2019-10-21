import { Ref } from "@vue/composition-api";
declare type PromiseResultFactory<T extends Promise<TR>, TR> = {
    exec: () => Promise<TR>;
    promise: Ref<T | undefined>;
    result: Ref<TR | null>;
    loading: Ref<boolean>;
    error: Ref<any>;
};
declare type PromiseResultArgFactory<T extends Promise<TR>, TR, TArgs extends Array<any>> = {
    exec: (...args: TArgs) => Promise<TR>;
    promise: Ref<T | undefined>;
    result: Ref<TR | null>;
    loading: Ref<boolean>;
    error: Ref<any>;
};
export declare function usePromise<T extends Promise<TR>, TR, TArgs extends Array<any>>(fn: (...args: TArgs) => T): PromiseResultArgFactory<T, TR, TArgs>;
export declare function usePromise<T extends Promise<TR>, TR>(fn: () => T): PromiseResultFactory<T, TR>;
export {};
