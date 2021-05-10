import { createVue } from "../utils";
import { NowOptions, usePerformanceNow } from "../../src";
import * as nowModule from "../../src/date/now";

type CoreTypes = typeof import("../../src"); // This is the import type!

describe("performanceNow", () => {
  jest.spyOn(nowModule, "useNow");
  jest.useFakeTimers();

  const PerformanceNow = performance.now;
  const nowMock = (performance.now = jest
    .fn()
    .mockImplementation(() => 10000000.00000000001));

  beforeEach(() => {
    nowMock.mockClear();
    jest.clearAllTimers();
    (setTimeout as any).mockClear();
    (setInterval as any).mockClear();
    (clearInterval as any).mockClear();

    (nowModule.useNow as any).mockClear();
  });

  afterAll(() => {
    performance.now = PerformanceNow;
  });

  const buildUsePerformanceNow = (options?: NowOptions) => {
    let r: ReturnType<CoreTypes["usePerformanceNow"]> = undefined as any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        r = usePerformanceNow(options);
        return;
      },
    });
    mount();
    destroy();
    return r;
  };

  it("should return performance.now", () => {
    const { now } = buildUsePerformanceNow();

    expect(nowModule.useNow).toHaveBeenCalledTimes(1);
    expect(performance.now).toHaveBeenCalled();
    expect(now.value).toBe(nowMock());
    expect(setTimeout).toHaveBeenCalled();
  });

  it("should not sync", () => {
    const sync = false;
    const { now } = buildUsePerformanceNow({
      sync,
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync,
        refreshMs: 1000,
      }),
    );
  });

  it("should sync if sync is not boolean", () => {
    const sync: any = () => "sync";
    const { now } = buildUsePerformanceNow({
      sync,
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync: true,
        refreshMs: 1000,
      }),
    );
  });

  it("should pass the refreshMs", () => {
    const refreshMs = 444;
    const { now } = buildUsePerformanceNow({
      refreshMs,
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync: true,
        refreshMs,
      }),
    );
  });
});
