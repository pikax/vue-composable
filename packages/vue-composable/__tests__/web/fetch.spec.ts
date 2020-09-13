import { useFetch } from "../../src";
import { promisedTimeout } from "../../src/utils";
import { nextTick, createVue } from "../utils";
import { Ref } from "../../src/api";

describe("fetch", () => {
  let fetchSpy: jest.SpyInstance = undefined as any;
  beforeAll(() => {
    fetchSpy = (global as any).fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return Promise.resolve({
            test: 1,
          });
        },
      })
    );
  });

  beforeEach(() => {
    fetchSpy.mockReset();
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });

  it("should call fetch", () => {
    const { exec } = useFetch();

    exec("./api/1");

    expect(fetchSpy).toBeCalledWith("./api/1", expect.objectContaining({}));
  });

  it("should call fetch with options", () => {
    const init = {
      headers: {
        test: "test",
      },
    };
    const { exec } = useFetch();

    exec("./api/1", init);

    expect(fetchSpy).toHaveBeenCalledWith(
      "./api/1",
      expect.objectContaining(init)
    );
  });

  it("should exec only be resolved after parsing json()", async () => {
    const { exec, result } = useFetch({
      isJson: true,
      parseImmediate: true,
    });
    const wait = 100;
    const expectedResult = {
      test: 2,
    };
    let r;
    fetchSpy.mockImplementationOnce(async () => {
      await promisedTimeout(wait);
      return {
        clone() {
          return this;
        },
        text() {
          return Promise.resolve("test");
        },
        blob() {
          return Promise.resolve(new Blob());
        },
        json() {
          return (r = expectedResult);
        },
      };
    });

    const p = exec("test");

    await promisedTimeout(10);
    await nextTick();

    // still not resolved
    expect(result.value).toBe(null);

    await p;

    expect(r).toBe(expectedResult);
  });

  it("should exec should not parse json() immediate", async () => {
    const { exec, result } = useFetch({
      isJson: true,
      parseImmediate: false,
    });
    const wait = 100;
    const expectedResult = {
      test: 2,
    };
    let r;
    let jsonExecuted = false;

    fetchSpy.mockImplementationOnce(async () => {
      return {
        clone() {
          return this;
        },
        text() {
          return Promise.resolve("test");
        },
        blob() {
          return Promise.resolve(new Blob());
        },
        async json() {
          jsonExecuted = true;
          await promisedTimeout(wait);
          return (r = expectedResult);
        },
      };
    });

    const p = exec("test");

    await promisedTimeout(10);
    await nextTick();

    expect(result.value).toBeTruthy();

    await p;

    // json() called
    expect(jsonExecuted).toBeTruthy();
    // has not run yet
    expect(r).toBe(undefined);

    expect(await result.value!.json()).toBe(expectedResult);
    expect(r).toBe(expectedResult);
    expect(jsonExecuted).toBeTruthy();
  });

  it("should exec should not call response.json()", async () => {
    const { exec, result } = useFetch({
      isJson: false,
    });
    const wait = 100;
    const expectedResult = {
      test: 2,
    };
    let r;
    let jsonExecuted = false;
    fetchSpy.mockImplementationOnce(async () => {
      return {
        clone() {
          return this;
        },
        text() {
          return Promise.resolve("test");
        },
        blob() {
          return Promise.resolve(new Blob());
        },
        async json() {
          jsonExecuted = true;
          await promisedTimeout(wait);
          return (r = expectedResult);
        },
      };
    });

    const p = exec("test");

    await promisedTimeout(10);
    await nextTick();

    expect(result.value).toBeTruthy();

    await p;

    // has not been called
    expect(jsonExecuted).toBeFalsy();
    expect(r).toBe(undefined);
  });

  it("should exec should empty `json` and set the `jsonError` when exception has being thrown parsing json()", async () => {
    const { exec, json, jsonError } = useFetch({
      isJson: true,
    });
    const exception = new Error("error parsing json");
    fetchSpy.mockImplementationOnce(async () => {
      return {
        clone() {
          return this;
        },
        text() {
          return Promise.resolve("test");
        },
        blob() {
          return Promise.resolve(new Blob());
        },
        async json() {
          throw exception;
        },
      };
    });

    const p = exec("test");

    await nextTick();
    await p;

    expect(json.value).toBeNull();
    expect(jsonError.value).toBe(exception);
  });

  it("should set the status and statusText correctly from response", async () => {
    const { exec, status, statusText } = useFetch();

    const expectedResult = {
      status: 200,
      statusText: "OK",
    };

    expect(status.value).toBe(null);
    expect(statusText.value).toBe(null);

    fetchSpy.mockImplementationOnce(async () => {
      return {
        ...expectedResult,
        clone() {
          return this;
        },
        text() {
          return Promise.resolve("test");
        },
        blob() {
          return Promise.resolve(new Blob());
        },
        json() {
          return Promise.resolve("");
        },
      };
    });

    await exec("test");

    expect(status.value).toBe(expectedResult.status);
    expect(statusText.value).toBe(expectedResult.statusText);
  });

  it("should cancel the request", async () => {
    const { exec, error, cancel, cancelledMessage, isCancelled } = useFetch();

    const message = "cancelled ";

    fetchSpy.mockImplementationOnce(async (re: Request, x: RequestInit) => {
      expect(x).toBeDefined();
      expect(x.signal).toBeDefined();

      const r = await Promise.race([promisedTimeout(5000)]);
      return r;
    });

    try {
      const execPromise = exec("https://example.com");
      cancel(message);
      await execPromise;
    } catch (e) {
      expect(e).toMatchObject({ rr: 1 });
    }

    expect({
      cancelledMessage,
      isCancelled,
      error,
    }).toMatchObject({
      cancelledMessage: {
        value: message,
      },
      isCancelled: {
        value: true,
      },
    });
  });

  it("should use first parameter as requestInit", () => {
    const headers = new Headers({
      test: "1",
    });
    const { exec } = useFetch({
      headers,
    });

    exec("./api/1");

    expect(fetchSpy).toBeCalledWith(
      "./api/1",
      expect.objectContaining({ headers })
    );
  });

  it("should use second argument as arguments", () => {
    const req: Partial<RequestInfo> = {
      url: "./api/1",
    };
    const init = {
      method: "POST",
      isJson: true,
    };
    useFetch(req, init);
    expect(fetchSpy).toBeCalledWith(
      expect.objectContaining(req),
      expect.objectContaining(init)
    );
  });

  it("should execute request if string is passed", () => {
    const url = "./api/1";

    const init: RequestInit = {
      method: "POST",
    };
    useFetch(url, init);
    expect(fetchSpy).toBeCalledWith(url, expect.objectContaining(init));
  });
  it("should execute request if request is passed", () => {
    const req: Partial<RequestInfo> = {
      url: "./api/1",
    };
    const init: RequestInit = {
      method: "POST",
    };
    useFetch(req, init);
    expect(fetchSpy).toBeCalledWith(
      expect.objectContaining(req),
      expect.objectContaining(init)
    );
  });

  it("should warn if cancel is called before any request has been made", () => {
    const { cancel } = useFetch();
    expect(cancel).toThrowError(
      "Cannot cancel because no request has been made"
    );
  });

  it("should cancel on unmount", () => {
    let isCancelled: Ref<boolean> = undefined as any;

    const { mount, destroy } = createVue({
      template: `<div></div>`,
      setup() {
        isCancelled = useFetch("./api").isCancelled;
      },
    });

    mount();

    expect(isCancelled.value).toBe(false);

    destroy();
    expect(isCancelled.value).toBe(true);
  });

  it("should not cancel on unmount if there's no promise", () => {
    let isCancelled: Ref<boolean> = undefined as any;

    const { mount, destroy } = createVue({
      template: `<div></div>`,
      setup() {
        isCancelled = useFetch().isCancelled;
      },
    });

    mount();

    expect(isCancelled.value).toBe(false);

    destroy();
    expect(isCancelled.value).toBe(false);
  });
});
