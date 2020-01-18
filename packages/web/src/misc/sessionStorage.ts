import { RefTyped, NO_OP } from "@vue-composable/core";
import { useWebStorage } from './webStorage'
import { LocalStorageTyped, LocalStorageReturn } from "./localStorage";

export function useSessionStorage<T = any>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>
): LocalStorageReturn<T>;
export function useSessionStorage(key: string, defaultValue?: any) {
  const { supported, store } = useWebStorage('sessionStorage');

  let remove = NO_OP;
  let clear = NO_OP;
  let storage = undefined;

  if (supported && store) {
    remove = () => store.removeItem(key);
    clear = () => store.clear();

    storage = store.getItem(key);
    if (!storage) {
      storage = store.setItem(key, defaultValue);
    }
  } else if (__DEV__) {
    console.warn('[sessionStorage] is not available');
  }

  return {
    supported,

    storage,
    clear,
    remove
  };
}
