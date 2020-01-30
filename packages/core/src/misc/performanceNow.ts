import { useNow, NowOptions } from "./now";


export function usePerformanceNow(options?: NowOptions) {
  const refreshMs = options && options.refreshMs || 1000;
  const sync = options && options.sync || true;

  return useNow({
    refreshMs,
    sync,
    timeFn: performance.now
  })
}