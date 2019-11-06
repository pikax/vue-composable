import { Ref, ref } from "@vue/composition-api";
import {  RefElement, wrap } from "../utils";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "../debounce";

export interface ResizeResult {
  height: Ref<number>;
  width: Ref<number>;
  remove: RemoveEventFunction;
};

export function useOnResize(el: RefElement, wait: number): ResizeResult;
export function useOnResize(
  el: RefElement,
  options?: boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult;
export function useOnResize(
  el: RefElement,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult {
  const element = wrap(el);

  const height = ref(element.value?.clientHeight || 0);
  const width = ref(element.value?.clientWidth || 0);

  let handler = () => {
    height.value = element.value!.clientHeight;
    width.value = element.value!.clientWidth;
  };

  const eventOptions = typeof options === "number" ? undefined : options;
  const ms = typeof options === "number" ? options : wait;

  if (ms) {
    handler = useDebounce(handler, wait);
  }

  const remove = useEvent(element, "resize", handler, eventOptions);

  return {
    height,
    width,

    remove
  };
}