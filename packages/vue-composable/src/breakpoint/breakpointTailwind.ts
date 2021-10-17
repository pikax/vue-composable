import { InjectionKey, provide } from "../api";
import {
  BreakpointReturn,
  BreakpointObject,
  useBreakpoint,
} from "./breakpoint";
import { isArray, isString, isObject, isNumber } from "../utils";
import { injectFactory } from "../misc";

// istanbul ignore next
const BREAKPOINT_TAILWIND_KEY: InjectionKey<any> = /*#__PURE__*/ Symbol(
  (__DEV__ && "TAILWIND_BREAKPOINTS") || ``
);

export interface DefaultTailwindBreakpoints {
  sm: 640;
  md: 768;
  lg: 1024;
  xl: 1280;
}

const defaultTailwindBreakpoint: BreakpointObject = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as DefaultTailwindBreakpoints as any;

export interface TailwindScreenBreakpointRaw {
  raw: string;
}

export interface TailwindScreenBreakpointRange {
  min?: string | number;
  max?: string | number;
}

export type TailwindScreen =
  | TailwindScreenBreakpointRaw
  | TailwindScreenBreakpointRange
  | number
  | string
  | Array<TailwindScreenBreakpointRange>;

export interface TailwindConfigEmpty {
  theme: {
    screens: Record<
      string,
      TailwindScreen | Array<TailwindScreen> | undefined | null
    >;
  };
}

export interface TailwindConfig extends TailwindConfigEmpty {
  theme: {
    screens: BreakpointObject;
  };
}

export type ExtractTailwindScreens<T extends TailwindConfigEmpty> =
  keyof T["theme"]["screens"] extends never
    ? DefaultTailwindBreakpoints
    : T["theme"]["screens"];

export function isTailwind(t: any): t is TailwindConfig {
  return isObject(t) && isObject(t.theme) && isObject(t.theme.screens);
}

export function isRawScreen(t: any): t is TailwindScreenBreakpointRaw {
  return isObject(t) && isString(t.raw);
}

export function isRangeScreen(t: any): t is TailwindScreenBreakpointRange {
  if (!isObject(t)) return false;
  return (
    isString(t.min) || isString(t.max) || isNumber(t.min) || isNumber(t.max)
  );
}

/**
 * Sanitize width value, if number is passed it will append `px`
 * @param s width value
 */
function sanitizeWidth(s: string | number) {
  return isNumber(s) ? s + "px" : s;
}

export function screenRangeToBreakpoint(s: TailwindScreenBreakpointRange) {
  if (!isRangeScreen(s)) {
    // istanbul ignore else
    if (__DEV__) {
      console.warn(
        "[useBreakpointTailwind] screen range provided is not valid"
      );
    }
    return "";
  }
  const condition = [
    s.max && `max-width: ${sanitizeWidth(s.max)}`,
    s.min && `min-width: ${sanitizeWidth(s.min)}`,
  ]
    .filter(Boolean)
    .join(" and ");

  return `(${condition})`;
}

export function screenToBreakpoint(s: TailwindScreen): string[] {
  const conditions: string[] = [];

  if (isArray(s)) {
    const bks = s.map(screenToBreakpoint);
    for (let i = 0; i < bks.length; i++) {
      const b = bks[i];
      conditions.push(...b);
    }
  } else if (isRawScreen(s)) {
    conditions.push(s.raw);
  } else if (isRangeScreen(s)) {
    conditions.push(screenRangeToBreakpoint(s));
  } else if (isString(s) || isNumber(s)) {
    conditions.push(`(min-width: ${sanitizeWidth(s)})`);
  } else {
    // istanbul ignore else
    if (__DEV__) {
      console.warn(
        "[useBreakpointTailwind] unknown type used for the breakpoint`"
      );
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
      // istanbul ignore else
      if (bk.hasOwnProperty(k)) {
        const v = bk[k];

        if (isObject(v)) {
          bk[k] = screenToBreakpoint(bk[k]).join(" or ");
        } else if (isString(v)) {
          if (!v.endsWith("px")) {
            bk[k] = screenToBreakpoint(bk[k]).join(" or ");
          }
        }
      }
    }
  }

  const bp = useBreakpoint<any>(bk);
  provide(BREAKPOINT_TAILWIND_KEY, bp);
  return bp;
}

export function useBreakpointTailwindCSS<T extends TailwindConfigEmpty>(
  tailwindConfig: T
): BreakpointReturn<ExtractTailwindScreens<T>>;
export function useBreakpointTailwindCSS<
  T extends TailwindConfigEmpty
>(): BreakpointReturn<ExtractTailwindScreens<T>>;
export function useBreakpointTailwindCSS(): BreakpointReturn<DefaultTailwindBreakpoints>;
export function useBreakpointTailwindCSS<
  T extends BreakpointObject
>(): BreakpointReturn<T>;
export function useBreakpointTailwindCSS(config?: any): any {
  return injectFactory(BREAKPOINT_TAILWIND_KEY, () =>
    setBreakpointTailwindCSS(config || defaultTailwindBreakpoint)
  );
}
