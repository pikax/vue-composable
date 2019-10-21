import { Ref, ref } from "@vue/composition-api";
import { unwrap, RefElement } from "./utils";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "./debounce";

type ResizeResult = {
  height: Ref<number>;
  width: Ref<number>;
  remove: RemoveEventFunction;
};

export function useOnResize(el: RefElement, wait: number): ResizeResult;
export function useOnResize(
  el: RefElement,
  options: boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult;
export function useOnResize(
  el: RefElement,
  options: number | boolean | AddEventListenerOptions,
  wait?: number
): ResizeResult {
  const element = unwrap(el);

  const height = ref(element.clientHeight);
  const width = ref(element.clientWidth);

  let handler = (ev: UIEvent) => {
    height.value = element.clientHeight;
    width.value = element.clientWidth;
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