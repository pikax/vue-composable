import { inject, InjectionKey, provide } from "@vue/runtime-core";
import {
  BreakpointReturn,
  BreakpointObject,
  useBreakpoint
} from "./breakpoint";
import { isArray, isString, isObject } from "@vue-composable/core";

const BREAKPOINT_TAILWIND_KEY: InjectionKey<any> = /*#__PURE__*/ Symbol(
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

interface TailwindScreenBreakpointRaw {
  raw: string;
}

interface TailwindScreenBreakpointRange {
  min?: string;
  max?: string;
}

type TailwindScreen =
  | TailwindScreenBreakpointRaw
  | TailwindScreenBreakpointRange
  | string
  | Array<TailwindScreenBreakpointRange>;

interface TailwindConfigEmpty {
  theme: {
    screens: TailwindScreen | Array<TailwindScreen> | undefined | null;
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

function isRawScreen(t: any): t is TailwindScreenBreakpointRaw {
  return isString(t.raw);
}

function isRangeScreen(t: any): t is TailwindScreenBreakpointRange {
  return isString(t.min) || isString(t.max);
}

function screenRangeToBreakpoint(s: TailwindScreenBreakpointRange) {
  const condition = [
    s.max && `max-width: ${s.max}`,
    s.min && `min-width: ${s.min}`
  ].join(" and ");

  return `(${condition})`;
}

function screenToBreakpoint(s: TailwindScreen): string[] {
  const conditions: string[] = [];

  if (isArray(s)) {
    const bks = s.map(screenToBreakpoint);
    for (let i = 0; i < bks.length; i++) {
      const b = bks[i];
      conditions.push(...b);
    }
  } else {
    if (isRawScreen(s)) {
      conditions.push(s.raw);
    } else if (isRangeScreen(s)) {
      conditions.push(screenRangeToBreakpoint(s));
    } else {
      conditions.push(`min-width: ${s}`);
    }
  }
  return conditions;
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

  if (isTailwind(breakpoints)) {
    for (const k in bk) {
      if (bk.hasOwnProperty(k)) {
        bk[k] = screenToBreakpoint(bk).join(" or ");
      }
    }
  }

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
