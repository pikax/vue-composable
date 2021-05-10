import { Ref, ref } from "../api";
import { isClient, PASSIVE_EV } from "../utils";

let visibility: Ref<VisibilityState> | undefined = undefined;
let hidden: Ref<boolean> | undefined = undefined;

export function usePageVisibility() {
  if (!hidden) {
    hidden = ref(isClient && document.hidden);
  }

  if (!visibility) {
    if (isClient) {
      visibility = ref(document.visibilityState);
      document.addEventListener(
        "visibilitychange",
        () => {
          visibility!.value = document.visibilityState;
          hidden!.value = document.hidden;
        },
        PASSIVE_EV,
      );
    } else {
      visibility = ref<VisibilityState>("visible");
    }
  }
  return {
    visibility,
    hidden,
  };
}
