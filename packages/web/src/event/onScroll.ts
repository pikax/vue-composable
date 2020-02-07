import { Ref, ref, isRef } from "@vue/composition-api";
import {
  RefElement,
  wrap,
  RefTyped,
  useDebounce,
  isNumber,
  isBoolean,
  isClient,
  isElement,
  PASSIVE_EV
} from "@vue-composable/core";
import { useEvent, RemoveEventFunction } from "./event";

export interface ScrollResult {
  scrollTop: Ref<number>;
  scrollLeft: Ref<number>;
  remove: RemoveEventFunction;

  scrollTo: Element["scrollTo"];
}

export function useOnScroll(): ScrollResult;
export function useOnScroll(wait: number): ScrollResult;
export function useOnScroll(
  options: boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult;
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
  el?: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult {
  const isValidElement = (el: any) =>
    isNumber(el) || isBoolean(el) || !(isElement(el) || isRef(el)) || !el
      ? false
      : true;

  const element = isValidElement(el)
    ? wrap(el)
    : ref((isClient && window) || undefined);
  const scrollableElement = isValidElement(el)
    ? element
    : ref((isClient && window.document.scrollingElement) || undefined);

  const scrollTop = ref(
    (scrollableElement.value && scrollableElement.value.scrollTop) || 0
  );
  const scrollLeft = ref(
    (scrollableElement.value && scrollableElement.value.scrollLeft) || 0
  );

  let handler = () => {
    scrollTop.value = scrollableElement.value!.scrollTop;
    scrollLeft.value = scrollableElement.value!.scrollLeft;
  };

  const scrollTo: Element["scrollTo"] = (...args: any) =>
    scrollableElement.value.scrollTo.apply(scrollableElement.value, args);

  const [eventOptions, ms] =
    isNumber(el) || !el
      ? [PASSIVE_EV, el as number]
      : isNumber(options)
      ? [PASSIVE_EV, options]
      : [options, wait];

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  const remove = useEvent(element, "scroll", handler, eventOptions);

  return {
    scrollTop,
    scrollLeft,

    scrollTo,

    remove
  };
}
