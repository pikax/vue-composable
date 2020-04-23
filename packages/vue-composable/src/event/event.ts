import { watch, Ref } from "../api";
import { RefTyped, NO_OP, wrap } from "../utils";

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
  el: T | Ref<T | undefined>,
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
  el: T | Ref<T | undefined>,
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
  el: Element | Ref<Element | undefined>,
  name: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent(
  el: Element | Ref<Element | undefined> | RefTyped<Window> | RefTyped<any>,
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

    const removeWatch = watch(
      element,
      (n, _, cleanUp) => {
        if (n) {
          addEventListener(n);
          cleanUp(() => removeEventListener(n));
        }
      },
      { immediate: true }
    );

    remove = () => {
      removeEventListener(element.value);
      removeWatch();
    };
  }

  return remove;
}
