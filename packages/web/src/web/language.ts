import { ref } from "@vue/composition-api";
import { useEvent } from "../event";

export function useLanguage() {
  const language = ref(navigator.language);
  const preferred = ref(navigator.languages);

  const change = () => {
    language.value = navigator.language;
    preferred.value = navigator.languages;
  };

  const remove = useEvent(window, "languagechange", change, { passive: true });

  return {
    language,
    preferred,

    remove
  };
}
