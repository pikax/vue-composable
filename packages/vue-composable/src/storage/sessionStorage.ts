import { RefTyped, NO_OP, FALSE_OP, unwrap } from "../utils";
import { ref } from "../api";
import { useWebStorage } from "./webStorage";
import { LocalStorageReturn } from "./localStorage";

export function useSessionStorage(
  key: RefTyped<string>,
  defaultValue?: RefTyped<string>,
  sync?: boolean
): LocalStorageReturn<string>;
export function useSessionStorage<T>(
  key: RefTyped<string>,
  defaultValue?: RefTyped<T>,
  sync?: boolean
): LocalStorageReturn<T>;
export function useSessionStorage(
  key: RefTyped<string>,
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
    remove = () => store.removeItem(unwrap(key));
    clear = () => store.clear();

    storage = store.getRef(key);
    if (storage.value == null) {
      store.save(unwrap(key), defaultValue);
      storage.value = defaultValue;
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
    setSync,
  };
}
