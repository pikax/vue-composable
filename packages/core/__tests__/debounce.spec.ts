import { useDebounce, promisedTimeout } from "../src";


describe('debounce', () => {
  it('should call the function', async () => {
    const fn = jest.fn();
    const ms = 10;
    useDebounce(fn, ms)();
    expect(fn).not.toHaveBeenCalled();

    await promisedTimeout(ms)

    expect(fn).toBeCalledTimes(1);
  })

  it('should call the function only once', async () => {
    const fn = jest.fn();
    const ms = 10;

    const debounce = useDebounce(fn, ms);
    for (let i = 0; i < 10; i++) {
      debounce();
    }
    expect(fn).not.toHaveBeenCalled();

    await promisedTimeout(ms)

    expect(fn).toBeCalledTimes(1);
  })

  it('should call the function immediate', async () => {
    const fn = jest.fn();
    const ms = 10;

    const debounce = useDebounce(fn, ms, { isImmediate: true });
    debounce();

    expect(fn).toBeCalledTimes(1);

    for (let i = 0; i < 10; i++) {
      debounce();
    }
    await promisedTimeout(ms)

    expect(fn).toBeCalledTimes(1);
  })

  it('should set wait to 50ms if not passed', async () => {
    let pResolver: any = null;
    const p = new Promise((r) => {
      pResolver = r;
    });
    const fn = jest.fn().mockImplementation(pResolver);
    const start = Date.now();

    const debounce = useDebounce(fn);
    debounce();
    await p;
    const duration = Date.now() - start;
    expect(fn).toBeCalledTimes(1);

    expect(duration).toBeGreaterThanOrEqual(20);
    expect(duration).toBeLessThanOrEqual(60);
  })

})