import { Ref } from "@vue/composition-api";
import { PromiseResultFactory } from "./promise";
export interface CancellablePromiseResult<TR> {
    cancel: (result?: TR) => void;
    cancelled: Ref<boolean>;
}
export declare function useCancellablePromise<T extends Promise<TR>, TR, TArgs extends Array<any>>(fn: (...args: TArgs) => T): PromiseResultFactory<T, TR, TArgs> & CancellablePromiseResult<TR>;
export declare function useCancellablePromise<T extends Promise<TR>, TR>(fn: () => T): PromiseResultFactory<T, TR> & CancellablePromiseResult<TR>;
