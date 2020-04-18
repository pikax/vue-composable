import { Ref, ref, isRef, watch } from "@vue/runtime-core";
import {
  RefElement,
  wrap,
  RefTyped,
  useDebounce,
  isNumber,
  PASSIVE_EV,
  isBoolean,
  isElement,
  isClient
} from "@vue-composable/core";
import { useEvent, RemoveEventFunction } from "./event";

export interface ScrollResult {
  scrollTop: Ref<number>;
  scrollLeft: Ref<number>;
  remove: RemoveEventFunction;

  scrollTo: Element["scrollTo"];
  scrollTopTo: (y: number) => void;
  scrollLeftTo: (x: number) => void;
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
    scrollableElement.value &&
    scrollableElement.value.scrollTo &&
    scrollableElement.value.scrollTo.apply(scrollableElement.value, args);

  const scrollTopTo = (top: number) => scrollTo({ top });
  const scrollLeftTo = (left: number) => scrollTo({ left });

  const [eventOptions, ms] =
    isNumber(el) || !el
      ? [PASSIVE_EV, el as number]
      : isNumber(options)
      ? [PASSIVE_EV, options]
      : [options, wait];

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  const eventRemove = useEvent(element, "scroll", handler, eventOptions);
  const watchRemoveTop = watch(scrollTop, scrollTopTo, { immediate: false });
  const watchRemoveLeft = watch(scrollLeft, scrollLeftTo, { immediate: false });
  const remove = () => {
    eventRemove();
    watchRemoveLeft();
    watchRemoveTop();
  };

  return {
    scrollTop,
    scrollLeft,

    scrollTo,

    remove,
    scrollTopTo,
    scrollLeftTo
  };
}
