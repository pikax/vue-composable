import { IntlNumberFormatLocales } from "./numberFormat";
import { isArray, isObject, isString, RefTyped, wrap } from "../utils";
import { isRef, Ref } from "../api";
import { DateTimeFormatLocales } from "./dateTimeFormat";

export function intlDateFormatExtractArguments(
  locales: IntlNumberFormatLocales,
  options?: RefTyped<Intl.NumberFormatOptions>,
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.NumberFormatOptions> | undefined,
];
export function intlDateFormatExtractArguments(
  options: RefTyped<Intl.NumberFormatOptions>,
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.NumberFormatOptions> | undefined,
];

export function intlDateFormatExtractArguments(
  locales: DateTimeFormatLocales,
  options?: RefTyped<Intl.DateTimeFormatOptions>,
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.DateTimeFormatOptions> | undefined,
];
export function intlDateFormatExtractArguments(
  options: RefTyped<Intl.DateTimeFormatOptions>,
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.DateTimeFormatOptions> | undefined,
];
export function intlDateFormatExtractArguments(
  localesOptions: IntlNumberFormatLocales | RefTyped<Intl.NumberFormatOptions>,
  opts?: RefTyped<Intl.NumberFormatOptions>,
): any {
  const wrappedOpts = wrap(opts);
  const wrappedLocalesOptions = wrap(localesOptions);

  return isObject(wrappedOpts.value) || isRef(opts)
    ? [
      wrappedLocalesOptions.value !== undefined
        ? wrappedLocalesOptions
        : undefined,
      wrappedOpts,
    ]
    : isObject(wrappedLocalesOptions.value) &&
        !isArray(wrappedLocalesOptions.value) &&
        !isString(wrappedLocalesOptions.value)
    ? [undefined, wrappedLocalesOptions as Ref<Intl.NumberFormatOptions>]
    : [
      wrappedLocalesOptions.value ? (wrappedLocalesOptions as Ref<string>)
      : undefined,
      undefined,
    ];
}
