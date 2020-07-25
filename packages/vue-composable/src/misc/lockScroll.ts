import {
  ref,
  Ref,
  watch,
  onMounted,
  onActivated,
  onDeactivated,
  unref,
  onBeforeUnmount,
  computed
} from "../api";
import { RefTyped, isString, isArray, wrap, unwrap } from "../utils";

export const SCROLL_LOCK_CLASS = "no-scroll";

export interface ScrollLockOptions {
  lockedClass?: string;
  auto?: boolean;
  onChange?(el: Element, lock: boolean): void;
}

export interface ScrollLockReturn {
  locked: Ref<boolean>;

  lock(): void;
  unlock(): void;
  remove: () => void;
}

export function useLockScroll(
  elements: RefTyped<(Ref<Element | undefined | null> | Element)[]>,
  options?: ScrollLockOptions
): ScrollLockReturn;
export function useLockScroll(
  elements: RefTyped<(Ref<Element | undefined | null> | Element)[]>,
  lockedClass: string
): ScrollLockReturn;

export function useLockScroll(
  elements: RefTyped<(Ref<Element | undefined> | Element)[] | undefined>,
  options?: ScrollLockOptions
): ScrollLockReturn;
export function useLockScroll(
  elements: RefTyped<(Ref<Element | undefined> | Element)[] | undefined>,
  lockedClass: string
): ScrollLockReturn;

export function useLockScroll(
  element: RefTyped<Element | undefined>,
  options?: ScrollLockOptions
): ScrollLockReturn;

export function useLockScroll(
  element: RefTyped<Element | undefined>,
  lockedClass: string
): ScrollLockReturn;

export function useLockScroll(
  selector: string,
  options?: ScrollLockOptions
): ScrollLockReturn;
export function useLockScroll(
  selector: string,
  lockedClass: string
): ScrollLockReturn;

export function useLockScroll(
  selectorElements:
    | RefTyped<Element | undefined>
    | RefTyped<(Ref<Element | undefined | null> | Element)[] | undefined>
    | string,
  classOptions?: string | Partial<ScrollLockOptions>
): ScrollLockReturn {
  const elements = (isString(selectorElements)
    ? ref([]) // it will be resolved when mounted
    : isArray(unref(selectorElements))
    ? wrap(selectorElements)
    : wrap([selectorElements])) as Ref<RefTyped<Element>[]>;

  const options = isString(classOptions)
    ? { lockedClass: classOptions, auto: true }
    : classOptions || { auto: true };
  if (!options.lockedClass) {
    options.lockedClass = SCROLL_LOCK_CLASS;
  }

  const locked = ref(false);

  // NOTE issues on Vue3 because of the `watch.deep`, we wrap all elements
  const tracked = computed(() => elements.value.map(x => ref(x))) as Readonly<
    Ref<Ref<Element>[]>
  >;

  const remove = watch(
    [locked, tracked] as const,
    ([l, els], [oldLocked, oldElements]) => {
      for (const refEl of els) {
        const el = unwrap(refEl);
        // istanbul ignore else
        if (options.lockedClass) {
          // istanbul ignore else
          if (!el) {
            // istanbul ignore else
            if (__DEV__) {
              console.warn("[useLockScroll] element is undefined");
            }
            return;
          }
          el.classList.toggle(options.lockedClass, l);
        }
        if (options.onChange) {
          if (oldLocked !== l || !oldElements.find(x => unwrap(x) === el))
            options.onChange(el, l);
        }
      }
    },
    { flush: "sync", deep: false }
  );

  const lock = () => (locked.value = true);
  const unlock = () => (locked.value = false);

  if (isString(selectorElements)) {
    onMounted(
      () =>
        (elements.value = Array.from(
          document.querySelectorAll(selectorElements)
        ))
    );
  }

  if (options.auto !== false) {
    onMounted(lock);
    onActivated(lock);
    onDeactivated(unlock);
    onBeforeUnmount(unlock);
  }

  return {
    locked,

    lock,
    unlock,
    remove
  };
}
