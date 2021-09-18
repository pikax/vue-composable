import { useLocalStorage, useWebStorage } from "../../src";
import { ref } from "../../src/api";
import { nextTick } from "../utils";
import { promisedTimeout } from "../../src/utils";

describe("localStorage", () => {
  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
  const consoleWarnSpy = jest.spyOn(console, "warn");

  beforeEach(() => {
    localStorage.clear();
    useWebStorage("localStorage").remove();
    setItemSpy.mockClear();
    consoleWarnSpy.mockClear();
  });

  it("should remove value from localStorage when ref is set to undefined", async () => {
    const key = "test";
    const value = "value";
    const { storage } = useLocalStorage<string | undefined>(key, value);

    await nextTick();

    expect(storage.value).toEqual(value);
    expect(localStorage.getItem(key)).toEqual(value);

    storage.value = undefined;

    await promisedTimeout(100);

    expect(storage.value).toEqual(undefined);
    expect(localStorage.getItem(key)).toEqual(null);
  });

  it("should not set value in localStorage when defaultValue is undefined", async () => {
    const key = "test";
    const { storage } = useLocalStorage(key);

    await nextTick();

    expect(storage.value).toEqual(undefined);
    expect(localStorage.getItem(key)).toEqual(null);
  });

  it("should handle ref value", async () => {
    const key = "test";
    const value = ref(5);
    const { storage } = useLocalStorage(key, value);

    await nextTick();

    expect(storage.value).toEqual(value.value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value.value));
  });

  it("should update localStorage immediately if we\re not using debounce", async () => {
    const key = "test";
    let value = 5;
    const { storage } = useLocalStorage(key, value, false, false);

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));

    storage.value = 10;

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(storage.value));
  });

  it("should store object in localStorage if default is passed", async () => {
    const obj = { a: 1 };
    const { storage } = useLocalStorage("test", obj);

    await promisedTimeout(100);

    expect(storage.value).toMatchObject(obj);
    expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify(obj));
  });

  it("should update the localStorage if value changes", async () => {
    const obj = { a: 111 };

    const { storage } = useLocalStorage("test", obj);

    expect(storage.value).toMatchObject(obj);
    expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify(obj));

    storage.value!.a = 33;
    await nextTick();

    expect(storage.value).toMatchObject({ a: 33 });
    await promisedTimeout(20);
    expect(setItemSpy).toHaveBeenLastCalledWith(
      "test",
      JSON.stringify({ a: 33 })
    );
  });

  it("should get the same object if the same key is used", () => {
    const key = "test";
    const { storage: storage1 } = useLocalStorage(key, { a: 1 });
    const { storage: storage2 } = useLocalStorage(key, { a: 1 });

    expect(storage1).toMatchObject(storage2);
  });

  it("should remove from localStorage", async () => {
    const key = "test";
    const { remove } = useLocalStorage(key, { a: 1 });

    remove();
    await nextTick();

    expect(localStorage.getItem(key)).toBeFalsy();
  });

  it("should clear all localStorage keys", async () => {
    localStorage.setItem("_other_", "secret");
    const s1 = useLocalStorage("key", { a: 1 });
    const s2 = useLocalStorage("key2", { a: 2 });

    expect(localStorage.getItem("key")).toBe(JSON.stringify(s1.storage.value));
    expect(localStorage.getItem("key2")).toBe(JSON.stringify(s2.storage.value));
    expect(localStorage.getItem("_other_")).toBe("secret");

    s1.clear();

    await nextTick();
    await promisedTimeout(200);

    expect(s1.storage.value).toBeUndefined();
    expect(s2.storage.value).toBeUndefined();
    expect(localStorage.getItem("_other_")).toBe("secret");
  });

  it("should load from localStorage", () => {
    const key = "hello";
    localStorage.setItem(key, JSON.stringify({ k: 1 }));

    const { storage } = useLocalStorage(key, { k: 10 });

    expect(storage.value).toMatchObject({ k: 1 });
  });

  it("should you try to sync", () => {
    const key = "hello";
    const { setSync } = useLocalStorage(key, { k: 10 });
    const setSyncSpy = jest.spyOn(
      useWebStorage("localStorage").store!,
      "setSync"
    );

    setSync(true);

    expect(setSyncSpy).toHaveBeenCalledWith(key, true);
  });

  it("should warn if sessionStorage is not supported", () => {
    setItemSpy.mockImplementationOnce(() => {
      throw new Error("random");
    });
    const key = "hello";
    useLocalStorage(key, { k: 10 });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[localStorage] is not available"
    );
  });

  it("should handle ref key", async () => {
    jest.useFakeTimers();
    const key = ref("hello");

    const { storage } = useLocalStorage(key, { k: 10 });

    expect(localStorage.key(0)).toBe(key.value);
    expect(storage.value).toMatchObject({ k: 10 });

    key.value = "hey";
    jest.runAllTimers();

    // key not created yet
    // expect(localStorage.length).toBe(1);
    // key doesn't exist so it's undefined
    expect(storage.value).toBeUndefined();
    jest.runAllTimers();

    storage.value = { k: 0 };
    jest.advanceTimersByTime(20);

    expect(localStorage.key(1)).toBe(key.value);
    expect(localStorage.getItem(key.value)).toBe(JSON.stringify(storage.value));

    key.value = "hello";
    // should rollback to prev value
    expect(storage.value).toMatchObject({ k: 10 });
  });
});
