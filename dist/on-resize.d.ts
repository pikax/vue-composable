import { Ref } from "@vue/composition-api";
import { RefElement } from "./utils";
import { RemoveEventFunction } from "./event";
declare type ResizeResult = {
    height: Ref<number>;
    width: Ref<number>;
    remove: RemoveEventFunction;
};
export declare function useOnResize(el: RefElement, wait: number): ResizeResult;
export declare function useOnResize(el: RefElement, options: boolean | AddEventListenerOptions, wait?: number): ResizeResult;
export {};
