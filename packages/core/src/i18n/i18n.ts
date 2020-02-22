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

// type LocaleMessages<T> = T | (() => Promise<T>);

type i18nMessageValue = i18nLocale<any> | RefTyped<string>;

export interface i18n extends Record<string, i18nMessageValue> {}

// interface I18N<TMessage extends Record<string, i18nMessageValue>> {
//   messages: TMessage;
// }

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

interface i18nResult<TLocales, TLocale> {
  locale: Ref<TLocales>;

  locales: Array<TLocales>;

  // i18n: i18nLocale<TMessage[TLocale]>;
  i18n: Ref<i18n>;

  $t(path: string): Readonly<Ref<string>>;
  $tc(path: string, args: object | Array<object>): Readonly<Ref<string>>;
}

export function useI18n(): i18nResult<string[], string> | void {
  return inject(I18n_ACCESS_SYMBOL);
}

export function buildI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["locale"]> {
  const locale: Ref<keyof TMessage> = ref(definition.locale);
  const i18n = ref<i18n>({});
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

  const $t = (path: Readonly<RefTyped<string>>): Ref<string> => {
    // TODO probaly allow to send an custom path resolver or at least allow usage of different accessor
    return usePath(i18n, path, ".", (_, _1, p) => p) as any;
  };

  const $tc = (
    path: Readonly<RefTyped<string>>,
    args: RefTyped<FormatObject> | Array<FormatValue>
  ) => {
    return useFormat(($t(path) as any) as Ref<string>, args);
  };

  const result = {
    locale,
    locales: Object.keys(definition.messages),

    i18n,

    $t,
    $tc
  };

  // provide(I18n_ACCESS_SYMBOL, result as any);

  return result as any;
}

export function setI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["locale"]> {
  const r = buildI18n(definition);
  provide(I18n_ACCESS_SYMBOL, r as any);
  return r;
}

// setI18n({
//   locale: "es",
//   fallback: "en",
//   messages: {
//     en: {
//       test: "11",
//       xxx: "ad"
//     },
//     es: () =>
//       Promise.resolve({
//         test: "11"
//       }),
//     fr: {
//       test: "11",
//       xxx: "ad",
//       asdd: "ad"
//     }
//   }
// });
