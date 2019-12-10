import { Ref } from "@vue/composition-api";
import { RefElement, RefTyped } from "../utils";
import { RemoveEventFunction } from "./event";
export interface ResizeResult {
    height: Ref<number>;
    width: Ref<number>;
    remove: RemoveEventFunction;
}
export declare function useOnResize(el: RefTyped<Window>, wait: number): ResizeResult;
export declare function useOnResize(el: RefTyped<Window>, options?: boolean | AddEventListenerOptions, wait?: number): ResizeResult;
export declare function useOnResize(el: RefElement, wait: number): ResizeResult;
export declare function useOnResize(el: RefElement, options?: boolean | AddEventListenerOptions, wait?: number): ResizeResult;
