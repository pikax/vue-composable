import {
  ref,
  Ref,
  watch,
  onMounted,
  onActivated,
  onDeactivated,
  onUnmounted,
  unref
} from "../api";
import { RefTyped, isString, isArray, wrap, unwrap } from "../utils";

const CLASS = "no-scroll";

interface ScrollLockOptions {
  lockedClass?: string;
  auto?: boolean;
  onChange?(el: Element, lock: boolean): void;
}

interface ScrollLockReturn {
  locked: Ref<boolean>;
  remove: () => void;
}

export function useLockScroll(
  elements: RefTyped<Element[]>,
  options?: ScrollLockOptions
): ScrollLockReturn;
export function useLockScroll(
  elements: RefTyped<Element[]>,
  lockedClass: string
): ScrollLockReturn;

export function useLockScroll(
  element: RefTyped<Element>,
  options?: ScrollLockOptions
): ScrollLockReturn;
export function useLockScroll(
  element: RefTyped<Element>,
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
  selectorElements: RefTyped<Element> | RefTyped<Element[]> | string,
  classOptions?: string | Partial<ScrollLockOptions>
): ScrollLockReturn {
  const elements = isString(selectorElements)
    ? ref(Array.from(document.querySelectorAll(selectorElements)))
    : isArray(unref(selectorElements))
    ? wrap(selectorElements as Element[])
    : wrap([selectorElements as Element]);

  const options = isString(classOptions)
    ? { lockedClass: classOptions, auto: true }
    : classOptions || { auto: true };
  if (!options.lockedClass) {
    options.lockedClass = CLASS;
  }

  const locked = ref(false);

  const remove = watch(
    [locked, elements] as [Ref<boolean>, Ref<Element[]>],
    ([l, els]) => {
      for (const el of els.map(unwrap)) {
        if (options.lockedClass) {
          el.classList.toggle(options.lockedClass, l);
        }
        if (options.onChange) {
          options.onChange(el, l);
        }
      }
    },
    { flush: "sync", deep: true }
  );
  const lock = () => (locked.value = true);
  const unlock = () => (locked.value = false);

  if (options.auto !== false) {
    onMounted(lock);
    onActivated(lock);
    onDeactivated(unlock);
    onUnmounted(unlock);
  }

  return {
    locked,
    remove
  };
}
