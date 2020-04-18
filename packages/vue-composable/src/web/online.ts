import { Ref, ref } from "../api";
import { isClient, PASSIVE_EV } from "../utils";

let online: Ref<boolean> | undefined = undefined;
export function useOnline() {
  const supported = isClient && "onLine" in navigator;

  // not sure how to test this :/
  if (!supported) {
    online = ref(false);
  }

  if (!online) {
    online = ref(navigator.onLine);
    window.addEventListener(
      "offline",
      () => (online!.value = false),
      PASSIVE_EV
    );
    window.addEventListener("online", () => (online!.value = true), PASSIVE_EV);
  }

  return {
    supported,
    online
  };
}
