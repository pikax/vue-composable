import { onMounted, onUnmounted } from "@vue/composition-api";
import { RefTyped, wrap } from "@vue-composable/core";

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
  const element = wrap(el as Element);

  const remove = () => element.value!.removeEventListener(name, listener);

  onMounted(() => element.value!.addEventListener(name, listener, options));
  onUnmounted(remove);

  return remove;
}
