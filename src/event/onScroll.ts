import { Ref, ref } from "@vue/composition-api";
import { unwrap, RefElement, wrap } from "../utils";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "../debounce";

export interface ScrollResult {
  scrollTop: Ref<number>;
  scrollLeft: Ref<number>;
  remove: RemoveEventFunction;
};

export function useOnScroll(el: RefElement, wait: number): ScrollResult;
export function useOnScroll(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult;
export function useOnScroll(
  el: RefElement,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): ScrollResult {
  const element = wrap(el);

  const scrollTop = ref(element.value.scrollTop);
  const scrollLeft = ref(element.value.scrollLeft);

  let handler = (ev: Event) => {
    scrollTop.value = element.value.scrollTop;
    scrollLeft.value = element.value.scrollLeft;
  };

  const eventOptions = typeof options === "number" ? undefined : options;
  const ms = typeof options === "number" ? options : wait;

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