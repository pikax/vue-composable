import { useWebStorage, WebStorage } from "../../src";
import { nextTick } from "../utils";

describe("localStorage", () => {
  const localStorageSpy = jest.spyOn(window, 'localStorage', 'get');
  const sessionStorageSpy = jest.spyOn(window, 'sessionStorage', 'get');

  beforeEach(() => {
    localStorage.clear();
    useWebStorage('localStorage').remove();
    useWebStorage('sessionStorage').remove();
    localStorageSpy.mockClear();
    sessionStorageSpy.mockClear();
  })

  it('should return the same object if called multiple times', () => {
    const { store: storage1 } = useWebStorage('localStorage');
    const { store: storage2 } = useWebStorage('localStorage');

    expect(storage1).toBe(storage2);

    const { store: session1 } = useWebStorage('sessionStorage');
    const { store: session2 } = useWebStorage('sessionStorage');

    expect(session1).toBe(session2);

    expect(storage1).not.toBe(session2);
  })


  it('should get localStorage', () => {
    useWebStorage('localStorage');

    expect(localStorageSpy).toBeCalledTimes(1);
  })

  it('should get sessionStorage', () => {
    useWebStorage('sessionStorage');

    expect(sessionStorageSpy).toBeCalledTimes(1);
  })


  describe('sync behavior', () => {
    let storage: WebStorage = undefined as any;
    let clearSpy: jest.SpyInstance = undefined as any;
    let removeItemSpy: jest.SpyInstance = undefined as any;
    let updateItemSpy: jest.SpyInstance = undefined as any;

    beforeEach(() => {
      useWebStorage('localStorage').remove();
      storage = useWebStorage('localStorage').store;

      clearSpy = jest.spyOn(storage, 'clear');
      removeItemSpy = jest.spyOn(storage, 'removeItem');
      updateItemSpy = jest.spyOn(storage, 'updateItem');
    })

    const dispatchStorageEvent = (key: string | null, oldValue: string, newValue: string | null, storageArea = localStorage) => {
      var evt = new StorageEvent('storage', {
        key,
        oldValue,
        newValue,
        storageArea
      });

      dispatchEvent(evt);
    }

    it('should handle update item if sync', async () => {
      const k = 'test';
      const n = { a: 2 };
      const o = { b: 1 };

      const item = storage.setItem(k, { a: 1 });
      const item1 = storage.getItem(k);
      expect(item).toBe(item1);

      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(n));
      expect(updateItemSpy).not.toBeCalled();

      storage.setSync(k, true);
      // same value update
      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(item.value));
      expect(updateItemSpy).not.toBeCalled();


      // different value
      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(n));
      expect(updateItemSpy).toHaveBeenCalledTimes(1);
      expect(item.value).toMatchObject(n);

      // different store event - no update
      dispatchStorageEvent(k, JSON.stringify(item.value), JSON.stringify(o), sessionStorage);
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
    })

    // TODO test quota exceeded
    it('should show quota errors', async () => {

      function getStorageTotalSize(upperLimit/*in bytes*/?: number) {
        var store = localStorage, testkey = "$_test"; // (NOTE: Test key is part of the storage!!! It should also be an even number of characters)
        var test = function (_size: number) { try { store.removeItem(testkey); store.setItem(testkey, new Array(_size + 1).join('0')); } catch (_ex) { return false; } return true; }
        var backup: Record<string, any> = {};
        for (var i = 0, n = store.length; i < n; ++i) backup[store.key(i)!] = store.getItem(store.key(i)!);
        store.clear(); // (you could iterate over the items and backup first then restore later)
        var low = 0, high = 1, _upperLimit = (upperLimit || 1024 * 1024 * 1024) / 2, upperTest = true;
        while ((upperTest = test(high)) && high < _upperLimit) { low = high; high *= 2; }
        if (!upperTest) {
          var half = ~~((high - low + 1) / 2); // (~~ is a faster Math.floor())
          high -= half;
          while (half > 0) high += (half = ~~(half / 2)) * (test(high) ? 1 : -1);
          high = testkey.length + high;
        }
        if (high > _upperLimit) high = _upperLimit;
        store.removeItem(testkey);
        for (var p in backup) store.setItem(p, backup[p]);
        return high * 2; // (*2 because of Unicode storage)
      }
      const totalSize = getStorageTotalSize();

      const { quotaError, store } = useWebStorage('localStorage')

      expect(quotaError.value).toBe(false);

      store.setItem('x', '1');
      expect(store.getItem('x')!.value).toBe('1');
      store.setItem('test', new Array(totalSize).join("0"));

      await nextTick();

      expect(quotaError.value).toBe(true);

    })
  })


  // it("should store object in localStorage if default is passed", async () => {
  //   const obj = { a: 1 };
  //   const { storage } = useWebStorage("test", obj);

  //   await promisedTimeout(100);

  //   expect(storage.value).toMatchObject(obj);
  //   expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify(obj));
  // });

  // it("should update the localStorage if value changes", async () => {
  //   const obj = { a: 111 };

  //   const { storage } = useLocalStorage("test", obj);

  //   expect(storage.value).toMatchObject(obj);
  //   expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify(obj));

  //   storage.value.a = 33;
  //   await nextTick();

  //   expect(storage.value).toMatchObject({ a: 33 });
  //   await promisedTimeout(20);
  //   expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify({ a: 33 }));
  // });

  // it("should get the same object if the same key is used", () => {
  //   const key = "test";
  //   const { storage: storage1 } = useLocalStorage(key, { a: 1 });
  //   const { storage: storage2 } = useLocalStorage(key, { a: 1 });

  //   expect(storage1).toBe(storage2);
  // });

  // it("should remove from localstorage", async () => {
  //   const key = "test";
  //   const { remove } = useLocalStorage(key, { a: 1 });

  //   remove();
  //   await nextTick();

  //   expect(localStorage.getItem(key)).toBeFalsy();
  // });

  // it("should clear all localStorage keys", async () => {
  //   localStorage.setItem("_other_", "secret");
  //   const s1 = useLocalStorage("key", { a: 1 });
  //   const s2 = useLocalStorage("key2", { a: 2 });

  //   expect(localStorage.getItem('key')).toBe(JSON.stringify(s1.storage.value));
  //   expect(localStorage.getItem('key2')).toBe(JSON.stringify(s2.storage.value));
  //   expect(localStorage.getItem('_other_')).toBe("secret");

  //   s1.clear();

  //   await nextTick();
  //   await promisedTimeout(200);

  //   expect(s1.storage.value).toBeUndefined();
  //   expect(s2.storage.value).toBeUndefined();
  //   expect(localStorage.getItem('_other_')).toBe("secret");
  // });


  // it("should load from localStorage", () => {
  //   const key = "hello";
  //   localStorage.setItem(key, JSON.stringify({ k: 1 }));

  //   const { storage } = useLocalStorage(key, { k: 10 });

  //   expect(storage.value).toMatchObject({ k: 1 });
  // });
});
