import { onMounted, onUnmounted } from "@vue/runtime-core";
import { RefTyped, wrap } from "@vue-composable/core";

export type RemoveEventFunction = () => void;

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
  el: RefTyped<Element> | RefTyped<Window>,
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