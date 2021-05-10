/**
 * Create `debounced` function, options object can be changed after creation to update behaviour
 * @param handler - function to be debounced
 * @param wait - debounce ms
 * @param options - debounce options
 */
export function useDebounce<T extends Procedure>(
  handler: T,
  wait?: number,
  options?: Options,
): T {
  return debounce(handler, wait, options);
}

/**
 * A function that emits a side effect and does not return anything.
 * https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
 */
export type Procedure = (...args: any[]) => void;

export type Options = {
  /**
   * calls debounce immediately
   */
  isImmediate: boolean;
};

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false,
  },
): F {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: any[]) {
    const context = this;

    const doLater = function () {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    };

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  } as any;
}
