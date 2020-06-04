import { onUnmounted } from "../api";

export const useInterval: typeof setInterval = (...args: any[]) => {
  //@ts-ignore
  const remove = setInterval(...args);
  onUnmounted(remove);
  return remove;
};
