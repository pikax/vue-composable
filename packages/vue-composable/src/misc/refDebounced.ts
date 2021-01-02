import { ref, Ref, customRef } from "../api";
import { debounce } from "../debounce";
import { isNumber, RefTyped } from "../utils";

export function refDebounced<T>(value: RefTyped<T>, delay: number): Ref<T>;
export function refDebounced<T>(delay: number): Ref<T | undefined>;
export function refDebounced<T>(value: T | number, delay?: number): Ref<T> {
  let [v, d] =
    arguments.length === 1 && isNumber(value) && typeof delay === "undefined"
      ? [ref(), value]
      : [ref(value), delay];
  return customRef<T>((track, trigger) => ({
    get() {
      track();
      return v.value as any;
    },
    set: debounce(val => {
      v.value = val;
      trigger();
    }, d)
  }));
}
