import { ref, onUnmounted } from '@vue/composition-api';
import { isFunction, isClient, NO_OP } from "../utils";

export interface NowOptions {
  /**
   * @description - interval in ms
   */
  refreshMs?: number;

  /**
   * @description - sync with seconds the clock
   */
  sync?: boolean;
}

export interface UseNowOptions {

  /**
   * @description - time factory, it should retrieve `now` in ms 
   */
  timeFn?: () => number;
}


export function useNow(options?: NowOptions & UseNowOptions) {
  const ms = options && options.refreshMs || 1000;
  const sync = options && options.sync || true;
  const fn = options && options.timeFn || Date.now;
  if (__DEV__) {
    if (isFunction(fn) === false) {
      console.warn('[useNow] timeFn param must be Function')
    }
  }
  let handler: any | undefined = undefined;
  const now = ref(fn());

  const remove = () => clearInterval(handler)
  const start = isClient ? () => handler = setInterval(() => now.value = fn(), ms) : NO_OP;

  if (sync) {
    const offset = now.value - (Math.floor(now.value / 1000) * 1000)
    setTimeout(start, offset);
  } else {
    start();
  }

  onUnmounted(remove)

  return {
    now,
    remove
  }
}