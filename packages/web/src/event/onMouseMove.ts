import { Ref, ref } from "@vue/composition-api";
import {
  RefElement,
  RefTyped,
  useDebounce,
  isNumber
} from "@vue-composable/core";
import { useEvent, RemoveEventFunction } from "./event";

export interface MouseMoveResult {
  mouseX: Ref<number>;
  mouseY: Ref<number>;
  remove: RemoveEventFunction;
}

export function useOnMouseMove(
  el: RefTyped<Window>,
  wait: number
): MouseMoveResult;
export function useOnMouseMove(
  el: RefTyped<Window>,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult;
export function useOnMouseMove(el: RefElement, wait: number): MouseMoveResult;
export function useOnMouseMove(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult;
export function useOnMouseMove(
  el: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult {
  const mouseX = ref(0);
  const mouseY = ref(0);

  let handler = (ev: MouseEvent) => {
    mouseX.value = ev.x;
    mouseY.value = ev.y;
  };

  const [eventOptions, ms] = isNumber(options)
    ? [undefined, options]
    : [options, wait];

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
