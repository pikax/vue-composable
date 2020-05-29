import {
  Ref,
  ref,
  InjectionKey,
  inject,
  provide,
  onUnmounted,
  watch
} from "../api";
import { RefTyped, isClient, isString, unwrap } from "../utils";

const SSR_TITLE_KEY: InjectionKey<Ref<string>> = /*#__PURE__*/ Symbol(
  (__DEV__ && "SSR_TITLE_KEY") || ``
);

let currentSSRTitle: Ref<string | undefined> | undefined = undefined;

export function startSSRTitle(defaultTitle?: RefTyped<string>) {
  currentSSRTitle = ref(defaultTitle);
}
export function stopSSRTitle() {
  currentSSRTitle = undefined;
}

export function useSSRTitle(overrideTitle?: RefTyped<string> | null) {
  if (currentSSRTitle === undefined) {
    if (__DEV__) {
      console.warn(
        "[useSSRTitle] can't find SSRTitle have you forgotten to `startSSR()`?"
      );
    }
    return overrideTitle;
  }
  const unwrapped = unwrap(overrideTitle);
  if (isString(unwrapped)) {
    currentSSRTitle.value = unwrapped;
  }
  return currentSSRTitle;
}

export function useTitle(overrideTitle: string | null = null) {
  if (!isClient) {
    return useSSRTitle(overrideTitle);
  }

  const title = ref(overrideTitle);
  const observer = new MutationObserver(m => {
    title.value = m[0].target.textContent;
  });

  watch(
    title,
    (t, o) => {
      if (isString(t) && t !== o) {
        document.title = t;
      }
    },
    {
      immediate: true
    }
  );

  let titleElement = document.querySelector("title");
  // if it doesn't exist create a new one
  if (!titleElement) {
    if (__DEV__) {
      console.warn("[useTitle] title element not found, creating a new one");
    }
    titleElement = document.createElement("title");
    document.head.append(titleElement);
  }

  observer.observe(titleElement, { childList: true });
  onUnmounted(() => observer.disconnect());

  return title;
}
