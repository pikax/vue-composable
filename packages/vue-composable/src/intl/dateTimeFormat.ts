import { computed, Ref } from "../api";
import { intlDateFormatExtractArguments } from "./_helper";
import { RefTyped, unwrap } from "../utils";
import { IntlDateTimeFormatOptions } from "./types";

export type DateTimeFormatLocales =
  | RefTyped<string>
  | RefTyped<string[]>
  | undefined;

export type DateTimeFormatterFormat<T> = (
  value: Readonly<RefTyped<Readonly<number | Date>>>,
  overrideOpts?: RefTyped<
    Intl.DateTimeFormatOptions | IntlDateTimeFormatOptions
  >,
  overrideLocale?: RefTyped<DateTimeFormatLocales>
) => T;

export interface DateTimeFormatReturn {
  formatter: Ref<Readonly<Intl.DateTimeFormat>>;

  format: DateTimeFormatterFormat<Ref<Readonly<string>>>;
  formatString: DateTimeFormatterFormat<string>;
}

export function useIntlDateTimeFormat(): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  locales: DateTimeFormatLocales
): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  options: RefTyped<IntlDateTimeFormatOptions>
): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  options: RefTyped<Intl.DateTimeFormatOptions>
): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  locales: DateTimeFormatLocales,
  options?: RefTyped<IntlDateTimeFormatOptions | undefined>
): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  locales: DateTimeFormatLocales,
  options: RefTyped<Intl.DateTimeFormatOptions | undefined>
): DateTimeFormatReturn;

export function useIntlDateTimeFormat(
  localesOptions?:
    | DateTimeFormatLocales
    | RefTyped<IntlDateTimeFormatOptions>
    | RefTyped<Intl.DateTimeFormatOptions>,
  opts?: any
) {
  const [locales, options] = intlDateFormatExtractArguments(
    localesOptions as any,
    opts
  );

  const formatter = computed(
    () =>
      new Intl.DateTimeFormat(
        unwrap(locales as Ref<string | string[]> | undefined),
        unwrap(options)
      )
  );

  const formatString = (
    value: RefTyped<number | Date>,
    overrideOpts?: RefTyped<Intl.DateTimeFormatOptions>,
    overrideLocale?: RefTyped<DateTimeFormatLocales>
  ) => {
    const f =
      overrideOpts || overrideLocale
        ? new Intl.DateTimeFormat(
            unwrap(overrideLocale as RefTyped<string>) ||
              unwrap(locales as Ref<string | string[]>),
            { ...unwrap(options), ...unwrap(overrideOpts) }
          )
        : formatter.value;
    return f.format(unwrap(value));
  };

  const format = (
    value: RefTyped<number | Date>,
    overrideOpts?: RefTyped<Intl.DateTimeFormatOptions>,
    overrideLocale?: RefTyped<DateTimeFormatLocales>
  ) => computed(() => formatString(value, overrideOpts, overrideLocale));

  return {
    format,
    formatString,

    formatter
  };
}
