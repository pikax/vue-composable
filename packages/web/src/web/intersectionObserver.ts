import {
  RefTyped,
  wrap,
  unwrap,
  isElement,
  RefElement,
  isClient,
  NO_OP
} from "@vue-composable/core";
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  Ref
} from "@vue/runtime-core";

export interface IntersectionObserverOptions {
  root?: RefTyped<Element> | null;
  rootMargin?: RefTyped<string> | string;
  threshold?: RefTyped<number | number[]> | number | number[];
}

export interface IntersectionObserverResult {
  supported: boolean;

  elements: Ref<IntersectionObserverEntry[]>;

  observe: (el: RefTyped<Element>) => void;
  unobserve: (el: RefTyped<Element>) => void;
  disconnect: () => void;
  readonly isIntersecting: Ref<boolean>;

  // debug: () => void; // TODO implement
}

export function useIntersectionObserver(
  el: RefElement,
  options?: RefTyped<IntersectionObserverOptions>
): IntersectionObserverResult;
export function useIntersectionObserver(
  options: RefTyped<IntersectionObserverOptions>
): IntersectionObserverResult;
export function useIntersectionObserver(
  refEl?: any,
  refOptions?: RefTyped<IntersectionObserverOptions>
): IntersectionObserverResult {
  const supported = isClient && "IntersectionObserver" in window;
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

  const elements = ref<IntersectionObserverEntry[]>([]);
  // element && element.value ? [element.value] : []

  const isIntersecting = computed(
    () =>
      elements.value.length > 0 && elements.value.every(x => x.isIntersecting)
  );

  const handling = (entries: IntersectionObserverEntry[]) => {
    elements.value = entries;
  };

  let observer = ref<IntersectionObserver>();

  if (supported) {
    watch(
      options,
      options => {
        if (observer.value) {
          observer.value.disconnect();
        }

        const opts: IntersectionObserverInit | undefined =
          (options &&
            options && {
              root: unwrap(options.root),
              rootMargin: unwrap(options.rootMargin),
              threshold: unwrap(options.threshold)
            }) ||
          undefined;
        observer.value = new IntersectionObserver(handling, opts);

        const targets = elements.value.map(x => x.target);
        targets.forEach(observer.value.observe);
      },
      { deep: true, immediate: true }
    );
  }

  const observe = supported
    ? (element: RefTyped<Element>) => {
        const e = unwrap(element);
        observer.value!.observe(e);
      }
    : NO_OP;
  const unobserve = supported
    ? (element: RefTyped<Element>) => {
        const e = unwrap(element);
        observer.value!.unobserve(e);
      }
    : NO_OP;

  const disconnect = () => observer.value!.disconnect();

  // if the element is passed we should add hooks
  if (element) {
    // if value is defined it is already being observed
    // if (!element.value) {
    onMounted(() => {
      if (element.value) {
        observe(element);
      }
    });
    // }

    onUnmounted(() => {
      disconnect();
    });
  }

  // // debug is still work in progress, would be nice to provide some
  // // information about the target
  // /* istanbul ignore next */
  // const debug = () => {
  //   if (elements.value.length === 0) {
  //     __DEV__ && console.warn('[IntersectionObserver] no elements provided, did you mount the component?')
  //     return;
  //   }
  //   // TODO: add border to the elements
  // };

  return {
    supported,

    elements,
    observe,
    unobserve,
    disconnect,

    isIntersecting
  };
}
