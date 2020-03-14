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

// Symbol used to inject/provide the i18n values
const I18n_ACCESS_SYMBOL: InjectionKey<i18nResult<
  string[],
  string
>> = /*#__PURE__*/ Symbol((__DEV__ && "I18n") || ``);

/**
 * i18n key and message value
 */
export type i18nMessageValue = i18nLocale<any> | RefTyped<string>;

/**
 * i18n interface
 * * check [typescript documentation](https://pikax.me/vue-composable/composable/i18n/i18n.html#global-definition)
 * * @example
 * ```ts
 * // types.d.ts
 * declare module "@vue-composable/core" {
 *   interface i18n {
 *     hello: string;
 *   }
 * }
 * ```
 */
export interface i18n extends Record<string, i18nMessageValue> {}

/**
 * Extracts i18n configuration type to the correct output
 */
export type i18nMessage<T> = T extends Ref<string>
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
/**
 * Locale based key/value dictionary
 */
export type i18nLocale<T> = {
  [K in keyof T]: i18nMessage<T[K]>;
};
/**
 * i18n Message value resolver */
export type i18nResolver = (
  i18n: i18n,
  path: Readonly<RefTyped<string>>,
  args: RefTyped<FormatObject> | Array<FormatValue> | undefined
) => RefTyped<string>;

/**
 * i18n definition
 */
export interface i18nDefinition<TMessage> {
  /**
   * Default and current locale
   * If locale and fallback are different, you may need to wait until next tick to
   * get the correct i18n values
   */
  locale: keyof TMessage;

  /**
   * Fallback locale, it will be used if the current locale doesn't
   * have value for the key.
   * Only used if `notFoundFallback !== false`
   */
  fallback?: keyof TMessage;

  /**
   * Object containing locale and messages for locale
   */
  messages: { [K in keyof TMessage]: i18n | (() => Promise<i18n>) };

  /**
   * Resolves the translation for i18n
   * @param i18n - i18n messages
   * @param path - desired path
   * @param args - arguments
   */
  resolve?: i18nResolver;

  /**
   * falls back to the fallback locale if key not found
   * @default true
   */
  notFoundFallback?: boolean;
}

/**
 * i18n Object
 */
export interface i18nResult<TLocales, TMessages extends any = i18n> {
  /**
   * Current locale
   * You can assign a new locale
   */
  locale: Ref<TLocales>;

  /**
   * @readonly List of available locales
   */
  locales: Readonly<Ref<Readonly<Array<TLocales>>>>;

  /**
   * @readonly Object based locale messages
   */
  i18n: Readonly<Ref<Readonly<TMessages>>>;

  /**
   * Function based message locale with support to format and arguments
   * Inspired by [vue-i18n](https://github.com/kazupon/vue-i18n)
   * @param path - Current message path
   * @param args - Argument passed to format value
   */
  $t(path: string, args?: object | Array<object>): Readonly<Ref<string>>;

  /**
   * Adds a new locale to the locale array, it also overrides existing locale
   * @param locale - Locale key
   * @param messages - Object based messages
   */
  addLocale(locale: string, messages: TMessages): void;
  /**
   * Removes locale from the locale list
   * @param locale - Locale key
   */
  removeLocale(locale: TLocales): void;
}

/**
 * Calls setI18n
 * @param definition - Locale definition
 */
export function useI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["messages"][T["locale"]]>;
/**
 * Inject i18n
 */
export function useI18n<T = i18n>(): i18nResult<string[], T>;
export function useI18n(definition?: any): any {
  if (definition) {
    return setI18n(definition);
  } else return inject(I18n_ACCESS_SYMBOL);
}

/**
 * Builds i18n object based on the definition
 * @param definition - i18n definition
 */
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
    const fallbackI18n = loadLocale(
      definition.fallback! as string,
      localeMessages
    );
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

/**
 * Build and provide i18n definition
 * @param definition - I18N definition
 */
export function setI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T) {
  const r = buildI18n(definition);
  provide(I18n_ACCESS_SYMBOL, r as any);
  return r;
}
