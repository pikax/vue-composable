import { useSessionStorage, useWebStorage } from "../../src";
import { ref } from "../../src/api";
import { nextTick } from "../utils";
import { promisedTimeout } from "../../src/utils";

describe("sessionStorage", () => {
  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
  const consoleWarnSpy = jest.spyOn(console, "warn");

  beforeEach(() => {
    sessionStorage.clear();
    useWebStorage("sessionStorage").remove();
    setItemSpy.mockClear();
    consoleWarnSpy.mockClear();
  });

  it("should remove value from sessionStorage when ref is set to undefined", async () => {
    const key = "test";
    const value = "value";
    const { storage } = useSessionStorage<string | undefined>(key, value);

    expect(storage.value).toEqual(value);
    expect(sessionStorage.getItem(key)).toEqual(value);

    storage.value = undefined;

    await promisedTimeout(100);

    expect(storage.value).toEqual(undefined);
    expect(sessionStorage.getItem(key)).toEqual(null);
  });

  it("should not set value in sessionStorage when defaultValue is undefined", async () => {
    const key = "test";
    const { storage } = useSessionStorage(key);

    await nextTick();

    expect(storage.value).toEqual(undefined);
    expect(sessionStorage.getItem(key)).toEqual(null);
  });

  it("should handle ref value", async () => {
    const key = "test";
    const value = ref(5);
    const { storage } = useSessionStorage(key, value);

    await nextTick();

    expect(storage.value).toEqual(value.value);
    expect(sessionStorage.getItem(key)).toEqual(JSON.stringify(value.value));
  });

  it("should update sessionStorage immediately if we\re not using debounce", async () => {
    const key = "test";
    let value = 5;
    const { storage } = useSessionStorage(key, value, false);

    expect(sessionStorage.getItem(key)).toEqual(JSON.stringify(value));

    storage.value = 10;

    expect(sessionStorage.getItem(key)).toEqual(JSON.stringify(storage.value));
  });

  it("should store object in sessionStorage if default is passed", async () => {
    const obj = { a: 1 };
    const { storage } = useSessionStorage("test", obj);

    await promisedTimeout(100);

    expect(storage.value).toMatchObject(obj);
    expect(setItemSpy).toHaveBeenLastCalledWith("test", JSON.stringify(obj));
  });

  it("should update the sessionStorage if value changes", async () => {
    const obj = { a: 111 };

    const { storage } = useSessionStorage("test", obj);

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
    const { storage: storage1 } = useSessionStorage(key, { a: 1 });
    const { storage: storage2 } = useSessionStorage(key, { b: 1 });

    expect(storage1.value).toMatchObject(storage2.value);
  });

  it("should remove from sessionStorage", async () => {
    const key = "test";
    const { remove } = useSessionStorage(key, { a: 1 });

    remove();
    await nextTick();

    expect(sessionStorage.getItem(key)).toBeFalsy();
  });

  it("should clear all sessionStorage keys", async () => {
    sessionStorage.setItem("_other_", "secret");
    const s1 = useSessionStorage("key", { a: 1 });
    const s2 = useSessionStorage("key2", { a: 2 });

    expect(sessionStorage.getItem("key")).toBe(
      JSON.stringify(s1.storage.value)
    );
    expect(sessionStorage.getItem("key2")).toBe(
      JSON.stringify(s2.storage.value)
    );
    expect(sessionStorage.getItem("_other_")).toBe("secret");

    s1.clear();

    await nextTick();
    await promisedTimeout(200);

    expect(s1.storage.value).toBeUndefined();
    expect(s2.storage.value).toBeUndefined();
    expect(sessionStorage.getItem("_other_")).toBe("secret");
  });

  it("should load from sessionStorage", () => {
    const key = "hello";
    sessionStorage.setItem(key, JSON.stringify({ k: 1 }));

    const { storage } = useSessionStorage(key, { k: 10 });

    expect(storage.value).toMatchObject({ k: 1 });
  });

  it("should warn if sessionStorage is not supported", () => {
    setItemSpy.mockImplementationOnce(() => {
      throw new Error("random");
    });
    const key = "hello";
    useSessionStorage(key, { k: 10 });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[sessionStorage] is not available"
    );
  });

  it("should handle ref key", async () => {
    jest.useFakeTimers();
    const key = ref("hello");

    const { storage } = useSessionStorage(key, { k: 10 });

    expect(sessionStorage.key(0)).toBe(key.value);
    expect(storage.value).toMatchObject({ k: 10 });

    key.value = "hey";
    jest.runAllTimers();

    // key doesn't exist so it's undefined
    expect(storage.value).toBeUndefined();
    jest.runAllTimers();

    storage.value = { k: 0 };
    jest.advanceTimersByTime(20);

    expect(sessionStorage.key(1)).toBe(key.value);
    expect(sessionStorage.getItem(key.value)).toBe(
      JSON.stringify(storage.value)
    );

    key.value = "hello";
    // should rollback to prev value
    expect(storage.value).toMatchObject({ k: 10 });
  });
});
