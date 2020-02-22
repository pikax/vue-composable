import {
  Ref,
  ref,
  InjectionKey,
  watch,
  inject,
  provide
} from "@vue/composition-api";
import { RefTyped, deepClone, isPromise, isFunction } from "../utils";
import { usePath, useFormat, FormatObject, FormatValue } from "../";

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

  locales: Array<TLocales>;

  i18n: Ref<TMessages>;

  $t(path: string, args?: object | Array<object>): Readonly<Ref<string>>;
}

export function useI18n(): i18nResult<string[], string> | void {
  return inject(I18n_ACCESS_SYMBOL);
}

export function buildI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["messages"][T["locale"]]> {
  const locales = Object.keys(definition.messages) as Array<keyof TMessage>;
  const locale: Ref<keyof TMessage> = ref(definition.locale);
  const i18n = ref<any>({});
  const fallback = ref<i18n>();

  // TODO add cache for processed languages
  let fallbackIsPromise = false;
  const fallbackI18n: i18n | (() => Promise<i18n> | i18n) =
    definition.messages[definition.fallback];
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
    [locale, fallback],
    ([l, fb]: [keyof TMessage, i18n | undefined]) => {
      if (l === definition.fallback) {
        i18n.value = deepClone<any>({}, fb);
      } else {
        const i18: i18n | (() => Promise<i18n> | i18n) = definition.messages[l];
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

  return {
    locale,
    locales,

    i18n,

    $t
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
