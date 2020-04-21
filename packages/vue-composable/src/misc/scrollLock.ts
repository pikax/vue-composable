import {
  ref,
  watch,
  onMounted,
  onActivated,
  onDeactivated,
  onUnmounted,
  unref
} from "../api";
import { RefTyped, isString, isArray, wrap } from "../utils";
import { Ref } from "@vue/runtime-core";

const CLASS = "no-scroll";

interface LockScrollOptions {
  lockedClass: string;
  immediate: boolean;
  onChange(el: Element, lock: boolean): void;
}

export function useLockScroll(elements: RefTyped<Element[]>);
export function useLockScroll(element: RefTyped<Element>);
export function useLockScroll(selector: string);
export function useLockScroll(
  selectorElements: RefTyped<Element | Element[]> | string,
  classOptions: string | Partial<LockScrollOptions>
) {
  const elements = isString(selectorElements)
    ? ref(Array.from(document.querySelectorAll(selectorElements)))
    : isArray(unref(selectorElements))
    ? wrap(selectorElements as Element[])
    : wrap([selectorElements as Element]);

  const options = isString(classOptions)
    ? { lockedClass: classOptions }
    : classOptions;

  const locked = ref(false);

  watch([locked, elements] as [Ref<boolean>, Ref<Element[]>], ([l, els]) => {
    for (const el of els) {
      if (options.lockedClass) {
        el.classList.toggle(options.lockedClass, l);
      }
      if (options.onChange) {
        options.onChange(el, l);
      }
    }
  });

  if (options.immediate) {
    onMounted(() => {
      locked.value = true;
    });
  }
}

export function useLockScrollBak(
  selector = "body, .auto-lock-scroll",
  auto = true
) {
  const locked = ref(false);

  function update() {
    const els = document.querySelectorAll(selector);
    els.forEach(el => {
      if (locked.value) {
        el.classList.add(CLASS);
      } else {
        el.classList.remove(CLASS);
      }
    });
  }

  watch(locked, () => update());

  function lock() {
    locked.value = true;
  }

  function unlock() {
    locked.value = false;
  }

  if (auto) {
    onMounted(lock);
    onActivated(lock);
    onDeactivated(unlock);
    onUnmounted(() => {
      unlock();
      // Need to manually update as the instance is being destroyed
      // (no more reactivity updates)
      update();
    });
  }

  return {
    locked,
    lock,
    unlock
  };
}
