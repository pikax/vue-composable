import { RefTyped, NO_OP, FALSE_OP } from "@vue-composable/core";
import { ref } from "@vue/composition-api";
import { useWebStorage } from "./webStorage";
import { LocalStorageTyped, LocalStorageReturn } from "./localStorage";

export function useSessionStorage(
  key: string,
  defaultValue?: RefTyped<string>,
  sync?: boolean
): LocalStorageReturn<string>;
export function useSessionStorage<T extends object = object>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>,
  sync?: boolean
): LocalStorageReturn<T>;
export function useSessionStorage(
  key: string,
  defaultValue?: any,
  sync?: boolean
) {
  const { supported, store } = useWebStorage("sessionStorage");

  let remove = NO_OP;
  let clear = NO_OP;
  let setSync: LocalStorageReturn<any>["setSync"] = FALSE_OP;
  let storage = undefined;

  if (supported && store) {
    /* istanbul ignore else */
    if (__DEV__) {
      setSync = () =>
        console.warn("sync is not supported, please `useLocalStorage` instead");
      if (sync) {
        setSync(sync);
      }
    }
    remove = () => store.removeItem(key);
    clear = () => store.clear();

    storage = store.getItem(key);
    if (!storage) {
      storage = store.setItem(key, defaultValue);
    }
  } else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn("[sessionStorage] is not available");
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
