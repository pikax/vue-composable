import { onUnmounted, watch, Ref } from "@vue/composition-api";
import { RefTyped, wrap, NO_OP } from "@vue-composable/core";

export type RemoveEventFunction = () => void;

export function useEvent<
  T extends {
    addEventListener: (
      name: string,
      listener: EventListenerOrEventListenerObject
    ) => any;
    removeEventListener: Function;
  },
  M,
  K extends keyof M
>(
  el: RefTyped<T>,
  name: K,
  listener: (this: T, ev: M[K]) => any
): RemoveEventFunction;
export function useEvent<
  T extends {
    addEventListener: (
      name: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) => any;
    removeEventListener: Function;
  },
  M,
  K extends keyof M
>(
  el: RefTyped<T>,
  name: K,
  listener: (this: T, ev: M[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent<K extends keyof WindowEventMap>(
  el: RefTyped<Window>,
  name: K,
  listener: (this: Document, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent<K extends keyof DocumentEventMap>(
  el: RefTyped<Element>,
  name: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent(
  el: RefTyped<Element> | RefTyped<Window> | RefTyped<any>,
  name: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction {
  let remove = NO_OP;

  if (el) {
    const element: Ref<Element> = wrap(el as Element);

    const removeEventListener = (e: Element) =>
      e.removeEventListener(name, listener);
    const addEventListener = (e: Element) =>
      e.addEventListener(name, listener, options);

    remove = () => removeEventListener(element.value);

    onUnmounted(remove);

    watch(element, (n, o) => {
      if (o) {
        removeEventListener(o);
      }
      if (n) {
        addEventListener(n);
      }
    });
  }

  return remove;
}
