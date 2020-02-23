import {
  Ref,
  ref,
  InjectionKey,
  watch,
  inject,
  provide,
  computed
} from "@vue/composition-api";
import {
  RefTyped,
  deepClone,
  isPromise,
  isFunction,
  isBoolean,
  wrap
} from "../utils";
import { usePath, useFormat, FormatObject, FormatValue } from "../format";

const I18n_ACCESS_SYMBOL: InjectionKey<i18nResult<string[], string>> = Symbol(
  (__DEV__ && "I18n") || ``
);

type i18nMessageValue = i18nLocale<any> | RefTyped<string>;

export interface i18n extends Record<string, i18nMessageValue> {}

type i18nMessage<T> = T extends Ref<string>
  ? string
  : T extends () => Promise<infer P>
  ? i18nLocale<P>
  : T extends (...args: infer TArgs) => RefTyped<string>
  ? (...args: TArgs) => string
  : T extends object
  ? i18nLocale<T>
  : T extends Ref<infer V>
  ? V
  : T;

type i18nLocale<T> = {
  [K in keyof T]: i18nMessage<T[K]>;
};
type i18nResolver = (
  i18n: i18n,
  path: Readonly<RefTyped<string>>,
  args: RefTyped<FormatObject> | Array<FormatValue> | undefined
) => RefTyped<string>;

interface i18nDefinition<TMessage> {
  locale: keyof TMessage;

  fallback?: keyof TMessage;

  messages: { [K in keyof TMessage]: i18n | (() => Promise<i18n>) };

  /**
   * Resolves the translation for i18n
   * @param i18n i18n messages
   * @param path desired path
   * @param args arguments
   */
  resolve?: i18nResolver;

  /**
   * falls back to the fallback locale if key not found
   * @default true
   */
  notFoundFallback?: boolean;
}

interface i18nResult<TLocales, TMessages extends any = i18n> {
  locale: Ref<TLocales>;

  locales: Ref<Array<TLocales>>;

  i18n: Readonly<Ref<Readonly<TMessages>>>;

  $t(path: string, args?: object | Array<object>): Readonly<Ref<string>>;

  addLocale(locale: string, messages: TMessages): void;
  removeLocale(locale: TLocales): void;
}

export function useI18n(): i18nResult<string[], string> | void {
  return inject(I18n_ACCESS_SYMBOL);
}

export function buildI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["messages"][T["locale"]]> {
  const locales = ref<Array<keyof TMessage>>(Object.keys(definition.messages));
  const localeMessages = ref<
    Record<keyof TMessage, i18n | (() => Promise<any>)>
  >(definition.messages);
  const locale: Ref<keyof TMessage> = ref(definition.locale);
  const i18n = ref<any>({});
  let fallback = ref<i18n>();

  const cache: Record<string, Ref<i18n>> = {};

  const loadLocale = (
    locale: string,
    localeMessages: Ref<Record<string, i18n | (() => Promise<any>)>>
  ): Ref<i18n> | Promise<Ref<i18n>> => {
    if (cache[locale]) {
      return cache[locale];
    }

    const l = localeMessages.value[locale];
    if (!l) {
      return ref({});
    }

    if (isFunction(l)) {
      return Promise.resolve(l()).then(x => (cache[locale] = wrap<i18n>(x)));
    }
    return (cache[locale] = computed(() => localeMessages.value[locale]));
  };

  const shouldFallback = definition.fallback
    ? isBoolean(definition.notFoundFallback)
      ? definition.notFoundFallback
      : true
    : false;

  let fallbackIsPromise = false;
  if (shouldFallback) {
    const fallbackI18n = loadLocale(locale.value as string, localeMessages);
    if (isPromise(fallbackI18n)) {
      fallbackI18n.then(x => {
        fallback = x;
      });
      fallbackIsPromise = true;
    } else {
      fallback = fallbackI18n;
    }
  } else {
    fallback.value = {};
  }

  watch(
    [locale, fallback],
    async ([l, fb]: [keyof TMessage, i18n | undefined]) => {
      if (l === definition.fallback && shouldFallback) {
        i18n.value = fb!;
      } else {
        const localeMessage = await loadLocale(l as string, localeMessages);
        i18n.value = deepClone<any>({}, fb, localeMessage.value);
      }
    },
    {
      lazy: fallbackIsPromise
    }
  );

  const $t = (
    path: Readonly<RefTyped<string>>,
    args: RefTyped<FormatObject> | Array<FormatValue> | undefined
  ): Ref<string> => {
    if (definition.resolve) {
      return wrap(definition.resolve(i18n.value, path, args));
    }
    return useFormat(usePath(i18n, path, ".", (_, _1, p) => p) as any, args);
  };

  const addLocale = (l: string, m: any) => {
    if (locales.value.indexOf(l as any) >= 0) {
      if (__DEV__) {
        console.warn("Locale already exists, overriding it");
      }
    } else {
      locales.value.push(l as any);
    }
    delete cache[l];
    (localeMessages.value as Record<string, i18n>)[l] = m;
  };

  const removeLocale = (l: keyof TMessage) => {
    const index = locales.value.indexOf(l);
    if (index >= 0) {
      locales.value.splice(index, 1);
    } else {
      if (__DEV__) {
        console.warn("Locale doesn't exist");
      }
    }
    delete localeMessages.value[l];
    delete cache[l as string];
  };

  return {
    locale,
    locales,

    i18n,

    $t,

    addLocale,
    removeLocale
  };
}

export function setI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T) {
  const r = buildI18n(definition);
  provide(I18n_ACCESS_SYMBOL, r as any);
  return r;
}
