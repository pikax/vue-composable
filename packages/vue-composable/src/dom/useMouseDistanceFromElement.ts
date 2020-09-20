import { ComputedRef, computed } from "../api";
import { RemoveEventFunction, useOnMouseMove } from "../event";
import { isClient, NO_OP, RefTyped, unwrap } from "../utils";

export default function useMouseDistanceFromElement(
  element: RefTyped<HTMLElement>
) {
  let distance: ComputedRef<number> | undefined = undefined;
  let remove: RemoveEventFunction = NO_OP;

  if (isClient) {
    // todo pass as option
    const debounce = 0;
    const { mouseX, mouseY, remove: removeMouseEvent } = useOnMouseMove(
      window,
      debounce
    );

    distance = computed(() => {
      const elem = unwrap(element);
      if (!elem) return 0;

      return Math.floor(
        Math.sqrt(
          Math.pow(mouseX.value - (elem.offsetLeft + elem.clientWidth / 2), 2) +
            Math.pow(mouseY.value - (elem.offsetTop + elem.clientHeight / 2), 2)
        )
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
