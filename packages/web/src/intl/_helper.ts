import { IntlNumberFormatLocales } from "./numberFormat";
import {
  RefTyped,
  wrap,
  isObject,
  isArray,
  isString
} from "@vue-composable/core";
import { Ref } from "@vue/composition-api";

export function intlDateFormatExtractArguments(
  locales: IntlNumberFormatLocales,
  options?: RefTyped<Intl.NumberFormatOptions>
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.NumberFormatOptions> | undefined
];
export function intlDateFormatExtractArguments(
  options: RefTyped<Intl.NumberFormatOptions>
): [
  Ref<string> | Ref<string[]> | undefined,
  Ref<Intl.NumberFormatOptions> | undefined
];
export function intlDateFormatExtractArguments(
  localesOptions: IntlNumberFormatLocales | RefTyped<Intl.NumberFormatOptions>,
  opts?: RefTyped<Intl.NumberFormatOptions>
): any {
  const wrappedOpts = wrap(opts);
  const wrappedLocalesOptions = wrap(localesOptions);

  return isObject(wrappedOpts.value)
    ? [wrappedLocalesOptions as Ref<string>, wrappedOpts]
    : isObject(wrappedLocalesOptions.value) &&
      !isArray(wrappedLocalesOptions.value) &&
      !isString(wrappedLocalesOptions.value)
    ? [undefined, wrappedLocalesOptions as Ref<Intl.NumberFormatOptions>]
    : [
        wrappedLocalesOptions.value
          ? (wrappedLocalesOptions as Ref<string>)
          : undefined,
        undefined
      ];
}
