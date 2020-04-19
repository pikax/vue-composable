import { useWebStorage, WebStorage } from "../../src";
import { nextTick } from "../utils";
import { promisedTimeout } from "../../src/utils";

describe("localStorage", () => {
  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

  const localStorageSpy = jest.spyOn(window, "localStorage", "get");
  const sessionStorageSpy = jest.spyOn(window, "sessionStorage", "get");

  beforeEach(() => {
    localStorage.clear();
    useWebStorage("localStorage").remove();
    useWebStorage("sessionStorage").remove();
    localStorageSpy.mockClear();
    sessionStorageSpy.mockClear();
    setItemSpy.mockClear();
  });

  it("should return the same object if called multiple times", () => {
    const { store: storage1 } = useWebStorage("localStorage");
    const { store: storage2 } = useWebStorage("localStorage");

    expect(storage1).toBe(storage2);

    const { store: session1 } = useWebStorage("sessionStorage");
    const { store: session2 } = useWebStorage("sessionStorage");

    expect(session1).toBe(session2);

    expect(storage1).not.toBe(session2);
  });

  it("should get localStorage", () => {
    useWebStorage("localStorage");

    expect(localStorageSpy).toBeCalledTimes(1);
  });

  it("should get sessionStorage", () => {
    useWebStorage("sessionStorage");

    expect(sessionStorageSpy).toBeCalledTimes(1);
  });

  it("should parse string", () => {
    const key = "test1";
    localStorage.setItem(key, key);
    const { store } = useWebStorage("localStorage");

    const i = store.getItem(key)!;

    expect(i.value).toBe(key);
  });

  it("should removeItem", async () => {
    const key = "test1";
    const val = "test2";
    const { store } = useWebStorage("localStorage");
    store.setItem(key, key);

    expect(localStorage.getItem(key)).toBe(key);
    store.updateItem(key, val);
    await nextTick();
    await promisedTimeout(10);
    expect(localStorage.getItem(key)).toBe(val);

    store.removeItem(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  it("should work if trying to remove not tracked item", () => {
    const key = "test1";
    const non = "test2";
    localStorage.setItem(non, non);

    const { store } = useWebStorage("localStorage");

    store.updateItem(non, key);
    // it should not update the localStorage value
    expect(localStorage.getItem(non)).toBe(non);

    store.removeItem(non);
    expect(localStorage.getItem(non)).toBeNull();
  });

  describe("sync behavior", () => {
    let storage: WebStorage = undefined as any;
    let clearSpy: jest.SpyInstance = undefined as any;
    let removeItemSpy: jest.SpyInstance = undefined as any;
    let updateItemSpy: jest.SpyInstance = undefined as any;

    beforeEach(() => {
      useWebStorage("localStorage").remove();
      storage = useWebStorage("localStorage").store;

      clearSpy = jest.spyOn(storage, "clear");
      removeItemSpy = jest.spyOn(storage, "removeItem");
      updateItemSpy = jest.spyOn(storage, "updateItem");
    });

    const dispatchStorageEvent = (
      key: string | null,
      oldValue: string,
      newValue: string | null,
      storageArea = localStorage
    ) => {
      var evt = new StorageEvent("storage", {
        key,
        oldValue,
        newValue,
        storageArea
      });

      dispatchEvent(evt);
    };

    it("should handle update item if sync", async () => {
      const k = "test";
      const n = { a: 2 };
      const o = { b: 1 };

      const item = storage.setItem(k, { a: 1 });
      // const item1 = storage.getItem(k);
      // expect(item).toMatchObject(item1);

      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(n));
      expect(updateItemSpy).not.toBeCalled();

      storage.setSync(k, true);
      // same value update
      dispatchStorageEvent(
        k,
        JSON.stringify(item.value),
        JSON.stringify(item.value)
      );
      expect(updateItemSpy).not.toBeCalled();

      // different item
      dispatchStorageEvent(k + "test", "", JSON.stringify(item.value));
      expect(updateItemSpy).not.toBeCalled();

      // different value
      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(n));
      expect(updateItemSpy).toHaveBeenCalledTimes(1);
      expect(item.value).toMatchObject(n);

      // different store event - no update
      dispatchStorageEvent(
        k,
        JSON.stringify(item.value),
        JSON.stringify(o),
        sessionStorage
      );
      expect(updateItemSpy).toHaveBeenCalledTimes(1);

      // remove sync
      storage.setSync(k, false);
      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(o));
      expect(updateItemSpy).toBeCalledTimes(1);
      expect(item.value).not.toMatchObject(o);

      // clear item - no sync
      dispatchStorageEvent(k, JSON.stringify(item.value), null);
      expect(removeItemSpy).not.toHaveBeenCalled();

      // clear item - synched
      storage.setSync(k, true);
      dispatchStorageEvent(k, JSON.stringify(item.value), null);
      expect(removeItemSpy).toHaveBeenCalledTimes(1);

      // clear all - no synched items
      dispatchStorageEvent(null, JSON.stringify(item.value), JSON.stringify(n));
      expect(clearSpy).not.toHaveBeenCalled();

      // clear all - synched
      storage.setSync(k, true);
      dispatchStorageEvent(null, JSON.stringify(item.value), JSON.stringify(n));
      expect(clearSpy).toHaveBeenCalledTimes(1);
    });

    it("should show quota errors", async () => {
      function getStorageTotalSize(upperLimit?: /*in bytes*/ number) {
        var store = localStorage,
          testkey = "$_test"; // (NOTE: Test key is part of the storage!!! It should also be an even number of characters)
        var test = function(_size: number) {
          try {
            store.removeItem(testkey);
            store.setItem(testkey, new Array(_size + 1).join("0"));
          } catch (_ex) {
            return false;
          }
          return true;
        };
        var backup: Record<string, any> = {};
        for (var i = 0, n = store.length; i < n; ++i)
          backup[store.key(i)!] = store.getItem(store.key(i)!);
        store.clear(); // (you could iterate over the items and backup first then restore later)
        var low = 0,
          high = 1,
          _upperLimit = (upperLimit || 1024 * 1024 * 1024) / 2,
          upperTest = true;
        while ((upperTest = test(high)) && high < _upperLimit) {
          low = high;
          high *= 2;
        }
        if (!upperTest) {
          var half = ~~((high - low + 1) / 2); // (~~ is a faster Math.floor())
          high -= half;
          while (half > 0)
            high += (half = ~~(half / 2)) * (test(high) ? 1 : -1);
          high = testkey.length + high;
        }
        if (high > _upperLimit) high = _upperLimit;
        store.removeItem(testkey);
        for (var p in backup) store.setItem(p, backup[p]);
        return high * 2; // (*2 because of Unicode storage)
      }
      const totalSize = getStorageTotalSize();

      const { quotaError, store } = useWebStorage("localStorage");

      expect(quotaError.value).toBe(false);

      store.setItem("x", "1");
      expect(store.getItem("x")!.value).toBe(1);
      store.setItem("test", new Array(totalSize).join("0"));

      await nextTick();

      expect(quotaError.value).toBe(true);
    });
  });
});
