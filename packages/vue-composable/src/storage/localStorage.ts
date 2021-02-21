import { Ref, ref, watchEffect } from "../api";
import { RefTyped, NO_OP, unwrap } from "../utils";
import { useWebStorage } from "./webStorage";

export interface LocalStorageReturn<T> {
  supported: boolean;

  storage: Ref<T>;

  /**
   * @description Removes current item from the store
   */
  remove: () => void;

  /**
   * @description Clears all tracked localStorage items
   */
  clear: () => void;

  /**
   * @description Enable cross tab syncing
   */
  setSync: (sync: boolean) => void;
}

export function useLocalStorage(
  key: RefTyped<string>,
  defaultValue?: RefTyped<string>,
  sync?: boolean
): LocalStorageReturn<string>;
export function useLocalStorage<T>(
  key: RefTyped<string>,
  defaultValue?: RefTyped<T>,
  sync?: boolean
): LocalStorageReturn<T>;
export function useLocalStorage(
  key: RefTyped<string>,
  defaultValue?: RefTyped<any>,
  sync?: boolean
) {
  const { supported, store } = useWebStorage("localStorage");

  let remove = NO_OP;
  let clear = NO_OP;
  let setSync: LocalStorageReturn<any>["setSync"] = NO_OP;
  let storage = undefined;

  if (supported && store) {
    setSync = (s) => store.setSync(unwrap(key), s);
    remove = () => store.removeItem(unwrap(key));
    clear = () => store.clear();

    storage = store.getRef(key);
    if (storage.value == null) {
      store.save(unwrap(key), defaultValue);
      storage.value = defaultValue;
    }

    watchEffect(() => {
      if (sync !== false) {
        setSync(true);
      }
    });
  } else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn("[localStorage] is not available");
    }

    storage = ref(defaultValue);
  }

  return {
    supported,

    storage,

    clear,
    remove,
    setSync,
  };
}
