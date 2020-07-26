import { onUnmounted } from "../api";

export interface UseIntervalReturn {
  start(ms: number, ...args: any[]): number;
  remove(): void;
}

export const useInterval = (
  callback: (...args: any[]) => void,
  ms: number,
  ...args: any[]
): UseIntervalReturn => {
  let intervalId: number;

  const start = (_ms?: number, ..._args: any[]) =>
    (intervalId = setInterval(callback, _ms || ms, _args || args) as any);

  const remove = () => clearInterval(intervalId);

  start();

  onUnmounted(remove);
  return { remove, start };
};
