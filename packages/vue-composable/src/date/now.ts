import { ref, onUnmounted, Ref } from "../api";
import { isFunction, isClient, NO_OP, isBoolean } from "../utils";

export interface NowOptions {
  /**
   * Refresh rate in milliseconds that the now gets updated
   * @default 1000
   */
  refreshMs?: number;

  /**
   * Sync with the clock by the second
   * @default true
   */
  sync?: boolean;
}

export interface UseNowOptions {
  /**
   * Function called when refresh the date
   *  * @example
   * ```ts
   *  () => Date.now()
   * // or
   * () => performance.now()
   * ```
   */
  timeFn?: () => number;
}

export interface NowReturn {
  /**
   * Now
   */
  now: Ref<number>;
  /**
   * Stop updating now
   */
  remove: () => void;
}

/**
 * Reactive custom timer with specified refresh rate
 * @param options - Configuration
 */
export function useNow(options?: NowOptions & UseNowOptions) {
  const SYNC_MS = 1000;
  const ms = (options && options.refreshMs) || SYNC_MS;
  const sync = options && isBoolean(options.sync) ? options.sync : true;
  const fn =
    (options && isFunction(options.timeFn) && options.timeFn) || Date.now;
  /* istanbul ignore else */
  if (__DEV__) {
    if (options && options.timeFn && isFunction(options.timeFn) === false) {
      console.warn("[useNow] timeFn param must be Function");
    }
  }
  let handler: any | undefined = undefined;
  let timeoutHandler: any | undefined = undefined;
  const now = ref(fn());

  const remove = () => {
    clearInterval(handler);
    clearTimeout(timeoutHandler);
  };
  /* istanbul ignore next */
  const start = isClient
    ? () => (handler = setInterval(() => (now.value = fn()), ms))
    : NO_OP;

  if (sync) {
    const offset =
      SYNC_MS - (now.value - Math.floor(now.value / SYNC_MS) * SYNC_MS);
    timeoutHandler = setTimeout(start, offset);
  } else {
    start();
  }

  onUnmounted(remove);

  return {
    now,
    remove
  };
}
