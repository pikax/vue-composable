import { NowOptions, useNow, UseNowOptions } from "../../src";
import { createVue } from "../utils";
type CoreTypes = typeof import("../../src"); // This is the import type!

describe("now", () => {
  jest.useFakeTimers();

  const DateNow = Date.now;
  let warnSpy: jest.SpyInstance = undefined as any;
  beforeAll(() => {
    warnSpy = jest.spyOn(console, "warn").mockImplementation();
  });

  beforeEach(() => {
    warnSpy.mockReset();
  });

  afterAll(() => {
    warnSpy.mockReset();
  });

  const nowMock = (Date.now = jest
    .fn()
    .mockImplementation(() => 1000000000000));

  beforeEach(() => {
    nowMock.mockClear();
    jest.clearAllTimers();
    (setTimeout as any).mockClear();
    (setInterval as any).mockClear();
    (clearInterval as any).mockClear();

    (clearTimeout as any).mockClear();
  });

  afterAll(() => {
    Date.now = DateNow;
  });

  const buildUseNow = (options?: NowOptions & UseNowOptions) => {
    let r: ReturnType<CoreTypes["useNow"]> = undefined as any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        r = useNow(options);
        return;
      },
    });
    mount();
    destroy();
    return r;
  };

  it("should return now", () => {
    const { now } = buildUseNow();

    expect(now.value).toBe(nowMock());
  });

  it("should warn if options dateFn is not a function", () => {
    const { now } = buildUseNow({
      timeFn: 1234,
    } as any);

    // check if we fallback to Date.now
    expect(now.value).toBe(nowMock());
    expect(warnSpy).toHaveBeenCalledWith(
      "[useNow] timeFn param must be Function",
    );
  });

  it("should use the dateFn to resolve date", () => {
    const dateNow = 9000;
    const timeFn = jest.fn().mockImplementation(() => dateNow);
    const { now } = buildUseNow({
      timeFn,
      sync: false,
    });

    expect(now.value).toBe(dateNow);
    expect(timeFn).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it("it should synchronise by the second with the clock", () => {
    const dateNow = 10150;
    const timeFn = jest.fn().mockImplementation(() => dateNow);

    const { now } = buildUseNow({ timeFn });

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 850);
    expect(now.value).toBe(dateNow);
  });

  it("it should unmount automatically", () => {
    // const vm = new Vue({
    //   template: "<div></div>",
    //   setup() {
    //     return useNow();
    //   },
    // });
    // vm.$mount();
    // vm.$destroy();
    // const el = document.createElement("div");
    // render(
    //   h({
    //     setup() {
    //       useNow();
    //       return () => {
    //         h("div");
    //       };
    //     },
    //   }),
    //   el
    // );

    // render(null, el);

    const { destroy, mount } = createVue({
      template: "<div></div>",
      setup() {
        return useNow();
      },
    });
    mount();
    destroy();

    // createApp({
    //   template: "<div></div>",
    //   setup() {
    //     return useNow();
    //   },
    // }).mount(document.createElement("div"));

    expect(clearInterval).toHaveBeenCalled();
  });

  it("should refresh at the refresh rate passed in props", () => {
    const refreshMs = 555;
    const { now } = buildUseNow({
      sync: false,
      refreshMs,
    });

    expect(now.value).toBe(nowMock());
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), refreshMs);
  });

  it("should clear timeout if remove is called", () => {
    const { remove } = buildUseNow();

    expect(setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Number),
    );
    remove();
    expect(clearTimeout).toHaveBeenCalled();
  });

  it("should clear interval if remove is called", () => {
    const { remove } = buildUseNow({ sync: false });

    expect(setInterval).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Number),
    );
    remove();
    expect(clearInterval).toHaveBeenCalled();
  });
});
