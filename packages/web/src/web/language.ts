import { ref, Ref } from "@vue/composition-api";

let language: Ref<String> | undefined = undefined;
let preferred: Ref<readonly String[]> | undefined = undefined;

export function useLanguage() {
  if (!language) {
    language = ref(navigator.language);
  }

  if (!preferred) {
    preferred = ref(navigator.languages);
    const change = () => {
      language!.value = navigator.language;
      preferred!.value = navigator.languages;
    };

    window.addEventListener('languagechange', change, { passive: true });
  }

  return {
    language,
    preferred
  };
}
