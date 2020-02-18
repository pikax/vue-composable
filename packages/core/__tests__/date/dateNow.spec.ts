import { Vue } from "../utils";
import { NowOptions, useDateNow } from "../../src";
import * as nowModule from "../../src/date/now";

type CoreTypes = typeof import("../../src"); // This is the import type!

describe("dateNow", () => {
  jest.spyOn(nowModule, "useNow");
  jest.useFakeTimers();

  const DateNow = Date.now;
  const nowMock = (Date.now = jest
    .fn()
    .mockImplementation(() => 1000000000000));

  beforeEach(() => {
    nowMock.mockClear();
    jest.clearAllTimers();
    (setTimeout as any).mockClear();
    (setInterval as any).mockClear();
    (clearInterval as any).mockClear();

    (nowModule.useNow as any).mockClear();
  });

  afterAll(() => {
    Date.now = DateNow;
  });

  const buildUseDateNow = (options?: NowOptions) => {
    let r: ReturnType<CoreTypes["useDateNow"]> = undefined as any;
    const vm = new Vue({
      template: "<div></div>",
      setup() {
        r = useDateNow(options);
        return;
      }
    });
    vm.$mount();
    vm.$destroy();
    return r;
  };

  it("should return Date.now", () => {
    const { now } = buildUseDateNow();

    expect(nowModule.useNow).toHaveBeenCalledTimes(1);
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        timeFn: Date.now
      })
    );
    expect(now.value).toBe(nowMock());
    expect(setTimeout).toHaveBeenCalled();
  });

  it("should not sync", () => {
    const sync = false;
    const { now } = buildUseDateNow({
      sync
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync,
        refreshMs: 1000
      })
    );
  });

  it("should sync if sync is not boolean", () => {
    const sync: any = () => "sync";
    const { now } = buildUseDateNow({
      sync
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync: true,
        refreshMs: 1000
      })
    );
  });

  it("should pass the refreshMs", () => {
    const refreshMs = 444;
    const { now } = buildUseDateNow({
      refreshMs
    });

    expect(now.value).toBe(nowMock());
    expect(nowModule.useNow).toHaveBeenCalledWith(
      expect.objectContaining({
        sync: true,
        refreshMs
      })
    );
  });
});
