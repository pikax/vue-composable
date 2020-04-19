import { Ref, ref } from "../api";
import { RefTyped, NO_OP } from "../utils";
import { useWebStorage } from "./webStorage";

export type LocalStorageTyped<T extends object> = string;

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
  key: string,
  defaultValue?: RefTyped<string>,
  sync?: boolean
): LocalStorageReturn<string>;
export function useLocalStorage<T extends object = any>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>,
  sync?: boolean
): LocalStorageReturn<T>;
export function useLocalStorage(
  key: string,
  defaultValue?: RefTyped<any>,
  sync?: boolean
) {
  const { supported, store } = useWebStorage("localStorage");

  let remove = NO_OP;
  let clear = NO_OP;
  let setSync: LocalStorageReturn<any>["setSync"] = NO_OP;
  let storage = undefined;

  if (supported && store) {
    setSync = s => store.setSync(key, s);
    remove = () => store.removeItem(key);
    clear = () => store.clear();

    storage = store.getItem(key);
    if (!storage) {
      storage = store.setItem(key, defaultValue);
    }

    if (sync !== false) {
      setSync(true);
    }
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
    setSync
  };
}
