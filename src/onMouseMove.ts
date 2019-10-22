import { Ref, ref } from "@vue/composition-api";
import { unwrap, RefElement } from "./utils";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "./debounce";

type MouseMoveResult = {
  mouseX: Ref<number>;
  mouseY: Ref<number>;
  remove: RemoveEventFunction;
};

export function useMouseResize(el: RefElement, wait: number): MouseMoveResult;
export function useMouseResize(
  el: RefElement,
  options: boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult;
export function useMouseResize(
  el: RefElement,
  options: number | boolean | AddEventListenerOptions,
  wait?: number
): MouseMoveResult {
  const element = unwrap(el);

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

  const remove = useEvent(element, "mousemove", handler, eventOptions);

  return {
    mouseX,
    mouseY,

    remove
  };
}
