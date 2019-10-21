import { Ref, isRef, onMounted, onUnmounted } from "@vue/composition-api";

export type RemoveEventFunction = () => void;

export function useEvent<K extends keyof DocumentEventMap>(
  el: Element | Ref<Element>,
  name: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): RemoveEventFunction;
export function useEvent(
  el: Element | Ref<Element>,
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

