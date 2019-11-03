import { Ref, onMounted, ref, onUnmounted } from "@vue/composition-api";
import { useEvent, RemoveEventFunction } from "./event";
import { useDebounce } from "../debounce";

export function useBreakpoint<T>(
  breakpoints: Record<keyof T, number>
): Record<keyof T, Ref<boolean>> & {
  remove: RemoveEventFunction;
  current: Ref<keyof T | undefined>;
} {
  const result: Record<keyof T, Ref<boolean>> = {} as any;
  const map = new Map<
    number,
    {
      name: keyof T;
      valid: Ref<boolean>;
    }
  >();
  const current = ref<keyof T>();
  let sorted: number[] = [];

  for (const key in breakpoints) {
    const bp = breakpoints[key];
    const r = ref(false);
    result[key] = r;
    map.set(bp, {
      name: key,
      valid: r
    });
    sorted.push(bp);
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
  onUnmounted(() => remove());

  return {
    ...result,
    remove,
    current
  };
}
