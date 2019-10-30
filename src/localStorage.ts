import { Ref, ref, watch } from "@vue/composition-api";
import { RefTyped, unwrap, wrap } from "./utils";
import { debounce } from "./debounce";

// used to store all the instances of weakMap
const weakMap = new WeakMap<String, Ref<object | undefined>>();
export type LocalStorageTyped<T> = string;

export interface LocalStorageReturn<T> {
  storage: Ref<T>;

  /**
   * Removes current item from the store
   */
  remove: () => void;

  /**
   * Clears all tracked localStorage items
   */
  clear: () => void;
}

// export function useLocalStorage<T = any>(): LocalStorageReturn<T>;
export function useLocalStorage<T = any>(
  key: LocalStorageTyped<T> | string,
  defaultValue?: RefTyped<T>
): LocalStorageReturn<T>;
export function useLocalStorage(key?: any, defaultValue?: any) {
  let lazy = false;
  const json = localStorage.getItem(key);
  const storage = (!!defaultValue && wrap(defaultValue)) || ref(null);
  if (json) {
    try {
      storage.value = JSON.parse(json);
      lazy = false;
    } catch (e) {
      console.warn(
        "[useLocalStorage] error parsing value from localStorage",
        key,
        e
      );
    }
  }

  weakMap.set(key, storage);

  const clear = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const obj = weakMap.get(localStorage.key(i) as any);
      if (!!obj) {
        obj.value = undefined;
      }
    }
  };

  const remove = ()=> {
      storage.value = undefined;
  }

  watch(
    storage,
    storage => {
      if (storage === undefined) {
        localStorage.removeItem(key);
        return;
      }
      // do not overflow localStorage with updates nor keep doing stringify
      debounce(() => localStorage.setItem(key, JSON.stringify(storage)), 300);
    },
    {
      deep: true,
      lazy
    }
  );

  return {
    storage,
    clear,
    remove
  };
}
