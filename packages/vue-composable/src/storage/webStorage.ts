import { Ref, ref, watch } from "../api";
import { wrap, isString, isClient, RefTyped, unwrap } from "../utils";
import { debounce } from "../debounce";

type WebStorageType = "localStorage" | "sessionStorage";
const STORAGE_TEST_KEY = __DEV__ ? "__storage_test__" : ":$";

/* istanbul ignore next */
function isQuotaExceededError(e: any, storage?: Storage) {
  return (
    e instanceof DOMException &&
    // everything except Firefox
    (e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === "QuotaExceededError" ||
      // Firefox
      e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
    // acknowledge QuotaExceededError only if there's something already stored
    ((storage && storage.length !== 0) || false)
  );
}

// based on https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
export function storageAvailable(storage?: Storage) {
  try {
    if (!storage) {
      return false;
    }
    const x = STORAGE_TEST_KEY;
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return isQuotaExceededError(e, storage);
  }
}

export interface StorageSerializer<T = any> {
  stringify(item: T): string;
  parse(data: string): T;
}

export interface WebStorage {
  $refMap: Map<string, Ref<any>>;
  $watchHandlers: Map<string, Function>;
  $syncKeys: Record<string, boolean>;
  $quotaError: Ref<boolean>;

  updateItem(key: string, value: string): void;

  setSync(key: string, sync: boolean): void;

  save(key: string, value: any): void;

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
   * Returns the current associated value with the given key, similar to `getItem` but if the key changes it will update accordingly
   */
  getRef<T = any>(key: RefTyped<string>, useDebounce?: boolean): Ref<T>;

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

  // [name: string]: any;
}

function safeParse(serializer: StorageSerializer, value: string) {
  try {
    return serializer.parse(value);
  } catch {
    return value;
  }
}

let storageMap: Map<WebStorageType, WebStorage> | undefined = undefined;

export function useWebStorage(
  type: WebStorageType,
  serializer: StorageSerializer = JSON,
  ms = 10
) {
  const storage = isClient ? window[type] : undefined;
  const supported = storageAvailable(storage);

  const remove = () => storageMap!.delete(type);

  if (!storageMap) {
    storageMap = new Map();

    if (isClient) {
      window.addEventListener("storage", (e) => {
        if (e.newValue === e.oldValue) {
          return;
        }
        let webStore = storageMap!.get("localStorage");
        if (e.storageArea === window.localStorage) {
          webStore = storageMap!.get("localStorage");
        } else {
          webStore = storageMap!.get("sessionStorage");
        }
        if (webStore && Object.keys(webStore.$syncKeys).length > 0) {
          if (e.key === null) {
            webStore.clear();
          } else if (webStore.$syncKeys[e.key]) {
            if (e.newValue === null) {
              webStore.removeItem(e.key);
            } else {
              webStore.updateItem(e.key, e.newValue!);
            }
          }
        }
      });
    }
  }

  let store: WebStorage = storageMap.get(type) as any;
  let quotaError: Ref<boolean>;
  if (supported && storage) {
    if (!store) {
      quotaError = ref(false);

      store = {
        $refMap: new Map<string, Ref<any>>(),
        $watchHandlers: new Map<string, Function>(),
        $syncKeys: {} as Record<string, boolean>,
        $quotaError: quotaError,

        key: storage.key,
        length: storage.length,

        setSync(key, sync) {
          if (sync) {
            this.$syncKeys[key] = true;
          } else {
            delete this.$syncKeys[key];
          }
        },

        save(key: string, value: any) {
          value = unwrap(value);

          if (value === undefined) {
            storage.removeItem(key);
            return;
          }

          try {
            const oldValue = storage.getItem(key);
            const data = isString(value) ? value : serializer.stringify(value);

            if (oldValue !== data && isClient) {
              storage.setItem(key, data);

              if (store.$syncKeys[key]) {
                window.dispatchEvent(
                  new StorageEvent(key, {
                    newValue: data,
                    oldValue,
                    storageArea: storage,
                  })
                );
              }
            }
          } catch (e) {
            quotaError.value = isQuotaExceededError(e, storage);
          }
        },

        clear() {
          this.$refMap.forEach((_, k) => this.removeItem(k));
        },
        removeItem(k) {
          const item = this.$refMap.get(k);
          // remove the object value if item deleted
          if (item) {
            item.value = undefined;
          }
          // clear the watch
          const stop = this.$watchHandlers.get(k);
          if (stop) {
            stop();
          }

          delete this.$syncKeys[k];
          this.$refMap.delete(k);
          storage.removeItem(k);
        },
        getItem(k) {
          /**
           * NOTE seems if the element who created the `ref` gets destroyed all the watchers assigned will be also disposed
           * making returning of the cached `ref` invalid
           */
          const data = storage.getItem(k);
          if (!data) {
            return null;
          }
          return this.setItem(k, safeParse(serializer, data));
        },

        getRef<T>(k: RefTyped<string>, useDebounce = true) {
          const item = ref<T>();

          let keyWatch = watch(
            wrap(k),
            (k) => {
              const data = storage.getItem(k);
              if (!data) {
                return (item.value = undefined);
              }
              item.value = safeParse(serializer, data);
            },
            {
              immediate: true,
              flush: "sync",
            }
          );

          const updateFn = (i: T | undefined): void => {
            this.save(unwrap(k), i);
          };

          let valueWatch = watch(
            item,
            useDebounce ? debounce(updateFn, ms) : updateFn,
            { deep: true, flush: "sync" }
          );

          // used to reference to this ref, since `k` change change we need to generate one
          const fakeKey = Math.random().toString();
          this.$watchHandlers.set(fakeKey, () => {
            keyWatch();
            valueWatch();
          });
          this.$refMap.set(fakeKey, item);

          return item;
        },

        setItem(k, v) {
          const reference = wrap(v);
          this.$refMap.set(k, reference);

          this.save(k, v);

          const stop = watch(
            reference,
            debounce((r) => {
              this.save(k, r);
            }, ms),
            {
              immediate: false,
              deep: true,
            }
          );

          this.$watchHandlers.set(k, stop);

          return reference;
        },
        updateItem(k, data) {
          let r = this.$refMap.get(k);
          if (r) {
            r.value = safeParse(serializer, data);
          }
        },
      } as WebStorage;

      storageMap.set(type, store);
    } else {
      quotaError = store.$quotaError;
    }
  } else {
    quotaError = ref(false);
    store = {} as any;
  }

  return {
    supported,

    quotaError,
    store,
    remove,
  };
}
