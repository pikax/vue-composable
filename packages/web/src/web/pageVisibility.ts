import { ref, Ref } from "@vue/runtime-core";

let visibility: Ref<VisibilityState> | undefined = undefined;
let hidden: Ref<boolean> | undefined = undefined;

export function usePageVisibility() {
  if (!hidden) {
    hidden = ref(document.hidden);
  }
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
  return {
    visibility,
    hidden
  };
}
