import { RefTyped, unwrap, isObject } from "@vue-composable/core";
import { IntlNumberFormatLocales, useIntlNumberFormat } from "./numberFormat";
import { computed, Ref } from "@vue/runtime-core";
import { intlDateFormatExtractArguments } from "./_helper";
import {
  CurrencyCodes,
  IntlNumberFormatOptions,
  CurrencyDisplay
} from "./types";
export interface CurrencyFormatReturn {
  format: (
    amount: RefTyped<number>,
    currency?: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
    display?: RefTyped<CurrencyDisplay>,
    overrideOptions?: RefTyped<IntlNumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => Ref<Readonly<string>>;
  formatString: (
    amount: RefTyped<number>,
    currency?: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
    display?: RefTyped<CurrencyDisplay>,
    overrideOptions?: RefTyped<IntlNumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => string;
}

export function useCurrencyFormat(): CurrencyFormatReturn;
export function useCurrencyFormat(
  options: RefTyped<IntlNumberFormatOptions>,
  locales?: IntlNumberFormatLocales
): CurrencyFormatReturn;
export function useCurrencyFormat(
  currencyCode: Readonly<RefTyped<Readonly<CurrencyCodes>>>
): CurrencyFormatReturn;
export function useCurrencyFormat(
  currencyCode: Ref<string> | string
): CurrencyFormatReturn;

export function useCurrencyFormat(
  currencyCode: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
  locales: IntlNumberFormatLocales,
  options?: RefTyped<IntlNumberFormatOptions>
): CurrencyFormatReturn;
export function useCurrencyFormat(
  currencyCode: Ref<string> | string,
  locales: IntlNumberFormatLocales,
  options?: RefTyped<IntlNumberFormatOptions>
): CurrencyFormatReturn;

export function useCurrencyFormat(
  currencyCode: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
  options: RefTyped<IntlNumberFormatOptions>
): CurrencyFormatReturn;
export function useCurrencyFormat(
  currencyCode: Ref<string> | string,
  options: RefTyped<IntlNumberFormatOptions>
): CurrencyFormatReturn;

export function useCurrencyFormat(
  currencyCodeOptions?:
    | Readonly<RefTyped<Readonly<CurrencyCodes>>>
    | string
    | Ref<string>
    | RefTyped<IntlNumberFormatOptions>,
  localesOptions?: IntlNumberFormatLocales | RefTyped<IntlNumberFormatOptions>,
  opts?: RefTyped<IntlNumberFormatOptions>
): CurrencyFormatReturn {
  const unwrapCodeOptions = unwrap(currencyCodeOptions);
  const hasCurrency = !isObject(unwrapCodeOptions);

  const currencyCode = hasCurrency
    ? currencyCodeOptions
    : computed(() => {
        const o = (unwrap(
          currencyCodeOptions
        ) as unknown) as IntlNumberFormatOptions;
        return o.currency;
      });

  const [locales, argOptions] = intlDateFormatExtractArguments(
    localesOptions as any,
    hasCurrency
      ? opts
      : (currencyCodeOptions as RefTyped<IntlNumberFormatOptions>)
  );

  const options = computed(() => {
    const opts = unwrap(argOptions) || {};
    const currency = unwrap(currencyCode) || opts.currency;
    return {
      style: "currency",
      ...opts,
      currency
    } as IntlNumberFormatOptions;
  });

  const numberFormat = useIntlNumberFormat(locales);

  const formatString = (
    amount: RefTyped<number>,
    currency?: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
    display?: RefTyped<CurrencyDisplay>,
    opts?: RefTyped<IntlNumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => {
    const o = { ...options.value, ...unwrap(opts) };
    const c = unwrap(currency) || o.currency;
    const d = unwrap(display) || o.currencyDisplay;

    // istanbul ignore else
    if (__DEV__) {
      if (!c) {
        console.error("[useCurrencyFormat] No currency provided.");
        return "";
      }

      if (o.style !== "currency") {
        console.warn(
          "[useCurrencyFormat] invalid style passed in options, please leave it undefined."
        );
      }
    }

    return numberFormat.formatString(
      amount,
      {
        ...o,
        currency: c,
        currencyDisplay: d
      },
      overrideLocale
    );
  };

  const format = (
    amount: RefTyped<number>,
    currency?: Readonly<RefTyped<Readonly<CurrencyCodes>>>,
    display?: RefTyped<CurrencyDisplay>,
    opts?: RefTyped<IntlNumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => {
    return computed(() =>
      formatString(amount, currency, display, opts, overrideLocale)
    );
  };

  return {
    format,
    formatString
  };
}
