import { usePromise } from "../../src/promise/promise";
import { nextTick } from "../utils";

describe("promise", () => {
  let cb: ((...args: any[]) => void) | null = null;
  let currentPromise: Promise<any> | null = null;
  const factory = () => (currentPromise = new Promise(res => (cb = res)));

  beforeEach(() => {
    cb = null;
    currentPromise = null;
  });

  it("should not resolve immediately", () => {
    expect(usePromise(factory)).toMatchObject({
      promise: { value: undefined },
      result: { value: null },
      loading: { value: false },
      error: { value: null }
    });
  });

  it("should resolve promise", async () => {
    const result = 1;
    const use = usePromise(factory);

    expect(use.exec()).toStrictEqual(currentPromise!);
    expect(use).toMatchObject({
      promise: { value: currentPromise },
      loading: { value: true },
      error: { value: null }
    });

    cb!(result);
    await currentPromise;

    await nextTick();
    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null }
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
      () => (currentPromise = new Promise(res => (callbacks[i++] = res)))
    );

    const arr = [use.exec(), use.exec()];

    expect(arr[1]).toStrictEqual(currentPromise!);

    callbacks[0](1);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: null },
      loading: { value: true },
      error: { value: null }
    });

    callbacks[1](1);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: 1 },
      loading: { value: false },
      error: { value: null }
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
      error: { value: error }
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
      error: { value: null }
    });

    cb!(result);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null }
    });

    use.exec();

    await nextTick();

    expect(use).toMatchObject({
      promise: { value: currentPromise },
      loading: { value: true },
      error: { value: null }
    });

    cb!(++result);
    await nextTick();

    expect(use).toMatchObject({
      result: { value: result },
      loading: { value: false },
      error: { value: null }
    });
  });

  it("exec should return promise and it should be resolved", async () => {
    let i = 0;
    const callbacks: ((...args: any[]) => void)[] = [];
    const use = usePromise(
      () => (currentPromise = new Promise(res => (callbacks[i++] = res)))
    );

    const arr = [use.exec(), use.exec()];

    callbacks[0](1);
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

    use.exec().catch(x => expect(x).toMatch("Error"));
    use.exec();

    rejCallbacks[0]("Error");
    await nextTick();

    expect(use).toMatchObject({
      loading: { value: true },
      error: { value: null }
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
