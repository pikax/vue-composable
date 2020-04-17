import { useNow, NowOptions } from "./now";
import { isBoolean } from "../utils";

/**
 * Reactive `Date.now()` with specified refresh rate
 * @param options - Configuration
 */
export function useDateNow(options?: NowOptions) {
  const refreshMs = (options && options.refreshMs) || 1000;
  const sync = options && isBoolean(options.sync) ? options.sync : true;

  return useNow({
    refreshMs,
    sync,
    timeFn: Date.now
  });
}
