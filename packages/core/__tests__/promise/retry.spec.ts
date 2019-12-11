import { useRetry, exponentialDelay } from "../../src/promise/retry";
import { promisedTimeout } from "../../src/utils";
import { nextTick } from "../utils";

describe("retry", () => {
  const fnFactory = jest.fn();
  let dateNow = Date.now;

  fnFactory.mockImplementation();
  beforeAll(() => {
    Date.now = jest.fn(() => 1000);
  });

  afterAll(() => {
    Date.now = dateNow;
  });

  afterEach(() => {
    fnFactory.mockReset();
  });

  it("should execute factory", async () => {
    const { exec, isRetrying, retryCount, nextRetry } = useRetry({}, fnFactory);

    await exec();
    await nextTick();

    expect(isRetrying.value).toBe(false);
    expect(retryCount.value).toBe(0);
    expect(nextRetry.value).toBeUndefined();
    expect(fnFactory).toBeCalledTimes(1);
  });

  it("should execute retry", async () => {
    const { exec, isRetrying, retryCount, nextRetry, retryErrors } = useRetry(
      { maxRetries: 1, retryDelay: () => 100 },
      fnFactory
    );
    fnFactory.mockImplementationOnce(() => {
      throw new Error();
    });

    let now = Date.now();

    const p = exec();
    await promisedTimeout(10);
    await nextTick();

    expect(isRetrying.value).toBe(true);
    expect(retryCount.value).toBe(1);
    expect(nextRetry.value).toBeGreaterThanOrEqual(now);
    expect(nextRetry.value).toBeLessThanOrEqual(now + 100);
    expect(retryErrors.value).toHaveLength(1);
    expect(fnFactory).toBeCalledTimes(1);

    await p;
    await nextTick();

    expect(isRetrying.value).toBe(false);
    expect(retryCount.value).toBe(1);
    expect(nextRetry.value).toBeUndefined();
    expect(fnFactory).toBeCalledTimes(2);
  });

  it("should retry until it fails", async () => {
    const { exec, isRetrying, retryCount, nextRetry } = useRetry(
      { maxRetries: 2 },
      fnFactory
    );
    fnFactory.mockImplementation(() => {
      throw new Error();
    });

    await expect(exec()).rejects.toThrow("[useRetry] max retries reached 2");
    await nextTick();

    expect(isRetrying.value).toBe(false);
    expect(retryCount.value).toBe(3);
    expect(nextRetry.value).toBeUndefined();
    expect(fnFactory).toBeCalledTimes(3);
  });

  it("should cancel the retry if other task is executed", async () => {
    const { exec, isRetrying, retryCount, nextRetry } = useRetry(
      { maxRetries: 20, retryDelay: () => 200 },
      fnFactory
    );

    fnFactory.mockImplementation(arg => promisedTimeout(50).then(x => arg));
    fnFactory.mockImplementationOnce(arg => Promise.reject(arg));

    const a = exec("a");
    await nextTick();

    expect(isRetrying.value).toBe(true);
    expect(nextRetry.value).toBe(Date.now() + 200);

    const b = exec("b");
    await nextTick();

    expect(a).resolves.toBeNull(); // it should
    await expect(b).resolves.toBe("b");

    expect(isRetrying.value).toBe(false);
    expect(retryCount.value).toBe(0);
    expect(nextRetry.value).toBeUndefined();
    expect(fnFactory).toBeCalledTimes(2);
  });

  it("should resolve both executions but only track the last one", async () => {
    const { exec, isRetrying, retryCount, nextRetry } = useRetry(
      { maxRetries: 2 },
      fnFactory
    );

    fnFactory.mockImplementation(arg => promisedTimeout(50).then(x => arg));

    const a = exec("a");
    const b = exec("b");
    await nextTick();

    expect(await a).toBe("a"); // it should
    expect(await b).toBe("b");

    expect(isRetrying.value).toBe(false);
    expect(retryCount.value).toBe(0);
    expect(nextRetry.value).toBeUndefined();
    expect(fnFactory).toBeCalledTimes(2);
  });

  it("should not retry forever", () => {
    const { exec } = useRetry(jest.fn(() => Promise.reject("err")));

    return expect(exec()).resolves.toBeNull();
  });

  it("should cancel retry after call cancel()", async () => {
    const { exec, isRetrying, retryErrors, nextRetry, cancel } = useRetry(
      { maxRetries: 2, retryDelay: () => 200 }
    );

    fnFactory.mockImplementation(arg => promisedTimeout(50).then(x => arg));
    fnFactory.mockImplementationOnce(() => Promise.reject());

    const r = exec(fnFactory);
    await nextTick();

    expect(isRetrying.value).toBe(true);
    expect(retryErrors.value).toHaveLength(1);
    expect(nextRetry.value).toBe(Date.now() + 200);

    cancel();
    await nextTick();
    await r;

    expect(isRetrying.value).toBe(false);
    expect(retryErrors.value[1]).toMatchObject({
      message: "[useRetry] cancelled"
    });
    expect(nextRetry.value).toBeUndefined();

    expect(r).resolves.toBeNull();
  });

  it("should cancel right after the value is resolved", () => {
    const { exec, cancel } = useRetry(
      { maxRetries: 2, retryDelay: () => 200 },
      fnFactory
    );

    fnFactory.mockImplementation(async arg => {
      await promisedTimeout(50);
      cancel();
      return arg;
    });

    return expect(exec()).resolves.toBeNull();
  });

  it("should cancel right after the retry delay", () => {
    const { exec, cancel } = useRetry(
      { maxRetries: 2, retryDelay: () => 200 },
      fnFactory
    );

    fnFactory.mockImplementation(() => {
      setTimeout(() => cancel(), 10);
      return Promise.reject();
    });

    return expect(exec()).resolves.toBeNull();
  });

  it("should throw if options is not an factory", () => {
    expect(() => useRetry(1 as any)).toThrowError(
      "[useRetry] options needs to be 'object'"
    );
  });

  it("should throw if factory is not a function", () => {
    expect(() => useRetry({}, 1 as any)).toThrowError(
      "[useRetry] factory needs to be 'function'"
    );
  });

  it("should get exponentialDelay", () => {
    const random = Math.random;
    Math.random = jest.fn(() => 1);

    try {
      expect(
        new Array(10)
          .fill(1)
          .map((_, i) => i)
          .map(exponentialDelay)
      ).toMatchObject([
        120,
        240,
        480,
        960,
        1920,
        3840,
        7680,
        15360,
        30720,
        61440
      ]);
    } finally {
      Math.random = random;
    }
  });

  it("should delay until date", async () => {
    Date.now = dateNow;
    const untilDate = Date.now() + 500;

    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => untilDate },
      fnFactory
    );
    fnFactory.mockImplementation(arg => arg);
    fnFactory.mockImplementationOnce(() => Promise.reject());

    await expect(exec(1)).resolves.toBe(1);

    expect(Date.now()).toBeGreaterThanOrEqual(untilDate);
  });

  it("should retryDelay can return Date object", async () => {
    Date.now = dateNow;
    const untilDate = Date.now() + 500;

    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => new Date(untilDate) },
      fnFactory
    );
    fnFactory.mockImplementation(arg => arg);
    fnFactory.mockImplementationOnce(() => Promise.reject());

    await expect(exec(1)).resolves.toBe(1);

    expect(Date.now()).toBeGreaterThanOrEqual(untilDate);
  });

  it("should retryDelay can return [Promise]", async () => {
    Date.now = dateNow;
    const untilDate = Date.now() + 500;

    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => Promise.resolve(untilDate) },
      fnFactory
    );
    fnFactory.mockImplementation(arg => arg);
    fnFactory.mockImplementationOnce(() => Promise.reject());

    await expect(exec(1)).resolves.toBe(1);

    expect(Date.now()).toBeGreaterThanOrEqual(untilDate);
  });

  it("should allow Promise<void> to override the delay", async () => {
    Date.now = dateNow;
    const untilDate = Date.now() + 50;

    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => promisedTimeout(50) },
      fnFactory
    );
    fnFactory.mockImplementation(arg => arg);
    fnFactory.mockImplementationOnce(() => Promise.reject());

    await expect(exec(1)).resolves.toBe(1);

    expect(Date.now()).toBeGreaterThanOrEqual(untilDate);
  });

  it("should throw if retryDelay returns 'string'", () => {
    Date.now = dateNow;
    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => "error" as any },
      fnFactory
    );
    fnFactory.mockImplementation(() => Promise.reject());

    return expect(exec()).rejects.toThrowError(
      "[useRetry] invalid value received from options.retryDelay 'string'"
    );
  });

  it("should throw if retryDelay returns 'object'", () => {
    Date.now = dateNow;
    const { exec } = useRetry(
      { maxRetries: 10, retryDelay: () => ({ foo: "error" } as any) },
      fnFactory
    );
    fnFactory.mockImplementation(() => Promise.reject());

    return expect(exec()).rejects.toThrowError(
      "[useRetry] invalid value received from options.retryDelay 'object'"
    );
  });
});
