import { computed, ComputedRef, Ref } from "../api";
import { RemoveEventFunction, useOnMouseMove } from "../event";
import { isClient, NO_OP, RefTyped, unwrap } from "../utils";

export interface MouseDistanceReturn {
  distance: ComputedRef<number>;
  remove: RemoveEventFunction;
}

export function useMouseDistanceFromElement(
  el: RefTyped<HTMLElement>,
  wait: number,
): MouseDistanceReturn;

export function useMouseDistanceFromElement<T extends HTMLElement>(
  el: Ref<T> | Ref<T | null>,
  options?: boolean | AddEventListenerOptions,
  wait?: number,
): MouseDistanceReturn;

export function useMouseDistanceFromElement<T extends HTMLElement>(
  el: Ref<T | null>,
  wait: number,
): MouseDistanceReturn;

export function useMouseDistanceFromElement(
  el: RefTyped<HTMLElement>,
  options?: boolean | AddEventListenerOptions,
  wait?: number,
): MouseDistanceReturn;

export function useMouseDistanceFromElement(
  el: any,
  options?: number | boolean | AddEventListenerOptions,
  wait?: number,
): MouseDistanceReturn {
  let distance: ComputedRef<number> | undefined = undefined;
  let remove: RemoveEventFunction = NO_OP;

  if (isClient) {
    // @ts-ignore
    const { pageX, pageY, remove: removeMouseEvent } = useOnMouseMove(
      window,
      options,
      wait,
    );

    distance = computed(() => {
      const elem = unwrap(el);
      if (!elem) return 0;

      return Math.floor(
        Math.sqrt(
          Math.pow(pageX.value - (elem.offsetLeft + elem.clientWidth / 2), 2) +
            Math.pow(pageY.value - (elem.offsetTop + elem.clientHeight / 2), 2),
        ),
      );
    });

    remove = removeMouseEvent;
  } else {
    distance = computed(() => -1);
  }

  return {
    distance,

    remove,
  };
}
