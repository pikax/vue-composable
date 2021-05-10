import { isRef, Ref, ref, watch } from "../api";
import {
  isBoolean,
  isClient,
  isElement,
  isNumber,
  PASSIVE_EV,
  RefElement,
  RefTyped,
  wrap,
} from "../utils";
import { RemoveEventFunction, useEvent } from "./event";
import { useDebounce } from "../debounce";

const SCROLL_METHODS = ["scrollBy", "scrollTo", "scrollIntoView"];
interface ScrollMethods {
  scrollBy: Element["scrollBy"];
  scrollTo: Element["scrollTo"];
  scrollIntoView: Element["scrollIntoView"];
}

export interface ScrollResult {
  scrollTop: Ref<number>;
  scrollLeft: Ref<number>;
  remove: RemoveEventFunction;

  scrollTopTo: (y: number) => void;
  scrollLeftTo: (x: number) => void;

  scrollTo: Element["scrollTo"];
  scrollBy: Element["scrollBy"];
  scrollIntoView: Element["scrollIntoView"];
}

export function useOnScroll(): ScrollResult;
export function useOnScroll(wait: number): ScrollResult;
export function useOnScroll(
  options: boolean | AddEventListenerOptions,
  wait?: number,
): ScrollResult;
export function useOnScroll(el: RefTyped<Window>, wait: number): ScrollResult;
export function useOnScroll(
  el: RefTyped<Window>,
  options?: boolean | AddEventListenerOptions,
  wait?: number,
): ScrollResult;
export function useOnScroll(el: RefElement, wait: number): ScrollResult;
export function useOnScroll(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number,
): ScrollResult;

export function useOnScroll<T extends Element>(
  el: Ref<T> | Ref<T | null>,
  options?: boolean | AddEventListenerOptions,
  wait?: number,
): ScrollResult;

export function useOnScroll<T extends Element>(
  el: Ref<T | null>,
  wait: number,
): ScrollResult;

export function useOnScroll(
  el?: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number,
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
    (scrollableElement.value && scrollableElement.value.scrollTop) || 0,
  );
  const scrollLeft = ref(
    (scrollableElement.value && scrollableElement.value.scrollLeft) || 0,
  );

  let handler = () => {
    scrollTop.value = scrollableElement.value!.scrollTop;
    scrollLeft.value = scrollableElement.value!.scrollLeft;
  };

  const methods = SCROLL_METHODS.reduce((p, c) => {
    //@ts-ignore
    p[c] = (...args: any) =>
      //@ts-ignore
      scrollableElement.value &&
      //@ts-ignore
      scrollableElement.value[c] &&
      //@ts-ignore
      scrollableElement.value[c].apply(scrollableElement.value, args);
    return p;
  }, {}) as ScrollMethods;

  const scrollTopTo = (top: number) => methods.scrollTo({ top });
  const scrollLeftTo = (left: number) => methods.scrollTo({ left });

  const [eventOptions, ms] = isNumber(el) || !el
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

    remove,
    scrollTopTo,
    scrollLeftTo,

    ...methods,
  };
}
