import { RefTyped, NO_OP, FALSE_OP } from "@vue-composable/core";
import { useWebStorage } from './webStorage'
import { LocalStorageTyped, LocalStorageReturn } from "./localStorage";

export function useSessionStorage<T extends object = object>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>
): LocalStorageReturn<T>;
export function useSessionStorage(key: string, defaultValue?: any) {
  const { supported, store } = useWebStorage('sessionStorage');

  let remove = NO_OP;
  let clear = NO_OP;
  let setSync: LocalStorageReturn<any>['setSync'] = FALSE_OP;
  let storage = undefined;

  if (supported && store) {
    /* istanbul ignore else */
    if (__DEV__) {
      setSync = () => console.warn('sync is not supported, please `useLocalStorage` instead');
    }
    remove = () => store.removeItem(key);
    clear = () => store.clear();

    storage = store.getItem(key);
    if (!storage) {
      storage = store.setItem(key, defaultValue);
    }
  }
  else {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn('[sessionStorage] is not available');
    }
  }

  return {
    supported,

    storage,
    clear,
    remove,
    setSync
  };
}
