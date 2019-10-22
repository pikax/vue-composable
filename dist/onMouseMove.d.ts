import { Ref } from "@vue/composition-api";
import { RefElement } from "./utils";
import { RemoveEventFunction } from "./event";
declare type MouseMoveResult = {
    mouseX: Ref<number>;
    mouseY: Ref<number>;
    remove: RemoveEventFunction;
};
export declare function useMouseResize(el: RefElement, wait: number): MouseMoveResult;
export declare function useMouseResize(el: RefElement, options: boolean | AddEventListenerOptions, wait?: number): MouseMoveResult;
export {};
