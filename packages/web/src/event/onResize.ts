import { Ref, ref } from "@vue/runtime-core";
import { RefElement, wrap, RefTyped, useDebounce } from "@vue-composable/core";
import { useEvent, RemoveEventFunction } from "./event";


export interface ResizeResult {
  height: Ref<number>;
  width: Ref<number>;
  remove: RemoveEventFunction;
};

export function useOnResize(el: RefTyped<Window>, wait: number): ResizeResult;
export function useOnResize(
  el: RefTyped<Window>,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult;
export function useOnResize(el: RefElement, wait: number): ResizeResult;
export function useOnResize(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult;
export function useOnResize(
  el: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult {
  const element = wrap(el);

  const height = ref(element.value && element.value.clientHeight);
  const width = ref(element.value && element.value.clientWidth);

  let handler = () => {
    height.value = element.value.clientHeight;
    width.value = element.value.clientWidth;
  };

  const eventOptions = typeof options === "number" ? undefined : options;
  const ms = typeof options === "number" ? options : wait;

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  // resize seems only to be fired against the window
  const remove = useEvent(window, "resize", handler, eventOptions || { passive: true });

  return {
    height,
    width,

    remove
  };
}