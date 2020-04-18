import { useNow, NowOptions } from "./now";
import { isBoolean } from "../utils";

/**
 * Reactive `performance.now()` with specified refresh rate
 * @param options - Configuration
 */
export function usePerformanceNow(options?: NowOptions) {
  const refreshMs = (options && options.refreshMs) || 1000;
  const sync = options && isBoolean(options.sync) ? options.sync : true;

  return useNow({
    refreshMs,
    sync,
    timeFn: () => performance.now()
  });
}
