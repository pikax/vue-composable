import { RefTyped, unwrap } from "@vue-composable/core";
import { computed, Ref } from "@vue/composition-api";
import { intlDateFormatExtractArguments } from "./_helper";
import { IntlNumberFormatOptions } from "./types";

export type IntlNumberFormatLocales =
  | RefTyped<string>
  | RefTyped<string[]>
  | undefined;

export type IntNumberFormatterFormat<T> = (
  value: RefTyped<number>,
  overrideOpts?: RefTyped<Intl.NumberFormatOptions>,
  overrideLocale?: RefTyped<IntlNumberFormatLocales>
) => T;

export interface NumberFormatReturn {
  formatter: Ref<Readonly<Intl.NumberFormat>>;

  format: IntNumberFormatterFormat<Ref<Readonly<string>>>;
  formatString: IntNumberFormatterFormat<string>;
}

export function useIntlNumberFormat(
  locales: IntlNumberFormatLocales,
  options?: RefTyped<IntlNumberFormatOptions>
): NumberFormatReturn;
export function useIntlNumberFormat(
  options: RefTyped<IntlNumberFormatOptions>
): NumberFormatReturn;
// export function useIntlNumberFormat(
//   locales: IntlNumberFormatLocales,
//   options?: RefTyped<Intl.NumberFormatOptions>
// ): NumberFormatReturn;
// export function useIntlNumberFormat(
//   options: RefTyped<Intl.NumberFormatOptions>
// ): NumberFormatReturn;
export function useIntlNumberFormat(
  localesOptions: IntlNumberFormatLocales | RefTyped<IntlNumberFormatOptions>,
  opts?: RefTyped<IntlNumberFormatOptions>
) {
  const [locales, options] = intlDateFormatExtractArguments(
    localesOptions as any,
    opts
  );

  const formatter = computed(
    () =>
      new Intl.NumberFormat(
        unwrap(locales as Ref<string | string[]> | undefined),
        unwrap(options)
      )
  );

  const formatString = (
    value: RefTyped<number>,
    overrideOpts?: RefTyped<Intl.NumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => {
    const f =
      overrideOpts || overrideLocale
        ? new Intl.NumberFormat(
            unwrap(overrideLocale as RefTyped<string>) ||
              unwrap(locales as Ref<string | string[]> | undefined),
            { ...unwrap(options), ...unwrap(overrideOpts) }
          )
        : formatter.value;

    return f.format(unwrap(value));
  };

  const format = (
    value: RefTyped<number>,
    overrideOpts?: RefTyped<Intl.NumberFormatOptions>,
    overrideLocale?: RefTyped<IntlNumberFormatLocales>
  ) => computed(() => formatString(value, overrideOpts, overrideLocale));

  return {
    format,
    formatString,

    formatter
  };
}
