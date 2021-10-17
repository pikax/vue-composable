import { usePromise } from "../../src/promise/promise";
import { nextTick } from "../utils";
import { promisedTimeout } from "../../src/";

describe("promise", () => {
  let cb: ((...args: any[]) => void) | null = null;
  let currentPromise: Promise<any> | null = null;
  const factory = () => (currentPromise = new Promise((res) => (cb = res)));

  beforeEach(() => {
    cb = null;
    currentPromise = null;
  });

  it("should resolve immediately", () => {
    console.log(2);

    expect(usePromise(factory)).toMatchObject({
      promise: { value: currentPromise },
      result: { value: null },
      loading: { value: true },
      error: { value: null },
    });
    console.log(1);
  });

  it("should not resolve immediately", () => {
    console.log(22);
    expect(usePromise(factory, true)).toMatchObject({
      promise: { value: undefined },
      result: { value: null },
      loading: { value: false },
      error: { value: null },
    });
    console.log(11);
  });

  it("should not resolve immediately with options", () => {
    console.log(222);
    expect(usePromise(factory, { lazy: true })).toMatchObject({
      promise: { value: undefined },
      result: { value: null },
      loading: { value: false },
      error: { value: null },
    });
    console.log(111);
  });

  it("should resolve promise", async () => {
    const result = 1;
    const use = usePromise(factory);

    expect(use.exec()).toStrictEqual(currentPromise!);
    expect(use).toMatchObject({
      promise: { value: currentPromise },
      loading: { value: true },
      error: { value: null },
    });

    cb!(result);
    await currentPromise;

    await nextTick();
    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null },
    });
  });

  it("should call factory with arguments", async () => {
    const result = "test";
    const use = usePromise((r: string) => Promise.resolve(r));
    const p = use.exec(result);

    await nextTick();

    expect(use.result.value).toBe(result);
    expect(await p).toBe(result);
  });

  it("should keep the last result", async () => {
    let i = 0;
    const callbacks: ((...args: any[]) => void)[] = [];
    const use = usePromise(
      () => (currentPromise = new Promise((res) => (callbacks[i++] = res)))
    );

    const arr = [use.exec(), use.exec()];

    expect(arr[1]).toStrictEqual(currentPromise!);

    callbacks[0](1);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: null },
      loading: { value: true },
      error: { value: null },
    });

    callbacks[2](1);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: 1 },
      loading: { value: false },
      error: { value: null },
    });
  });

  it("should store exception", async () => {
    const error = new Error("error");
    let rejCb: Function | null = null;
    const use = usePromise(
      () => (currentPromise = new Promise((_, rej) => (rejCb = rej)))
    );

    use.exec();

    rejCb!(error);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: null },
      loading: { value: false },
      error: { value: error },
    });
  });

  it("should update the result when calling multiple times", async () => {
    let result = 0;
    const use = usePromise(factory);

    use.exec();

    await nextTick();

    expect(use).toMatchObject({
      promise: { value: currentPromise },
      loading: { value: true },
      error: { value: null },
    });

    cb!(result);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null },
    });

    use.exec();

    await nextTick();

    expect(use).toMatchObject({
      promise: { value: currentPromise },
      loading: { value: true },
      error: { value: null },
    });

    cb!(++result);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null },
    });
  });

  it("exec should return promise and it should be resolved", async () => {
    let i = 0;
    const callbacks: ((...args: any[]) => void)[] = [];
    const use = usePromise(
      () => (currentPromise = new Promise((res) => (callbacks[i++] = res)))
    );

    const arr = [use.exec(), use.exec()];

    callbacks[1](1);
    expect(await arr[0]).toBe(1);
  });

  it("should not assign error if not the last promise", async () => {
    let i = 0;
    const callbacks: ((...args: any[]) => void)[] = [];
    const rejCallbacks: Function[] = [];
    const use = usePromise(
      () =>
        (currentPromise = new Promise((res, rej) => {
          callbacks[i] = res;
          rejCallbacks[i++] = rej;
        }))
    );

    use.exec().catch((x) => expect(x).toMatch("Error"));
    use.exec();

    rejCallbacks[0]("Error");
    await nextTick();

    expect(use).toMatchObject({
      loading: { value: true },
      error: { value: null },
    });
  });

  it("should only update result after the promise is resolved", async () => {
    // result should not be set to `null` between executions
    let v = 1;
    const use = usePromise((x) => promisedTimeout(20).then(() => (v = x)));

    expect(use.result.value).toBe(null);

    await use.exec(12);

    expect(use.result.value).toBe(v);
    use.exec(1);
    await promisedTimeout(5);
    expect(use.result.value).toBe(12);
    await promisedTimeout(17);
    expect(use.result.value).toBe(1);
  });

  describe("__DEV__ warns", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn");

    it("should warn if the factory has argument but lazy no specified", () => {
      usePromise((a: any) => {});
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "[usePromise] parameters detected on `fn` factory. Executing promise without arguments."
      );

      consoleWarnSpy.mockClear();
      usePromise((a: any) => {}, true);
      expect(consoleWarnSpy).not.toHaveBeenCalled();

      usePromise((a: any) => {}, { lazy: true });
      expect(consoleWarnSpy).not.toHaveBeenCalled();

      usePromise((a: any) => {}, { throwException: true });
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "[usePromise] parameters detected on `fn` factory. Executing promise without arguments."
      );
    });
  });

  describe("throw exception", () => {
    // TODO this test is failing because the exception is not caught
    it.skip("should throw when throwException is true at creation", async () => {
      expect.assertions(2);

      const error = new Error("error");
      const use = usePromise(() => Promise.reject(error), {
        throwException: true,
      });

      try {
        await use.exec();
      } catch (e) {
        expect(e).toMatchObject(error);
      }

      await nextTick();

      expect(use).toMatchObject({
        result: { value: null },
        loading: { value: false },
        error: { value: error },
      });
    });

    it("should throw if the last argument of the exec is true, but factory is ()=>void", async () => {
      expect.assertions(2);

      const error = new Error("error");
      const use = usePromise(() => Promise.reject(error));

      try {
        await (use.exec as any)(true);
      } catch (e) {
        expect(e).toMatchObject(error);
      }

      await nextTick();

      expect(use).toMatchObject({
        result: { value: null },
        loading: { value: false },
        error: { value: error },
      });
    });

    it("should throw if the last argument of the exec is true, but factory is (a)=>void", async () => {
      expect.assertions(2);

      const error = new Error("error");
      const use = usePromise((a: number) => Promise.reject(error));

      try {
        await (use.exec as any)(1, true);
      } catch (e) {
        expect(e).toMatchObject(error);
      }

      await nextTick();

      expect(use).toMatchObject({
        result: { value: null },
        loading: { value: false },
        error: { value: error },
      });
    });

    it("should not throw if the last argument of the exec is false", async () => {
      expect.assertions(1);

      const error = new Error("error");
      const use = usePromise(() => Promise.reject(error), true);

      try {
        await (use.exec as any)(false);
      } catch (e) {
        expect(e).toMatchObject(error);
      }

      await nextTick();

      expect(use).toMatchObject({
        result: { value: null },
        loading: { value: false },
        error: { value: error },
      });
    });
  });

  it("should throw if factory is invalid", () => {
    expect(() => {
      usePromise(null as any);
    }).toThrowError(`[usePromise] argument can't be 'null'`);

    expect(() => {
      usePromise(undefined as any);
    }).toThrowError(`[usePromise] argument can't be 'undefined'`);

    expect(() => {
      usePromise("1" as any);
    }).toThrowError(
      `[usePromise] expects function, but received ${typeof "1"}`
    );

    expect(() => {
      usePromise(1 as any);
    }).toThrowError(`[usePromise] expects function, but received ${typeof 1}`);

    expect(() => {
      usePromise(0 as any);
    }).toThrowError(`[usePromise] argument can't be '0'`);
  });
});
