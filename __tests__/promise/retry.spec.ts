import { useRetry } from "../../src/promise/retry";
import { promisedTimeout } from "../../src/utils";
import { nextTick } from "../utils";

describe("retry", () => {
  const fnFactory = jest.fn();
  let dateNow = Date.now;

  beforeAll(()=>{
      Date.now = jest.fn(()=> 0);
  })

  afterAll(()=>{
    Date.now = dateNow;
  })

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

  it("should retry until it fails", async ()=> {
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
  })
});
