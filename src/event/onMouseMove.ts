import { Ref, ref } from "@vue/composition-api";
import { RefElement } from "../utils";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "../debounce";

export interface MouseMoveResult {
  mouseX: Ref<number>;
  mouseY: Ref<number>;
  remove: RemoveEventFunction;
}

export function useOnMouseMove(el: RefElement, wait: number): MouseMoveResult;
export function useOnMouseMove(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult;
export function useOnMouseMove(
  el: RefElement,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult {
  const mouseX = ref(0);
  const mouseY = ref(0);

  let handler = (ev: MouseEvent) => {
    mouseX.value = ev.x;
    mouseY.value = ev.y;
  };

  const eventOptions = typeof options === "number" ? undefined : options;
  const ms = typeof options === "number" ? options : wait;

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  const remove = useEvent(el, "mousemove", handler, eventOptions);

  return {
    mouseX,
    mouseY,

    remove
  };
}
