import { Ref, isRef, onMounted, onUnmounted } from "@vue/composition-api";
import { RefTyped } from "../utils";

export type RemoveEventFunction = () => void;

export function useEvent<K extends keyof DocumentEventMap>(
  el: RefTyped<Element>,
  name: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent(
  el: RefTyped<Element>,
  name: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction {
  const element = isRef(el) ? el.value : el;

  const remove = () => element.removeEventListener(name, listener);

  onMounted(() => element.addEventListener(name, listener, options));
  onUnmounted(remove);

  return remove;
}

