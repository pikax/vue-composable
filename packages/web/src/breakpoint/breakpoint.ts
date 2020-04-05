import { Ref, onMounted, ref, onUnmounted } from "@vue/composition-api";
import { RemoveEventFunction } from "../event/event";
import { useMatchMedia } from "../misc/matchMedia";
import {
  useDebounce,
  isNumber,
  isClient,
  NO_OP,
  PASSIVE_EV
} from "@vue-composable/core";

function getBreakpointWidth(bp: string | number) {
  if (!bp) return undefined;
  if (isNumber(bp)) return bp;

  return isValidWidthBreakpoint(bp);
}

const isValidWidthBreakpoint = (bp: string) => {
  const m = bp.match(/^(\d+)px$/);
  if (m) {
    return +m[1];
  }
  return undefined;
};

export type BreakpointObject = Record<string, string | number>;

export interface BreakpointReturnObject<T> {
  remove: RemoveEventFunction;
  current: Ref<keyof T | undefined>;
}

export type BreakpointReturn<T> = Record<keyof T, Ref<boolean>> &
  BreakpointReturnObject<T>;

export function useBreakpoint<T extends BreakpointObject>(
  breakpoints: Record<keyof T, number | string>
): BreakpointReturn<T> {
  const result: Record<keyof T, Ref<boolean>> = {} as any;
  const map = new Map<
    number | string,
    {
      name: keyof T;
      valid: Ref<boolean>;
    }
  >();
  const current = ref<keyof T>();
  let sorted: number[] = [];
  const removeMedia: Array<() => void> = [];

  for (const key in breakpoints) {
    const bp: string | number = breakpoints[key];
    const width = getBreakpointWidth(bp);
    if (width !== undefined) {
      const r = ref(false);
      result[key] = r;
      map.set(width, {
        name: key,
        valid: r
      });
      sorted.push(width);
    } else {
      const { matches, remove } = useMatchMedia(bp as string);
      result[key] = matches;
      removeMedia.push(remove);
    }
  }

  sorted = sorted.sort((a, b) => b - a);

  const resize = isClient
    ? () => {
        const width = window.innerWidth;
        let c = undefined;
        for (let i = 0; i < sorted.length; i++) {
          const bp = sorted[i];
          const r = map.get(bp)!;
          r.valid.value = width >= bp;
          if (width >= bp && c === undefined) {
            c = r.name;
          }
        }
        current.value = c;
      }
    : NO_OP;

  const processResize = useDebounce(resize, 10);

  const remove = isClient
    ? () => window.removeEventListener("resize", processResize)
    : NO_OP;

  if (isClient) {
    onMounted(() => {
      resize();
      window.addEventListener("resize", processResize, PASSIVE_EV);
    });

    onUnmounted(() => {
      remove();
      removeMedia.forEach(x => x());
    });
  }

  return {
    ...result,
    remove,
    current
  };
}
