import { ref, Ref } from "@vue/composition-api";
import { isClient } from "@vue-composable/core";

let language: Ref<String> | undefined = undefined;
let languages: Ref<readonly String[]> | undefined = undefined;

export function useLanguage() {

  if (!language) {
    language = isClient ? ref(navigator.language) : ref('');
  }

  if (!languages) {
    if (isClient) {
      languages = ref(navigator.languages);
      const change = () => {
        language!.value = navigator.language;
        languages!.value = navigator.languages;
      };

      window.addEventListener('languagechange', change, { passive: true });
    } else {
      languages = ref<string[]>([]);
    }
  }

  return {
    language,
    languages
  };
}
