import { Ref } from "@vue/composition-api";
export declare type RefTyped<T> = T | Ref<T>;
export declare type RefElement = RefTyped<Element>;
export declare function unwrap<T>(o: RefTyped<T>): T;
export declare function wrap<T>(o: RefTyped<T>): Ref<T>;
export declare function promisedTimeout(timeout: number): Promise<unknown>;
export declare function minMax(val: number, min: number, max: number): number;
