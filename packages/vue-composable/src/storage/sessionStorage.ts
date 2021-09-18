import { RefTyped, NO_OP, unwrap } from "../utils";
import { ref } from "../api";
import { useWebStorage } from "./webStorage";

export function useSessionStorage<T = string>(
  key: RefTyped<string>,
  defaultValue?: RefTyped<T>,
  useDebounce = true
) {
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
