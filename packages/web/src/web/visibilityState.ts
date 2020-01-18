import { ref, Ref } from "@vue/composition-api";

let visibility: Ref<VisibilityState> | undefined = undefined;
let hidden = ref(document.hidden);

export function useVisibilityState() {
  if (!visibility) {
    visibility = ref(document.visibilityState);
    document.addEventListener(
      "visibilitychange",
      () => {
        visibility!.value = document.visibilityState
        hidden.value = document.hidden;
      },
      { passive: true }
    );
  }
  return {
    visibility,
    hidden
  };
}
