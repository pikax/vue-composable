import { inject, InjectionKey, provide } from "@vue/composition-api";
import {
  BreakpointReturn,
  BreakpointObject,
  useBreakpoint
} from "./breakpoint";
import { isObject } from "@vue-composable/core";

const BREAKPOINT_TAILWIND_KEY: InjectionKey<any> = Symbol(
  (__DEV__ && "TAILWIND_BREAKPOINTS") || ``
);

export interface DefaultTailwindBreakpoints {
  sm: 640;
  md: 768;
  lg: 1024;
  xl: 1280;
}

const defaultTailwindBreakpoint: BreakpointObject = ({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
} as DefaultTailwindBreakpoints) as any;

interface TailwindConfigEmpty {
  theme: {
    screens: {} | undefined | null;
  };
}

interface TailwindConfig extends TailwindConfigEmpty {
  theme: {
    screens: BreakpointObject;
  };
}

export type ExtractTailwindScreens<
  T extends TailwindConfigEmpty
> = keyof T["theme"]["screens"] extends never
  ? DefaultTailwindBreakpoints
  : T["theme"]["screens"];

function isTailwind(t: any): t is TailwindConfig {
  return isObject(t.theme) && isObject(t.theme.screen);
}

export function setBreakpointTailwindCSS<T extends TailwindConfigEmpty>(
  tailwindConfig: T
): BreakpointReturn<ExtractTailwindScreens<T>>;
export function setBreakpointTailwindCSS<T extends BreakpointObject>(
  breakpoints: T
): BreakpointReturn<T>;
export function setBreakpointTailwindCSS<T extends BreakpointObject>(
  breakpoints: T | TailwindConfig
): BreakpointReturn<any> {
  const bk = isTailwind(breakpoints) ? breakpoints.theme.screens : breakpoints;
  const bp = useBreakpoint(bk);
  provide(BREAKPOINT_TAILWIND_KEY, bp);
  return bp;
}

export function useBreakpointTailwindCSS<T extends TailwindConfigEmpty>(
  tailwindConfig: T
): BreakpointReturn<ExtractTailwindScreens<T>>;
export function useBreakpointTailwindCSS<
  T extends TailwindConfigEmpty
>(): BreakpointReturn<ExtractTailwindScreens<T>>;
export function useBreakpointTailwindCSS(): BreakpointReturn<
  DefaultTailwindBreakpoints
>;
export function useBreakpointTailwindCSS<
  T extends BreakpointObject
>(): BreakpointReturn<T>;
export function useBreakpointTailwindCSS(config?: any): any {
  const b = inject(BREAKPOINT_TAILWIND_KEY);
  if (b) {
    return b;
  }
  return setBreakpointTailwindCSS(config || defaultTailwindBreakpoint);
}
