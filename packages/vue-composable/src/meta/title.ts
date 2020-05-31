import {
  Ref,
  ref,
  InjectionKey,
  inject,
  provide,
  onUnmounted,
  watch
} from "../api";
import { RefTyped, isClient, isString, wrap } from "../utils";

// istanbul ignore next
const SSR_TITLE_KEY: InjectionKey<Ref<string>> = /*#__PURE__*/ Symbol(
  (__DEV__ && "SSR_TITLE_KEY") || ``
);

export function provideSSRTitle(
  app: { provide: typeof provide },
  title?: RefTyped<string>
): Ref<string> {
  const r = wrap(title === undefined ? "" : title);
  app.provide(SSR_TITLE_KEY, r);
  return r;
}

export function useSSRTitle(defaultTitle?: string | null): Ref<string | null> {
  const s = Symbol();
  const title = inject<Ref<string>>(SSR_TITLE_KEY, s as any);
  // @ts-ignore check if it exists
  if (title === s) {
    /* istanbul ignore else */
    if (__DEV__) {
      console.warn(
        "[useSSRTitle] can't find SSRTitle have you forgotten calling `provideSSRTitle`?"
      );
    }
    // istanbul ignore next
    return ref(isString(defaultTitle) ? defaultTitle : "") as Ref<string>;
  }
  if (title === undefined) {
    // probably not in `setup()`
    // istanbul ignore next
    return ref(isString(defaultTitle) ? defaultTitle : "") as Ref<string>;
  }
  if (isString(defaultTitle)) {
    title.value = defaultTitle;
  }
  return title;
}

export function useTitle(
  overrideTitle: string | null = null
): Ref<string | null> {
  if (__SSR__ && !isClient) {
    return useSSRTitle(overrideTitle);
  }

  const title = ref<string | null>(
    isString(overrideTitle) ? overrideTitle : document.title
  );
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
      immediate: true,
      flush: "sync"
    }
  );

  const titleElement = document.querySelector("title")!;
  observer.observe(titleElement, { childList: true });
  onUnmounted(() => observer.disconnect());

  return title;
}
