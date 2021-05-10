import { useShare } from "../../src";
import { nextTick } from "../utils";
// import {} from "../../src/api";

describe("share", () => {
  const shareSpy = jest.fn();
  const canShareSpy = jest.fn();

  beforeEach(() => {
    Object.defineProperty(navigator, "share", {
      writable: true,
      configurable: true,

      value: shareSpy,
    });

    Object.defineProperty(navigator, "canShare", {
      writable: true,
      configurable: true,
      value: canShareSpy,
    });
    canShareSpy.mockClear();
    shareSpy.mockClear();
  });

  it("should be supported", () => {
    const { supported } = useShare();

    expect(supported).toBe(true);
  });

  it("should share", () => {
    const s = {};
    shareSpy.mockResolvedValueOnce(s);
    const { share } = useShare();
    const data = {};
    expect(share(data)).resolves.toBe(s);
    expect(shareSpy).toBeCalledWith(data);
  });

  it("should not throw if not supported", () => {
    // @ts-ignore
    delete navigator.share;
    const share = useShare();

    expect(share.supported).toBe(false);

    expect(share.canShare({})).toBe(false);
    expect(share.share({})).resolves.toBe(false);
    expect(share.cancelled.value).toBe(false);
    expect(share.shared.value).toBe(false);
  });

  it("should set shared", async () => {
    let resCb: Function = {} as any;
    shareSpy.mockReturnValueOnce(new Promise((res) => (resCb = res)));

    const { share, shared, cancelled } = useShare();

    const p = share({});
    expect(shared.value).toBe(false);
    expect(cancelled.value).toBe(false);

    await nextTick();
    expect(shared.value).toBe(false);
    expect(cancelled.value).toBe(false);

    resCb();
    await p;
    await nextTick();
    expect(shared.value).toBe(true);
    expect(cancelled.value).toBe(false);

    shareSpy.mockReturnValueOnce(new Promise((res) => (resCb = res)));
    share({});
    // resets
    await nextTick();
    expect(shared.value).toBe(false);
    expect(cancelled.value).toBe(false);
  });

  it("should set cancelled", async () => {
    let rejCb: Function = {} as any;
    shareSpy.mockImplementation(() => new Promise((_, rej) => (rejCb = rej)));

    const { share, shared, cancelled } = useShare();

    const p = share({});
    expect(shared.value).toBe(false);

    await nextTick();
    expect(shared.value).toBe(false);

    rejCb({ a: 1 });
    await expect(p).resolves.toBe(false);
    await nextTick();
    expect(shared.value).toBe(false);
    expect(cancelled.value).toBe(true);

    share({});
    // resets
    await nextTick();
    expect(shared.value).toBe(false);
    expect(cancelled.value).toBe(false);
  });

  it("should share if data is passed", () => {
    let resCb: Function = {} as any;
    shareSpy.mockReturnValueOnce(new Promise((res) => (resCb = res)));
    canShareSpy.mockReturnValue(true);

    const data = {};
    useShare(data);
    resCb();

    expect(canShareSpy).toHaveBeenCalledWith(data);
    expect(shareSpy).toHaveBeenCalledWith(data);
  });
  it("should not share if canShare is false", () => {
    let resCb: Function = {} as any;
    shareSpy.mockReturnValueOnce(new Promise((res) => (resCb = res)));
    canShareSpy.mockReturnValue(false);

    const data = {};
    useShare(data);
    resCb();

    expect(canShareSpy).toHaveBeenCalledWith(data);
    expect(shareSpy).not.toHaveBeenCalled();
  });
});
