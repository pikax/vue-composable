import { ref } from "@vue/composition-api";

export function useMatchMedia(query: string) {
  const mediaQueryList = ref<MediaQueryList>(matchMedia(query));
  const matches = ref(mediaQueryList.value.matches);

  const process = (e: MediaQueryListEvent) => {
    matches.value = e.matches;
  };

  mediaQueryList.value.addEventListener("change", process, { passive: true });

  const remove = () =>
    mediaQueryList.value.removeEventListener("change", process);

  return {
    mediaQueryList,
    remove,

    matches
  };
}
