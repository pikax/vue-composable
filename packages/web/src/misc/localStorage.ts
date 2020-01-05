import { Ref, ref, watch } from "@vue/runtime-core";
import { RefTyped, wrap, debounce } from "@vue-composable/core";

// used to store all the instances of weakMap
const keyedMap = new Map<string, object>();
const weakMap = new WeakMap<object, Ref<object | undefined>>();
export type LocalStorageTyped<T> = string;

export interface LocalStorageReturn<T> {
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
  let lazy = false;
  let k = keyedMap.get(key);
  const json = localStorage.getItem(key);
  const storage =
    (k && weakMap.get(k)) ||
    (!!defaultValue && wrap(defaultValue)) ||
    ref(null);

  if (json && !k) {
    try {
      storage.value = JSON.parse(json);
      lazy = false;
    } catch (e) {
      /* istanbul ignore next */
      console.warn(
        "[useLocalStorage] error parsing value from localStorage",
        key,
        e
      );
    }
  }

  // do not watch if we already created the instance
  if (!k) {
    k = {};
    keyedMap.set(key, k);
    weakMap.set(k, storage);

    watch(
      storage,
      storage => {
        if (storage === undefined) {
          localStorage.removeItem(key);
          return;
        }
        // do not overflow localStorage with updates nor keep doing stringify
        debounce(
          () => localStorage.setItem(key, JSON.stringify(storage)),
          100
        )();
      },
      {
        deep: true,
        lazy
      }
    );
  }

  const clear = () => {
    keyedMap.forEach((v) => {
      const obj = weakMap.get(v);
      /* istanbul ignore else */
      if (obj) {
        obj.value = undefined;
      }
      weakMap.delete(v);
    });

    keyedMap.clear();
  };

  const remove = () => {
    keyedMap.delete(key);
    weakMap.delete(k!);
    storage.value = undefined;
  };

  return {
    storage,
    clear,
    remove
  };
}
