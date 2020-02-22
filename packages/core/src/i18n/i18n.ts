import {
  Ref,
  ref,
  InjectionKey,
  watch,
  inject,
  provide
} from "@vue/composition-api";
import { RefTyped, deepClone, isPromise, isFunction } from "../utils";
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

interface i18nDefinition<TMessage> {
  locale: keyof TMessage;

  fallback: keyof TMessage;

  messages: { [K in keyof TMessage]: i18n | (() => Promise<i18n>) };
}

interface i18nResult<TLocales, TMessages extends any = i18n> {
  locale: Ref<TLocales>;

  locales: Ref<Array<TLocales>>;

  i18n: Ref<TMessages>;

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
  const fallback = ref<i18n>();

  // TODO add cache for processed languages
  let fallbackIsPromise = false;
  const fallbackI18n: i18n | (() => Promise<i18n> | i18n) =
    localeMessages.value[definition.fallback];
  if (isFunction(fallbackI18n)) {
    const r = fallbackI18n();
    if (isPromise(r)) {
      r.then(x => {
        fallback.value = x;
      });
      fallbackIsPromise = true;
    } else {
      fallback.value = r;
    }
  } else {
    fallback.value = fallbackI18n;
  }

  watch(
    [locale, fallback, localeMessages],
    ([l, fb, localeMessages]: [
      keyof TMessage,
      i18n | undefined,
      Record<keyof TMessage, i18n | (() => Promise<i18n> | i18n)>
    ]) => {
      if (l === definition.fallback) {
        i18n.value = deepClone<any>({}, fb);
      } else {
        const i18: i18n | (() => Promise<i18n> | i18n) = localeMessages[l];
        if (isFunction(i18)) {
          const r = i18();
          if (isPromise(r)) {
            r.then(x => {
              if (l === locale.value) {
                i18n.value = deepClone<any>({}, fb, x);
              }
            });
          } else {
            i18n.value = deepClone<any>({}, fb, r);
          }
        } else {
          i18n.value = deepClone<any>({}, fb, i18);
        }
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
    // TODO probably allow to send an custom path resolver or at least allow usage of different accessor
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
