import { Ref, ref } from "../api";
import { isClient, PASSIVE_EV } from "../utils";

let language: Ref<string> | undefined = undefined;
let languages: Ref<readonly string[]> | undefined = undefined;

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
    languages,
  };
}
