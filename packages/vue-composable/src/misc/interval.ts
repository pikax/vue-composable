import { onUnmounted } from "../api";
import { isNumber } from "../utils";

export interface UseIntervalReturn<TArgs extends Array<any> = []> {
  start(ms: number, ...args: TArgs): number;

  remove(): void;
}

export interface UseIntervalReturnMs {
  start(): number;
}

export interface UseIntervalReturnArgs<TArgs extends Array<any>> {
  start(_: undefined, ...args: TArgs): number;
}

export function useInterval<TArgs extends Array<any>>(
  callback: (...args: TArgs) => void,
  ms?: false,
  ...args: TArgs
): UseIntervalReturn<TArgs>;

export function useInterval<TArgs extends Array<any>>(
  callback: (...args: TArgs) => void,
  ms?: false,
): UseIntervalReturn<TArgs>;

export function useInterval<TArgs extends Array<any>>(
  callback: (...args: TArgs) => void,
  ms: number,
  ...args: TArgs
):
  & UseIntervalReturn<TArgs>
  & UseIntervalReturnMs
  & UseIntervalReturnArgs<TArgs>;

export function useInterval<TArgs extends Array<any>>(
  callback: (...args: TArgs) => void,
  ms?: number | false,
  ...args: TArgs
):
  & UseIntervalReturn<TArgs>
  & UseIntervalReturnMs
  & UseIntervalReturnArgs<TArgs> {
  let intervalId: number | undefined = undefined;

  const start = (_ms?: number, ..._args: any[]) => {
    remove();
    if (!_ms && !ms) {
      return;
    }
    const m = (_ms || ms) as number;
    return (intervalId = setInterval(
      callback,
      m,
      ...(_args && _args.length ? _args : args),
    ) as any);
  };

  const remove = () => {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = undefined;
  };

  if (isNumber(ms)) {
    start();
  }

  onUnmounted(remove);
  return { remove, start };
}

// TODO move this:  type checkings
// useInterval((x: number) => {}).start();
// useInterval((x: number) => {}, 100, 1).start();
// useInterval(() => {}).start();
