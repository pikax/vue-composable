import { ref, Ref } from "@vue/runtime-core";

let language: Ref<String> | undefined = undefined;
let languages: Ref<readonly String[]> | undefined = undefined;

export function useLanguage() {
  if (!language) {
    language = ref(navigator.language);
  }

  if (!languages) {
    languages = ref(navigator.languages);
    const change = () => {
      language!.value = navigator.language;
      languages!.value = navigator.languages;
    };

    window.addEventListener('languagechange', change, { passive: true });
  }

  return {
    language,
    languages
  };
}
