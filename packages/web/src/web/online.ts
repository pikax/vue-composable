import { Ref, ref } from "@vue/runtime-core";
import { isClient } from "@vue-composable/core";

let online: Ref<boolean> | undefined = undefined;
export function useOnline() {
  const supported = isClient && "onLine" in navigator;

  // not sure how to test this :/
  if (!supported) {
    online = ref(false);
  }

  if (!online) {
    online = ref(navigator.onLine);
    window.addEventListener("offline", () => (online!.value = false), {
      passive: true
    });
    window.addEventListener("online", () => (online!.value = true), {
      passive: true
    });
  }

  return {
    supported,
    online
  };
}
