import { BreakpointReturn, useBreakpoint } from "./breakpoint";

type ChromeBreakpoint = {
  mobileS: 320;
  mobileM: 375;
  mobileL: 425;
  tablet: 768;
  laptop: 1024;
  laptopL: 1440;
  desktop4K: 2560;
};

export function useBreakpointChrome(): BreakpointReturn<ChromeBreakpoint> {
  return useBreakpoint({
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop4K: 2560,
  }) as BreakpointReturn<ChromeBreakpoint>;
}
