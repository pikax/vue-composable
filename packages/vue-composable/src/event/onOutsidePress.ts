import { Ref } from "../api";
import { RemoveEventFunction, useEvent } from "./event";
import { RefTyped, RefElement, wrap } from "../utils";

const events: Array<keyof DocumentEventMap> = ["mousedown", "touchstart"];

export function useOnOutsidePress(
  el: RefTyped<Window>,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction;

export function useOnOutsidePress(
  el: RefElement,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction;

export function useOnOutsidePress<T extends Element>(
  el: Ref<T> | Ref<T | null>,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction;

export function useOnOutsidePress<T extends Element>(
  el: Ref<T | null>,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction;

export function useOnOutsidePress(
  el: RefElement,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction;
export function useOnOutsidePress(
  el: any,
  onOutsidePressCallback: (ev: MouseEvent) => void
): RemoveEventFunction {
  const element: Ref<Element | null> = wrap(el);
  const handler = (e: MouseEvent) =>
    element.value &&
    !element.value.contains(e.target as Node) &&
    onOutsidePressCallback(e);

  const event = events.find(x => `on${x}` in document.documentElement)!;
  return useEvent(document, event, handler, { passive: true });
}
