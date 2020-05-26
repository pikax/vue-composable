const onUnmountedSpy = jest.fn();

jest.mock("../../src/api", () => ({
  //@ts-ignore
  ...(__VUE_2__
    ? jest.requireActual("../../src/api.2")
    : jest.requireActual("../../src/api.3")),
  onUnmounted: onUnmountedSpy
}));

import { useWorker, exposeWorker } from "../../src";
import { nextTick } from "../utils";

describe("worker", () => {
  const _worker = window.Worker;
  const addEventListenerFn = jest.fn();
  const postMessageFn = jest.fn();
  const terminateFn = jest.fn();
  const constructorFn = jest.fn();

  class WorkerMock {
    cb: {
      error: (e: ErrorEvent) => void;
      message: (e: MessageEvent) => void;
    } = {} as any;
    constructor(...args: any[]) {
      constructorFn(...args);
    }
    addEventListener = addEventListenerFn.mockImplementation(
      (s: keyof WorkerMock["cb"], cb: any) => {
        this.cb[s] = cb;
      }
    );
    postMessage = postMessageFn;
    terminate = terminateFn;
  }
  beforeAll(() => {
    Object.defineProperty(window, "Worker", {
      writable: true,
      configurable: true,
      value: WorkerMock
    });
    Object.defineProperty(global, "Worker", {
      writable: true,
      configurable: true,
      value: WorkerMock
    });
  });

  afterAll(() => {
    Object.defineProperty(window, "Worker", {
      writable: true,
      configurable: true,
      value: _worker
    });
    Object.defineProperty(global, "Worker", {
      writable: true,
      configurable: true,
      value: _worker
    });
  });

  beforeEach(() => {
    addEventListenerFn.mockReset();
    postMessageFn.mockReset();
    constructorFn.mockReset();
    terminateFn.mockReset();
    onUnmountedSpy.mockReset();
  });

  it("should create worker", () => {
    const url = "test";
    const options: WorkletOptions = { credentials: {} as any };
    const args = ["a", "b"];

    useWorker(url, undefined, options);
    expect(constructorFn).toHaveBeenLastCalledWith(url, options);

    useWorker(url, args, options);
    expect(constructorFn).toHaveBeenLastCalledWith(url, options);

    useWorker(undefined as any, args, options);
    expect(constructorFn).toHaveBeenLastCalledWith(undefined, options);

    useWorker(url, undefined, undefined);
    expect(constructorFn).toHaveBeenLastCalledWith(url, undefined);

    useWorker(undefined as any, undefined, undefined);
    expect(constructorFn).toHaveBeenLastCalledWith(undefined, undefined);
  });

  it("should receive messages", async () => {
    const { worker, data } = useWorker("");
    const mock: WorkerMock = worker as any;

    const sendMessage = (d: any) => {
      mock.cb.message({
        data: d
      } as any);

      return nextTick();
    };

    let expected: any = {};
    await sendMessage(expected);
    expect(data.value).toStrictEqual(expected);

    expected = 12;
    await sendMessage(expected);
    expect(data.value).toStrictEqual(expected);

    expected = "ddd";
    await sendMessage(expected);
    expect(data.value).toStrictEqual(expected);
  });

  it("should warn if the message rate is too high", () => {
    const { worker } = useWorker("");
    const mock: WorkerMock = worker as any;
    const warnSpy = jest.spyOn(console, "warn");

    mock.cb.message({ data: "1" } as any);
    mock.cb.message({ data: "1" } as any);
    mock.cb.message({ data: "1" } as any);

    expect(warnSpy).toBeCalledTimes(2);
    expect(warnSpy).toHaveBeenLastCalledWith(
      "[useWorker] message rate is too high, you might not get updated of all the messages."
    );
  });

  it("should add event listeners", () => {
    expect(addEventListenerFn).not.toHaveBeenCalled();
    expect(postMessageFn).not.toHaveBeenCalled();

    useWorker("");

    expect(addEventListenerFn).toHaveBeenCalled();
    expect(postMessageFn).not.toHaveBeenCalled();
  });

  it("should terminate worker", async () => {
    const { terminated, terminate } = useWorker("");

    expect(terminated.value).toBe(false);
    expect(terminateFn).not.toHaveBeenCalled();
    terminate();

    expect(terminateFn).toHaveBeenCalled();
    await nextTick();

    expect(terminated.value).toBe(true);
  });

  it("should terminate on onUnmounted", async () => {
    const { terminated } = useWorker("");

    expect(terminated.value).toBe(false);
    expect(terminateFn).not.toHaveBeenCalled();
    onUnmountedSpy.mock.calls[0][0]();

    expect(terminateFn).toHaveBeenCalled();

    await nextTick();

    expect(terminated.value).toBe(true);
  });

  it("should store error message", async () => {
    const { worker, errorEvent, errored } = useWorker("");
    const mock: WorkerMock = worker as any;

    expect(errorEvent.value).toBeUndefined();
    expect(errored.value).toBe(false);

    const error: ErrorEvent = new ErrorEvent("Error mock");

    mock.cb.error(error);

    expect(errorEvent.value).toStrictEqual(error);
    expect(errored.value).toBe(true);
  });

  describe("exposeWorker", () => {
    const postMessageFn = jest.fn();
    const worker = {
      onmessage: (a: any) => {},
      postMessage: postMessageFn
    };
    const sendWorker = exposeWorker.bind(worker);

    beforeEach(() => {
      postMessageFn.mockReset();
    });

    it("should set callback", () => {
      const c = worker.onmessage;
      sendWorker(() => {});

      expect(worker.onmessage).not.toStrictEqual(c);
    });

    it("should post messages", async () => {
      const warnSpy = jest.spyOn(console, "warn");
      const func = jest.fn().mockImplementation(x => x);
      sendWorker((_: any) => func(_));

      const send = async (e: any) => {
        await worker.onmessage({
          data: e
        });
      };

      expect(func).not.toHaveBeenCalled();

      func.mockImplementationOnce(() => undefined);
      await send(11);
      expect(postMessageFn).toHaveBeenLastCalledWith(undefined);
      expect(warnSpy).toHaveBeenCalledWith(
        "[exposeWorker] returned `undefined`, this might cause unexpected behaviour"
      );

      await send(null);
      expect(postMessageFn).toHaveBeenLastCalledWith(null);

      let expected: any = "1";
      await send(expected);
      expect(postMessageFn).toHaveBeenLastCalledWith(expected);

      expected = ["1"];
      await send(expected);
      expect(postMessageFn).toHaveBeenLastCalledWith(expected);

      expected = [1, 3, 5, "rr"];
      await send(expected);
      expect(postMessageFn).toHaveBeenLastCalledWith(expected);

      expected = { a: 1 };
      await send(expected);
      expect(postMessageFn).toHaveBeenLastCalledWith(expected);

      expected = 11;
      await send(expected);
      expect(postMessageFn).toHaveBeenLastCalledWith(expected);

      postMessageFn.mockClear();
      let _gen = function*() {
        yield 1;
        yield 2;
        yield 3;
      };
      expected = _gen();
      await send(expected);
      let generated = Array.from(_gen());
      expect(postMessageFn).toHaveBeenCalledTimes(generated.length);
      generated.map((v, i) =>
        expect(postMessageFn).toHaveBeenNthCalledWith(i + 1, v)
      );

      postMessageFn.mockClear();
      let _genAsync = async function*() {
        yield await Promise.resolve(1);
        yield await Promise.resolve(2);
        yield await Promise.resolve(3);
        yield await Promise.resolve(4);
      };
      expected = _genAsync();
      await send(_genAsync());
      expect(postMessageFn).toHaveBeenCalledTimes(4);
      [1, 2, 3, 4].map((v, i) =>
        expect(postMessageFn).toHaveBeenNthCalledWith(i + 1, v)
      );
    });
  });
});
