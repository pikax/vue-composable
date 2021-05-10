jest.mock("../../src/utils", () => ({
  //@ts-ignore
  ...jest.requireActual("../../src/utils"),
  isClient: false,
}));
import { useShare } from "../../src/web/share";

describe("useShare SSR", () => {
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

  it("should not be supported", () => {
    expect(useShare().supported).toBe(false);
  });
});
