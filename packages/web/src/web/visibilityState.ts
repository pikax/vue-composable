import { ref, Ref } from "@vue/composition-api";

let state: Ref<VisibilityState> | undefined = undefined;

export function useVisibilityState() {
  if (!state) {
    state = ref(document.visibilityState);
    document.addEventListener(
      "visibilitychange",
      () => (state!.value = document.visibilityState),
      { passive: true }
    );
  }
  return state;
}
