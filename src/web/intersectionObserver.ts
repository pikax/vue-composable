import { RefTyped, wrap, unwrap, isElement } from "../utils";
import { ref, computed } from "@vue/composition-api";

interface IntersectionObserverOptions {
  root?: RefTyped<Element> | null;
  rootMargin?: RefTyped<string> | string;
  threshold?: RefTyped<number | number[]> | number | number[];
}

export function useIntersectionObserver(
  el: RefTyped<Element>,
  options?: RefTyped<IntersectionObserverOptions>
): any;
export function useIntersectionObserver(
  options: RefTyped<IntersectionObserverOptions>
): any;
export function useIntersectionObserver(
  refEl?: RefTyped<Element> | RefTyped<IntersectionObserverOptions>,
  refOptions?: RefTyped<IntersectionObserverOptions>
) {
  const element = isElement(unwrap(refEl)) ? wrap(refEl) : undefined;

  const options = refOptions
    ? wrap(refOptions)
    : !element
    ? wrap(refEl as RefTyped<IntersectionObserverOptions>)
    : undefined;

  const elements = ref<IntersectionObserverEntry[]>(element ? [element] : []);

  const isIntersecting = computed(() =>
    elements.value.every(x => x.isIntersecting)
  );

  const handling = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    elements.value = entries;
  };

  // const observer = computed(() => {
  //   return new IntersectionObserver(handling);
  // });
  const observer = new IntersectionObserver(
    handling,
    (options && options.value) || undefined
  );

  const observe = (element: RefTyped<Element>) => {
    const e = unwrap(element);
    observer.value.observe(e);
  };
  const unobserve = (element: RefTyped<Element>) => {
    const e = unwrap(element);
    observer.value.unobserve(e);
  };

  const disconect = () => observer.value.disconnect();

  observer.value.rootMargin;

  return {
    elements,

    isIntersecting
  };
}
