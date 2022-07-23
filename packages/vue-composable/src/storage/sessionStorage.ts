import { RefTyped, NO_OP, unwrap } from "../utils";
import { ref, Ref } from "../api";
import { useWebStorage } from "./webStorage";

export interface sessionStorageReturn<T> {
  /**
   * returns true is `sessionStorage` is available
   */
  supported: boolean;

  /**
   * handler with `sessionStorage` value
   */

  storage: Ref<T | undefined>;

  /**
   * Removes current item from the store
   */
  remove: () => void;

  /**
   * Clears all tracked `sessionStorage` items
   */
  clear: () => void;
}

export function useSessionStorage<T = string>(
  key: RefTyped<string>,
  defaultValue?: RefTyped<T>,
  useDebounce = true
): sessionStorageReturn<T> {
  const { supported, store } = useWebStorage("sessionStorage");

  let remove = NO_OP;
  let clear = NO_OP;
  let storage = ref<T>();

  if (supported && store) {
    remove = () => store.removeItem(unwrap(key));
    clear = () => store.clear();

    storage = store.getRef<T>(key, useDebounce);
    if (storage.value === undefined) {
      store.save(unwrap(key), defaultValue);
      storage.value = unwrap(defaultValue);
    }
  } else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn("[sessionStorage] is not available");
    }

    storage.value = unwrap(defaultValue);
  }

  return {
    supported,

    storage,
    clear,
    remove,
  };
}
