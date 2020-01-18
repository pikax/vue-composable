import { Ref, ref, watch } from "@vue/composition-api";
import { wrap } from "@vue-composable/core";

type WebStorageType = 'localStorage' | 'sessionStorage';

function isQuotaExceededError(e: any, storage: Storage) {
  return e instanceof DOMException && (
    // everything except Firefox
    e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' ||
    // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    (storage && storage.length !== 0)
}

// based on https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
export function storageAvailable(storage: Storage) {
  try {
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return isQuotaExceededError(e, storage);
  }
}


export interface StorageSerializer<T = any> {
  stringify(item: T): string;
  parse(data: string): T;
}

interface WebStorage {

  /**
     * Returns the number of key/value pairs currently present in the list associated with the object.
     */
  readonly length: number;
  /**
   * Empties the list associated with the object of all key/value pairs, if there are any.
   */
  clear(): void;
  /**
   * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
   */
  getItem<T = any>(key: string): Ref<T> | null;

  /**
   * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
   */
  key(index: number): string | null;

  /**
   * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
   */
  removeItem(key: string): void;
  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   * 
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
   */
  setItem<T>(key: string, value: T): Ref<T>;

  [name: string]: any;
}


let storageMap: Map<WebStorageType, WebStorage> | undefined = undefined;

export function useWebStorage(type: WebStorageType, serializer: StorageSerializer = JSON) {
  const storage = window[type];
  const supported = storageAvailable(storage);
  const quotaError = ref(false);

  const remove = () => storageMap!.delete(type);

  if (!storageMap) {
    storageMap = new Map();
  }

  let store: WebStorage | undefined = storageMap.get(type);
  if (!store) {
    const refMap = new Map<string, Ref<any>>();
    const watchHandlers = new Map<string, Function>();
    store = {
      refMap,
      watchHandlers,

      key: storage.key,
      length: storage.length,

      clear() {
        watchHandlers.forEach(x => x());
        refMap.forEach(x => x.value = undefined);
      },
      removeItem(k) {
        const item = refMap.get(k);
        // remove the object value if item deleted
        if (item) {
          item.value = undefined;
        }
        // clear the watch
        const stop = watchHandlers.get(k);
        if (stop) {
          stop();
        }

        refMap.delete(k);
        localStorage.removeItem(k);
      },
      getItem(k) {
        let r = refMap.get(k);
        if (r) {
          return r;
        }
        const data = storage.getItem(k);
        if (!data) {
          return null
        }
        return this.setItem(k, serializer.parse(data));
      },
      setItem(k, v) {
        const reference = wrap(v);
        refMap.set(k, reference);

        const save = (key: string, value: any) => {
          try {
            const data = serializer.stringify(value);
            storage.setItem(key, data);
          } catch (e) {
            quotaError.value = isQuotaExceededError(e, storage);
          }
        }

        save(k, v);

        const stop = watch(reference, (r) => {
          save(k, r);
        }, {
          lazy: true,
          deep: true
        })

        watchHandlers.set(k, stop);

        return reference;
      }
    }

    storageMap.set(type, store);
  }

  return {
    supported,

    quotaError,
    store,
    remove
  }
}
