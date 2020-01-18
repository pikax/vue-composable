import { Ref } from "@vue/composition-api";
import { RefTyped, NO_OP } from "@vue-composable/core";
import { useWebStorage } from './webStorage'

export type LocalStorageTyped<T> = string;

export interface LocalStorageReturn<T> {
  supported: boolean,

  storage: Ref<T>;

  /**
   * @description Removes current item from the store
   */
  remove: () => void;

  /**
   * @description Clears all tracked localStorage items
   */
  clear: () => void;
}

export function useLocalStorage<T = any>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>
): LocalStorageReturn<T>;
export function useLocalStorage(key: string, defaultValue?: any) {
  const { supported, store } = useWebStorage('localStorage');

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
    console.warn('[localStorage] is not available');
  }

  return {
    supported,

    storage,
    clear,
    remove
  };
}
