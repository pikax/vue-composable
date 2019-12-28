import { Ref, onMounted, ref, onUnmounted } from "@vue/composition-api";
import { RemoveEventFunction } from "../event/event";
import { useMatchMedia } from "./matchMedia";
import { useDebounce, isNumber } from "@vue-composable/core";

export function useBreakpoint<T>(
  breakpoints: Record<keyof T, number | string>
): Record<keyof T, Ref<boolean>> & {
  remove: RemoveEventFunction;
  current: Ref<keyof T | undefined>;
} {
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
    if (isNumber(bp)) {
      const r = ref(false);
      result[key] = r;
      map.set(bp, {
        name: key,
        valid: r
      });
      sorted.push(bp);
    } else {
      const { matches, remove } = useMatchMedia(bp);
      result[key] = matches;
      removeMedia.push(remove);
    }
  }

  sorted = sorted.sort((a, b) => b - a);

  const resize = () => {
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
  };

  const processResize = useDebounce(resize, 10);

  const remove = () => window.removeEventListener("resize", processResize);

  onMounted(() => {
    resize();
    window.addEventListener("resize", processResize, {
      passive: true
    });
  });

  onUnmounted(() => {
    remove();
    removeMedia.forEach(x => x());
  });

  return {
    ...result,
    remove,
    current
  };
}
