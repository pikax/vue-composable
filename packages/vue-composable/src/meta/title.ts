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

export function createSSRTitle(defaultTitle: string = "") {
  if (__DEV__ && isClient) {
    console.warn("[createSSRTitle] using createSSRTitle on the client side!");
  }
  const title = ref(defaultTitle);
  provide(SSR_TITLE_KEY, title);
  return title;
}

export function useSSRTitle(defaultTitle?: RefTyped<string> | null) {
  const s = Symbol();
  const title = inject<Ref<string>>(SSR_TITLE_KEY, s as any);
  // @ts-ignore check if it exists
  if (title === s) {
    if (__DEV__) {
      console.warn(
        "[useSSRTitle] can't find SSRTitle have you forgotten calling `createSSRTitle`?"
      );
    }
    return defaultTitle;
  }
  const unwrappedTitle = unwrap(defaultTitle);
  if (isString(unwrappedTitle)) {
    title.value = unwrappedTitle;
  }
  return inject(SSR_TITLE_KEY, ref(defaultTitle));
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
