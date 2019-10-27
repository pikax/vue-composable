import { Ref } from "@vue/composition-api";
import { RefElement } from "../utils";
import { RemoveEventFunction } from "./event";
export interface ScrollResult {
    scrollTop: Ref<number>;
    scrollLeft: Ref<number>;
    remove: RemoveEventFunction;
}
export declare function useOnScroll(el: RefElement, wait: number): ScrollResult;
export declare function useOnScroll(el: RefElement, options?: boolean | AddEventListenerOptions, wait?: number): ScrollResult;
