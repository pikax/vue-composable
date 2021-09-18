import { Ref, ref, watchEffect } from "../api";
import { RefTyped, NO_OP, unwrap } from "../utils";
import { useWebStorage } from "./webStorage";

export interface LocalStorageReturn<T> {
  /**
   * returns true is `localStorage` is available
   */
  supported: boolean;

  /**
   * handler with `localStorage` value
   */

  storage: Ref<T | undefined>;

  /**
   * Removes current item from the store
   */
  remove: () => void;

  /**
   * Clears all tracked `localStorage` items
   */
  clear: () => void;

  /**
   * Enable cross tab syncing
   */
  setSync: (sync: boolean) => void;
}

export function useLocalStorage<T = string>(
  key: RefTyped<string>,
  defaultValue?: RefTyped<T>,
  sync = true,
  useDebounce = true
): LocalStorageReturn<T> {
  const { supported, store } = useWebStorage("localStorage");

  let remove = NO_OP;
  let clear = NO_OP;
  let setSync: LocalStorageReturn<any>["setSync"] = NO_OP;
  let storage = ref<T>();

  if (supported && store) {
    setSync = (s) => store.setSync(unwrap(key), s);
    remove = () => store.removeItem(unwrap(key));
    clear = () => store.clear();

    storage = store.getRef<T>(key, useDebounce);
    if (storage.value === undefined) {
      store.save(unwrap(key), defaultValue);
      storage.value = unwrap(defaultValue);
    }

    watchEffect(() => {
      if (sync) {
        setSync(true);
      }
    });
  } else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn("[localStorage] is not available");
    }

    storage.value = unwrap(defaultValue);
  }

  return {
    supported,

    storage,

    clear,
    remove,
    setSync,
  };
}
