jest.mock("../../src/breakpoint/breakpoint");

import { useBreakpointChrome, useBreakpoint } from "../../src";

describe("breakpointChrome", () => {
  it("should call breakpoint with chrome breakpoints", () => {
    const expected = {
      a: 1
    };
    (useBreakpoint as jest.Mock).mockImplementationOnce(() => {
      return expected;
    });

    expect(useBreakpointChrome()).toBe(expected);

    expect(useBreakpoint).toHaveBeenCalledWith({
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      tablet: 768,
      laptop: 1024,
      laptopL: 1440,
      desktop4K: 2560
    });
  });
});
