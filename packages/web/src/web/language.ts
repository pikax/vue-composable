import { ref, Ref } from "@vue/composition-api";
import { isClient, PASSIVE_EV } from "@vue-composable/core";

let language: Ref<String> | undefined = undefined;
let languages: Ref<readonly String[]> | undefined = undefined;

export function useLanguage() {
  if (!language) {
    language = isClient ? ref(navigator.language) : ref("");
  }

  if (!languages) {
    if (isClient) {
      languages = ref(navigator.languages);
      const change = () => {
        language!.value = navigator.language;
        languages!.value = navigator.languages;
      };

      window.addEventListener("languagechange", change, PASSIVE_EV);
    } else {
      languages = ref<string[]>([]);
    }
  }

  return {
    language,
    languages
  };
}
