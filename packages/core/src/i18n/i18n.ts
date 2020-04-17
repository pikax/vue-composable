import {
  Ref,
  ref,
  InjectionKey,
  watch,
  inject,
  provide,
  computed
} from "@vue/runtime-core";
import {
  RefTyped,
  deepClone,
  isPromise,
  isFunction,
  isBoolean,
  wrap
} from "../utils";
import { usePath, useFormat, FormatObject, FormatValue } from "../format";

// istanbul ignore next
const I18n_ACCESS_SYMBOL: InjectionKey<i18nResult<
  string[],
  string
>> = /*#__PURE__*/ Symbol((__DEV__ && "I18n") || ``);

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

  messages: {
    [K in keyof TMessage]: i18n | (() => Promise<i18n>) | (() => i18n);
  };

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

  $ts(path: string, args?: object | Array<object>): string;

  addLocale(locale: string, messages: TMessages): void;
  removeLocale(locale: TLocales): void;
}

type PromiseResult<T> = T extends Promise<infer R> ? R : T;

type I18nExtractLocale<T> = T extends (...args: any[]) => any
  ? PromiseResult<ReturnType<T>>
  : PromiseResult<T>;

export function useI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(definition: T): i18nResult<keyof T["messages"], T["messages"][T["locale"]]>;
export function useI18n<T = i18n>(): i18nResult<string[], T>;
export function useI18n(definition?: any): any {
  if (definition) {
    return buildI18n(definition);
  } else return inject(I18n_ACCESS_SYMBOL);
}

export function buildI18n<
  T extends i18nDefinition<TMessage>,
  TMessage extends Record<keyof T["messages"], i18n | (() => Promise<any>)>
>(
  definition: T
): i18nResult<
  keyof T["messages"],
  I18nExtractLocale<T["messages"][T["locale"]]>
> {
  const locales = ref<Array<keyof TMessage>>(
    Object.keys(definition.messages) as any
  );
  const localeMessages = ref<
    Record<keyof TMessage, i18n | (() => Promise<any>)>
  >(definition.messages as any);
  const locale: Ref<keyof TMessage> = ref(definition.locale as any);
  const i18n = ref<any>({});
  let fallback = ref<i18n>();

  const cache: Record<string, Ref<i18n>> = {};

  const loadLocale = (
    locale: string,
    messages: typeof localeMessages
  ): Ref<i18n> | Promise<Ref<i18n>> => {
    if (cache[locale]) {
      return cache[locale];
    }

    const l = messages.value[locale];
    if (!l) {
      return ref({});
    }

    let m = isFunction(l) ? l() : l;
    if (isPromise(m)) {
      return m.then(x => (cache[locale] = wrap<i18n>(x)));
    }

    // if it was function we don't keep track on that
    if (isFunction(l)) {
      return wrap(m);
    }

    return (cache[locale] = computed(() => messages.value[locale]));
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
        fallback.value = x.value;
      });
      fallbackIsPromise = true;
    } else {
      fallback.value = fallbackI18n.value;
    }
  } else {
    fallback.value = {};
  }

  const localeChangesCount = ref(0);
  watch(localeMessages, () => localeChangesCount.value++, {
    deep: true,
    immediate: false
  });

  watch(
    [locale, fallback, localeChangesCount],
    async ([l, fb, _]: [keyof TMessage, i18n | undefined, any]) => {
      if (l === definition.fallback && shouldFallback) {
        i18n.value = fb!;
      } else {
        const localeMessage = await loadLocale(l as string, localeMessages);
        i18n.value = deepClone<any>({}, fb, localeMessage.value);
      }
    },
    {
      immediate: !fallbackIsPromise
    }
  );

  const $t = (
    path: Readonly<RefTyped<string>>,
    args: RefTyped<FormatObject> | Array<FormatValue> | undefined
  ): Ref<string> => {
    if (definition.resolve) {
      return wrap(definition.resolve(i18n.value, path, args));
    }
    return useFormat(
      usePath(i18n, path, ".", (_, _1, p, _2) => p) as Ref<any>,
      args
    );
  };

  const $ts = (
    path: Readonly<RefTyped<string>>,
    args: RefTyped<FormatObject> | Array<FormatValue> | undefined
  ): string => {
    return $t(path, args).value;
  };

  const addLocale = (l: string, m: any) => {
    if (locales.value.indexOf(l as any) >= 0) {
      /* istanbul ignore else */
      if (__DEV__) {
        console.warn(
          `[useI18n] Locale "${l}" already exists, overriding it...`
        );
      }
    } else {
      locales.value.push(l as any);
    }
    delete cache[l];

    localeMessages.value = {
      ...localeMessages.value,
      [l]: m
    };
    // Vue.set(localeMessages.value, l, m);
    // (localeMessages.value as Record<string, i18n>)[l] = m;
  };

  const removeLocale = (l: keyof TMessage) => {
    const index = locales.value.indexOf(l);
    if (index >= 0) {
      const nextLocale = [
        locale.value,
        fallback.value && definition.fallback,
        ...locales.value
      ].find(x => x && x !== l);

      if (nextLocale) {
        if (l === definition.fallback) {
          /* istanbul ignore else */
          if (__DEV__) {
            console.warn(`[useI18n] removing default fallback locale "${l}"`);
          }
          fallback.value = undefined;
        }
        if (l === locale.value) {
          /* istanbul ignore else */
          if (__DEV__) {
            console.warn(
              `[useI18n] removing current locale "${l}", setting current locale to "${nextLocale}"`
            );
          }
          locale.value = nextLocale;
        }
      } else {
        /* istanbul ignore else */
        if (__DEV__) {
          console.error("[useI18n] No locales available to use");
        }
      }
      locales.value.splice(index, 1);
    } else {
      /* istanbul ignore else */
      if (__DEV__) {
        console.warn(`[useI18n] Locale "${l}" doesn't exist`);
      }
    }
    // Vue.delete(localeMessages.value, l as string);
    delete localeMessages.value[l];
    delete cache[l as string];
  };

  return {
    locale,
    locales,

    i18n,

    $t,
    $ts,

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
