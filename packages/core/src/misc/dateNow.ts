import { useNow, NowOptions } from "./now";


export function useDateNow(options?: NowOptions) {
  const refreshMs = options && options.refreshMs || 1000;
  const sync = options && options.sync || true;

  return useNow({
    refreshMs,
    sync,
    timeFn: Date.now
  })
}