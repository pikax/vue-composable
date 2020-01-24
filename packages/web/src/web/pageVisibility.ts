import { ref, Ref } from "@vue/composition-api";
import { isClient } from "@vue-composable/core";

let visibility: Ref<VisibilityState> | undefined = undefined;
let hidden: Ref<boolean> | undefined = undefined;

export function usePageVisibility() {

  if (!hidden) {
    hidden = ref(isClient && document.hidden);
  }

  if (isClient) {
    if (!visibility) {
      visibility = ref(document.visibilityState);
      document.addEventListener(
        "visibilitychange",
        () => {
          visibility!.value = document.visibilityState
          hidden!.value = document.hidden;
        },
        { passive: true }
        // true
      );
    }
  }
  return {
    visibility,
    hidden
  };
}
