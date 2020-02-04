import { Ref, ref } from "@vue/runtime-core";
import { RefElement, wrap, RefTyped, useDebounce, isNumber } from "@vue-composable/core";
import { useEvent, RemoveEventFunction } from "./event";

export interface ScrollResult {
  scrollTop: Ref<number>;
  scrollLeft: Ref<number>;
  remove: RemoveEventFunction;
}

export function useOnScroll(el: RefTyped<Window>, wait: number): ScrollResult;
export function useOnScroll(
  el: RefTyped<Window>,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult;
export function useOnScroll(el: RefElement, wait: number): ScrollResult;
export function useOnScroll(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult;
export function useOnScroll(
  el: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult {
  const element = wrap(el);

  const scrollTop = ref(element.value && element.value.scrollTop);
  const scrollLeft = ref(element.value && element.value.scrollLeft);

  let handler = (ev: Event) => {
    scrollTop.value = element.value.scrollTop;
    scrollLeft.value = element.value.scrollLeft;
  };

  const [eventOptions, ms] = isNumber(options) ? [undefined, options] : [options, wait];

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  const remove = useEvent(element, "scroll", handler, eventOptions);

  return {
    scrollTop,
    scrollLeft,

    remove
  };
}
