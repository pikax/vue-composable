jest.mock("../../src/promise/cancellablePromise", () => ({
  useCancellablePromise: jest.fn()
}));

import {
  useWorkerFunction,
  createBlobUrl,
  inlineWorkExecution
} from "../../src/web/workerFunction";
import { NO_OP } from "../../src";
import { ref } from "../../src/api";
import { nextTick } from "../utils";
import { useCancellablePromise } from "../../src/promise/cancellablePromise";

const mockBlob = (fn: jest.Mock<any, any>) => {
  class BlobMocked {
    script: any;
    type: any;
    constructor(...args: any[]) {
      fn(...args);
      this.script = args[0];
      this.type = args[1];
    }
  }

  Object.defineProperty(window, "Blob", {
    writable: true,
    configurable: true,
    value: BlobMocked
  });
  Object.defineProperty(global, "Blob", {
    writable: true,
    configurable: true,
    value: BlobMocked
  });

  return fn;
};

const mockWorker = (
  c: {
    constructor: jest.Mock<any, any>;
    addEventListener: jest.Mock<any, any>;
    postMessage: jest.Mock<any, any>;
    terminate: jest.Mock<any, any>;
  } = {
    constructor: jest.fn(),
    addEventListener: jest.fn(),
    postMessage: jest.fn(),
    terminate: jest.fn()
  }
) => {
  class WorkerMock {
    cb: {
      error: (e: ErrorEvent) => void;
      message: (e: MessageEvent) => void;
    } = {} as any;
    constructor(...args: any[]) {
      c.constructor(...args);
    }
    addEventListener = c.addEventListener.mockImplementation(
      (s: keyof WorkerMock["cb"], cb: any) => {
        this.cb[s] = cb;
      }
    );
    postMessage = c.postMessage;
    terminate = c.terminate;
  }

  const _worker = window.Worker;

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

  const mockClear = () => {
    Object.keys(c).map((x: keyof typeof c) => c[x].mockClear());
  };

  return {
    ...c,
    mockClear
  };
};

