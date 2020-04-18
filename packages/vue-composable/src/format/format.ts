import { RefTyped, unwrap, isArray } from "../utils";
import { reactive, computed, Ref, isRef } from "../api";

export type FormatValue =
  | RefTyped<object>
  | RefTyped<string>
  | RefTyped<number>;
export interface FormatObject {
  [id: string]: FormatValue;
}

/**
 * format string based on object: [format](https://pikax.me/vue-composable/composable/format/format)
 *  * @example
 * ```ts
 * useFormat('Today is {{ day }}', { day: new Date().getDay() })
 * ```
 * @param format - string format
 * @param obj - object to get values from
 */
export function useFormat(
  format: RefTyped<Readonly<string>>,
  obj?: RefTyped<FormatObject>
): Readonly<Ref<string>>;

export function useFormat(
  format: Readonly<RefTyped<string>>,
  obj?: RefTyped<FormatObject>
): Readonly<Ref<string>>;

/**
 * format string based on object: [format](https://pikax.me/vue-composable/composable/format/format)
 * * @example
 * ```ts
 * useFormat('Today is {{ 0 }}', new Date().getDay())
 * ```
 * @param format - string format
 * @param args - array based format
 *
 */
export function useFormat(
  format: Readonly<RefTyped<string>>,
  ...args: Array<FormatValue>
): Readonly<Ref<string>>;

export function useFormat(
  format: Readonly<RefTyped<string>>,
  obj?: RefTyped<FormatObject> | Array<FormatValue>
): Readonly<Ref<string>>;

export function useFormat(
  format: RefTyped<string>,
  args: any
): Readonly<Ref<string>>;

export function useFormat(
  format: RefTyped<string>,
  args: any
): Readonly<Ref<string>> {
  return computed(() => {
    const f = unwrap(format);
    if (!args) {
      return f;
    }
    const r = isRef<any>(args) ? reactive(args.value) : reactive(args);
    const regEx = /({?{[\w\s]*}?})/g;

    return f.replace(regEx, s => {
      const k = s
        .replace("{", "")
        .replace("}", "")
        .trim();
      // ignore if {{ }}
      if (s[0] === s[1] && s[0] === "{") {
        return `${k}`;
      }

      const v = isArray(r) ? r[+k] : r[k];
      return v === undefined ? s : `${unwrap(v)}`;
    });
  });
}
