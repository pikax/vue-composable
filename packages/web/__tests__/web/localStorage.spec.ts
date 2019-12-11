import { useLocalStorage } from "../../src";
import { nextTick } from "../utils";
import { promisedTimeout } from "@vue-composable/core";

describe("localStorage", () => {
  const _localStorage = localStorage;
  let localStore: Record<string, string> = {};
  let len = 0;

  const setItem = jest.fn((key: string, value: string) => {
    localStore[key] = value.toString();
    len = Object.keys(localStore).length;
  });
  const getItem = jest.fn((key: string) => localStore[key]);
  const removeItem = jest.fn((key: string) => {
    delete localStore[key];
    len = Object.keys(localStore).length;
  });

  const key = jest.fn(index => {
    return Object.keys(localStore)[index];
  });

  const clear = jest.fn(() => (localStore = {}));

  let mockedLocalStorage: Storage = {
    setItem,
    getItem,
    clear,
    removeItem,
    length: len,
    key
  };

  Object.defineProperty(window, "localStorage", {
    value: mockedLocalStorage
  });

  beforeEach(() => {
    setItem.mockClear();
    getItem.mockClear();
    clear.mockClear();
    removeItem.mockClear();
    key.mockClear();
  });

  afterEach(async () => {
    useLocalStorage("").clear();
    await promisedTimeout(100);
    localStore = {};
    len = 0;
  });

  afterAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: _localStorage
    });
  });

  it("should store in the localStore", () => {
    localStorage.setItem("test", "test");

    expect(localStore["test"]).toBe("test");
  });

  it("should store object in localStorage if default is passed", async () => {
    const obj = { a: 1 };
    const { storage } = useLocalStorage("test", obj);

    await promisedTimeout(100);

    expect(storage.value).toMatchObject(obj);
    expect(setItem).toHaveBeenCalledWith("test", JSON.stringify(obj));
  });

  it("should update the localstorage if value changes", async () => {
    const obj = { a: 1 };

    const { storage } = useLocalStorage("test", obj);
    await nextTick();
    await promisedTimeout(100);

    expect(storage.value).toMatchObject(obj);
    expect(setItem).toHaveBeenCalledWith("test", JSON.stringify(obj));

    storage.value.a = 33;
    await nextTick();

    await promisedTimeout(100);

    expect(storage.value).toMatchObject({ a: 33 });
    expect(setItem).toHaveBeenCalledWith("test", JSON.stringify({ a: 33 }));

    expect(localStore["test"]).toBe(JSON.stringify({ a: 33 }));
  });

  it("should get the same object if the same key is used", () => {
    const key = "test";
    const { storage: storage1 } = useLocalStorage(key, { a: 1 });
    const { storage: storage2 } = useLocalStorage(key, { a: 1 });

    expect(storage1).toBe(storage2);
  });

  it("should remove from localstorage", async () => {
    const key = "test";
    const { remove } = useLocalStorage(key, { a: 1 });

    remove();
    await nextTick();
    expect(localStore[key]).toBeUndefined();
  });

  it("should clear all localstorage keys", async () => {
    localStorage.setItem("_other_", "secret");
    const s1 = useLocalStorage("key", { a: 1 });
    const s2 = useLocalStorage("key2", { a: 2 });

    await promisedTimeout(100);

    expect(localStore).toMatchObject({
      key: JSON.stringify(s1.storage.value),
      key2: JSON.stringify(s2.storage.value),
      _other_: "secret"
    });

    s1.clear();

    await nextTick();
    await promisedTimeout(200);

    expect(s1.storage.value).toBeUndefined();
    expect(s2.storage.value).toBeUndefined();
    expect(localStore).toStrictEqual({
      _other_: "secret"
    });
  });


  it("should load from localStorage", () => {
    const key = "hello";
    localStorage.setItem(key, JSON.stringify({ k: 1 }));

    const { storage } = useLocalStorage(key, { k: 10 });

    expect(storage.value).toMatchObject({ k: 1 });
  });
});
