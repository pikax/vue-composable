import { Ref, customRef } from "../api";
import { debounce } from "../debounce";
import { isNumber } from "../utils";

export function useRefDebounced<T>(delay: number): Ref<T | undefined>;
export function useRefDebounced<T>(value: T, delay: number): Ref<T | undefined>;
export function useRefDebounced<T>(value: T | number, delay?: number): Ref<T> {
  let [v, d] =
    arguments.length === 1 && isNumber(value)
      ? [undefined, value]
      : [value, delay];
  return customRef<T>((track, trigger) => ({
    get() {
      track();
      return v as any;
    },
    set: debounce((val) => {
      v = val;
      trigger();
    }, d),
  }));
}
