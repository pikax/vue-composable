import { useFetch } from "../src";
import { promisedTimeout } from "../src/utils";
import { nextTick } from "./utils";
import { promises } from "dns";

describe("fetch", () => {
  let fetchSpy: jest.SpyInstance = undefined as any;
  beforeAll(() => {
    fetchSpy = (global as any).fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
          return Promise.resolve({
            test: 1
          });
        }
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

    expect(fetchSpy).toBeCalledWith("./api/1", undefined);
  });

  it("should call fetch with options", () => {
    const init = {
      headers: {
        test: "test"
      }
    };
    const { exec } = useFetch(init);

    exec("./api/1");

    expect(fetchSpy).toHaveBeenCalledWith("./api/1", init);
  });

  it("should exec only be resolved after parsing json()", async () => {
    const { exec, result } = useFetch({
      isJson: true,
      parseImmediate: true
    });
    const wait = 100;
    const expectedResult = {
      test: 2
    };
    let r;
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json() {
          return promisedTimeout(wait).then(x => (r = expectedResult));
        }
      })
    );

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
      parseImmediate: false
    });
    const wait = 100;
    const expectedResult = {
      test: 2
    };
    let r;
    let jsonExecuted = false;
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json() {
          jsonExecuted = true;
          return promisedTimeout(wait).then(x => (r = expectedResult));
        }
      })
    );

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
      isJson: false
    });
    const wait = 100;
    const expectedResult = {
      test: 2
    };
    let r;
    let jsonExecuted = false;
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json() {
          jsonExecuted = true;
          return promisedTimeout(wait).then(x => (r = expectedResult));
        }
      })
    );

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
      isJson: true
    });
    const exception = new Error("error parsing json");
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json() {
          return Promise.reject(exception);
        }
      })
    );

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
      statusText: "OK"
    };

    expect(status.value).toBe(null);
    expect(statusText.value).toBe(null);

    fetchSpy.mockImplementation(() => ({
      ...expectedResult,

      json() {
        return Promise.resolve("");
      }
    }));

    await exec("test");

    expect(status.value).toBe(expectedResult.status);
    expect(statusText.value).toBe(expectedResult.statusText);
  });
});
