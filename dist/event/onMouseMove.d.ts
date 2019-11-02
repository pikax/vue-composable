import { Ref } from "@vue/composition-api";
import { RefElement } from "../utils";
import { RemoveEventFunction } from "./event";
export interface MouseMoveResult {
    mouseX: Ref<number>;
    mouseY: Ref<number>;
    remove: RemoveEventFunction;
}
export declare function useOnMouseMove(el: RefElement, wait: number): MouseMoveResult;
export declare function useOnMouseMove(el: RefElement, options?: boolean | AddEventListenerOptions, wait?: number): MouseMoveResult;
