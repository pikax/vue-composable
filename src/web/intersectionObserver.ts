import { RefTyped, wrap, unwrap, isElement } from "../utils";
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  Ref
} from "@vue/composition-api";

export interface IntersectionObserverOptions {
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
  const wrappedElement = refEl ? wrap(refEl) : undefined;
  const element =
    wrappedElement && (isElement(wrappedElement.value) || !wrappedElement.value)
      ? (wrappedElement as Ref<Element>)
      : undefined;

  const options = computed(() =>
    refOptions
      ? unwrap(refOptions)
      : !element
      ? unwrap(refEl as RefTyped<IntersectionObserverOptions>)
      : undefined
  );

  const elements = ref<IntersectionObserverEntry[]>(
    element && element.value ? [element.value] : []
  );

  const isIntersecting = computed(() =>
    elements.value.every(x => x.isIntersecting)
  );

  const handling = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    elements.value = entries;
  };

  let observer = ref<IntersectionObserver>();

  watch(
    () => options,
    options => {
      if (observer.value) {
        observer.value.disconnect();
      }

      const opts: IntersectionObserverInit | undefined =
        (options &&
          options.value && {
            root: unwrap(options.value.root),
            rootMargin: unwrap(options.value.rootMargin),
            threshold: unwrap(options.value.threshold)
          }) ||
        undefined;
      observer.value = new IntersectionObserver(handling, opts);

      const targets = elements.value.map(x => x.target);
      targets.forEach(observer.value.observe);
    },
    { deep: true }
  );

  const observe = (element: RefTyped<Element>) => {
    const e = unwrap(element);
    observer.value!.observe(e);
  };
  const unobserve = (element: RefTyped<Element>) => {
    const e = unwrap(element);
    observer.value!.unobserve(e);
  };

  const disconnect = () => observer.value!.disconnect();

  // if the element is passed we should add hooks
  if (element) {
    onMounted(() => {
      if (isElement(element.value)) {
        observe(element);
      }
    });

    onUnmounted(() => {
      if (isElement(element.value)) {
        observe(element);
      }
    });
  }

  const debug = () => {
    if(elements.value.length === 0){ 
      __DEV__ && console.warn('[IntersectionObserver] no elements provided, did you mount the component?')
      return;
    }
    // TODO: add border to the elements 
  };

  return {
    elements,
    observe,
    unobserve,
    disconnect,

    isIntersecting,
    debug
  };
}