describe("worker function", () => {
  const postMessageFn = jest
    .spyOn(window, "postMessage")
    .mockImplementation(x => x);

  const blobConstructorFn = mockBlob(
    jest.fn()
  ).mockImplementation((script, type) => [script, type]);
  const createObjectUrlSpy = jest.fn(x => x);
  const revokeObjectURLSpy = jest.fn(x => x);

  URL.createObjectURL = createObjectUrlSpy;
  URL.revokeObjectURL = revokeObjectURLSpy;

  const workerMock = mockWorker();

  const cancellablePromiseFn = useCancellablePromise as jest.Mock;

  beforeEach(() => {
    postMessageFn.mockClear();
    createObjectUrlSpy.mockClear();
    blobConstructorFn.mockClear();

    workerMock.mockClear();
    cancellablePromiseFn.mockClear();
    cancellablePromiseFn.mockImplementation(p => ({ exec: p }));
  });

  describe("inlineWorkExecution", () => {
    const toArgs = (...args: any[]) => [...args];

    it("should return a function", () => {
      expect(inlineWorkExecution(NO_OP)).toBeInstanceOf(Function);
    });

    it("should handle non-promise based factory", async () => {
      const v = { a: 1 };
      const e = inlineWorkExecution((a: any) => a);

      const r = await e({
        data: toArgs(v)
      } as any);

      expect(r).toMatchObject([true, v]);
      expect(postMessageFn).toHaveBeenCalledWith([true, v]);
    });

    it("should handle promise based factory", async () => {
      const v = { a: 1 };
      const e = inlineWorkExecution((a: any) => Promise.resolve(a));

      const r = await e({
        data: toArgs(v)
      } as any);

      expect(r).toMatchObject([true, v]);
      expect(postMessageFn).toHaveBeenCalledWith([true, v]);
    });

    it("should call factory with the `e.data`", async () => {
      const v = { a: 1 };
      const factory = jest.fn(x => x);
      const e = inlineWorkExecution(factory);

      await e({
        data: toArgs(v)
      } as any);

      expect(factory).toHaveBeenCalledWith(v);
    });

    it("should call factory with multiple arguments the `e.data`", async () => {
      const factory = jest.fn((...args) => args);
      const e = inlineWorkExecution(factory);

      await e({
        data: toArgs(1, 2, 3)
      } as any);

      expect(factory).toHaveBeenCalledWith(1, 2, 3);
      expect(postMessageFn).toHaveBeenCalledWith([true, [1, 2, 3]]);
    });

    it("should be able to call the function if `e.data` is empty or undefined", async () => {
      const factory = jest.fn();
      const e = inlineWorkExecution(factory);

      const r = await e({
        data: undefined
      } as any);

      expect(r).toStrictEqual([true, undefined]);
      expect(factory).toHaveBeenCalledWith();
      expect(postMessageFn).toHaveBeenCalledWith([true, undefined]);
    });

    it("should return [false, Error] on exception", async () => {
      const error = new Error("test");
      const factory = jest.fn(() => {
        throw error;
      });
      const e = inlineWorkExecution(factory);

      const r = await e({
        data: toArgs(1, 2, 3)
      } as any);

      expect(r).toStrictEqual([false, error]);
      expect(factory).toHaveBeenCalledWith(1, 2, 3);
      expect(postMessageFn).toHaveBeenCalledWith([false, error]);
    });

    it("should return [false, Error] on promised exception", async () => {
      const error = new Error("test");
      const factory = jest.fn(
        () =>
          new Promise((_, rej) => {
            rej(error);
          })
      );
      const e = inlineWorkExecution(factory);

      const r = await e({
        data: toArgs(1, 2, 3)
      } as any);

      expect(r).toStrictEqual([false, error]);
      expect(factory).toHaveBeenCalledWith(1, 2, 3);
      expect(postMessageFn).toHaveBeenCalledWith([false, error]);
    });
  });

  describe("createBlobUrl", () => {
    beforeEach(() => {});

    it("should create a blob and return objectUrl", () => {
      const fn = (a: any) => {
        return a + a;
      };
      expect(createBlobUrl(fn, [])).toMatchObject({
        script: ["", "onmessage=", expect.stringContaining(fn.toString())],
        type: {
          type: "text/javascript"
        }
      });
    });

    it("should add 1 dependency to the blob", () => {
      const fn = (a: any) => {
        return a + a;
      };
      expect(createBlobUrl(fn, ["https://mydep.mydepen.my-com"])).toMatchObject(
        {
          script: [
            `importScripts("https://mydep.mydepen.my-com");`,
            "onmessage=",
            expect.stringContaining(fn.toString())
          ],
          type: {
            type: "text/javascript"
          }
        }
      );
    });

    it("should create the correct blobScript", () => {
      const fn = (a: any) => {
        return a + a;
      };
      expect(
        createBlobUrl(fn, [
          "https://mydep.mydepen.my-com",
          "https://mydep.mydepen.my-com",
          "https://mydep.mydepen.my-com"
        ])
      ).toMatchObject({
        script: [
          `importScripts("https://mydep.mydepen.my-com","https://mydep.mydepen.my-com","https://mydep.mydepen.my-com");`,
          "onmessage=",
          expect.stringContaining(fn.toString())
        ],
        type: {
          type: "text/javascript"
        }
      });
    });
  });

  describe("useWorkerFunction", () => {
    it("should create cancellablePromise and return it", () => {
      const p = {};
      cancellablePromiseFn.mockImplementationOnce(() => p);
      expect(useWorkerFunction(NO_OP as any)).toBe(p);

      expect(useCancellablePromise).toHaveBeenCalledWith(expect.any(Function), {
        lazy: true,
        throwException: true
      });
    });

    it("should create worker", async () => {
      const dependencies = ["test"];
      const { exec } = useWorkerFunction(NO_OP as any, { dependencies });
      expect(exec).toBeInstanceOf(Function);

      const p = exec();

      expect(p).toBeInstanceOf(Promise);

      expect(createObjectUrlSpy).toHaveBeenCalledTimes(1);
      expect(workerMock.constructor).toHaveBeenCalledTimes(1);

      expect(workerMock.addEventListener).toHaveBeenCalledTimes(2);
      expect(workerMock.postMessage).toHaveBeenCalledWith([]);

      // new worker should have been created
      exec(1, 2, 3);

      expect(createObjectUrlSpy).toHaveBeenCalledTimes(2);
      expect(workerMock.constructor).toHaveBeenCalledTimes(2);

      expect(workerMock.addEventListener).toHaveBeenCalledTimes(4);
      expect(workerMock.postMessage).toHaveBeenLastCalledWith([1, 2, 3]);
    });

    it("should get the function return", async () => {
      const { exec } = useWorkerFunction(NO_OP as any);
      expect(exec).toBeInstanceOf(Function);

      const p = exec();

      const expected = { a: 1 };

      // message
      workerMock.addEventListener.mock.calls[0][1]({
        data: [true, expected]
      });

      expect(p).resolves.toBe(expected);

      workerMock.mockClear();
      expect(exec()).rejects.toBe(expected);
      // message
      workerMock.addEventListener.mock.calls[0][1]({
        data: [false, expected]
      });

      workerMock.mockClear();
      expect(exec()).rejects.toBe(expected);
      // message
      workerMock.addEventListener.mock.calls[1][1](expected);
    });

    describe("terminate", () => {
      test("on success", async () => {
        const { exec } = useWorkerFunction(NO_OP as any);
        expect(exec).toBeInstanceOf(Function);

        const p = exec();

        const expected = { a: 1 };

        // message
        workerMock.addEventListener.mock.calls[0][1]({
          data: [true, expected]
        });
        await p;

        expect(workerMock.terminate).toHaveBeenCalled();
        expect(revokeObjectURLSpy).toHaveBeenCalled();
      });

      describe("cancel", () => {
        test("calling cancel()", async () => {
          cancellablePromiseFn.mockImplementationOnce(p => ({
            exec: p,
            cancelled: ref(false)
          }));

          const { exec, cancelled } = useWorkerFunction(NO_OP as any);

          const p = exec();
          expect(p).resolves.toBeUndefined();
          cancelled.value = true;

          await nextTick();
          expect(await p).toBeUndefined();
          expect(workerMock.terminate).toHaveBeenCalled();
        });

        test("if the last argument is ref<boolean> becomes false", async () => {
          cancellablePromiseFn.mockImplementationOnce(p => ({
            exec: p,
            cancelled: ref(false)
          }));
          const cancel = ref(false);

          const { exec } = useWorkerFunction(NO_OP as any);

          const p = exec(cancel);
          expect(p).resolves.toBeUndefined();
          cancel.value = true;

          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();
        });

        test("last argument is boolean, not ref boolean", async () => {
          cancellablePromiseFn.mockImplementationOnce(p => ({
            exec: p,
            cancelled: ref(false)
          }));
          let cancel = false;

          const { exec, cancelled } = useWorkerFunction(NO_OP as any);

          const p = exec(cancel);
          expect(p).resolves.toBeUndefined();
          cancel = true;

          await nextTick();
          expect(workerMock.terminate).not.toHaveBeenCalled();

          cancelled.value = true;
          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();
        });

        test("last argument extra argument is ref<true>", async () => {
          cancellablePromiseFn.mockImplementationOnce(p => ({
            exec: p,
            cancelled: ref(false)
          }));
          const cancel = ref(true);

          const { exec, cancelled } = useWorkerFunction(NO_OP as any);

          const p = exec(cancel);
          await nextTick();
          expect(p).resolves.toBeUndefined();
          cancel.value = false;

          await nextTick();
          expect(workerMock.terminate).not.toHaveBeenCalled();

          // this cancel is not tracked so it shouldn't affect
          cancel.value = true;
          await nextTick();
          expect(workerMock.terminate).not.toHaveBeenCalled();

          cancelled.value = true;
          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();
        });

        test("last argument is ref<boolean>", async () => {
          cancellablePromiseFn.mockImplementationOnce(p => ({
            exec: p,
            cancelled: ref(false)
          }));
          const cancel = ref(false);

          const { exec, cancelled } = useWorkerFunction((a: any) => {
            return Promise.resolve(true);
          });

          let p = exec(cancel);

          expect(p).resolves.toBeUndefined();
          cancel.value = true;

          await nextTick();
          expect(workerMock.terminate).not.toHaveBeenCalled();

          cancelled.value = true;
          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();

          // adding extra argument
          p = (exec as any)(1, cancel);

          expect(p).resolves.toBeUndefined();
          cancel.value = true;

          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();

          await nextTick();
          expect(workerMock.terminate).toHaveBeenCalled();
        });

        test("on timeout", async () => {
          jest.useFakeTimers();
          try {
            const cancelled = ref(false);
            cancellablePromiseFn.mockImplementationOnce(p => ({
              exec: p,
              cancel: jest
                .fn()
                .mockImplementation(() => (cancelled.value = false)),
              cancelled
            }));

            const { exec, cancel } = useWorkerFunction(NO_OP as any, {
              timeout: 40
            });

            const p = exec();
            expect(p).resolves.toBeUndefined();
            jest.runTimersToTime(50);

            await nextTick();
            cancelled.value = true;

            expect(await p).toBeUndefined();
            expect(workerMock.terminate).toHaveBeenCalled();
            expect(cancel).toHaveBeenCalledWith(
              `[WebWorker] timeout after 40ms`
            );
          } finally {
            jest.useRealTimers();
          }
        });
      });
    });
  });
});
