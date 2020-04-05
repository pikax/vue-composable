import { RefTyped, unwrap, isArray } from "../utils";
import { reactive, computed, Ref, isRef } from "@vue/composition-api";

export type FormatValue =
  | RefTyped<object>
  | RefTyped<string>
  | RefTyped<number>;
export interface FormatObject {
  [id: string]: FormatValue;
}

export function useFormat(
  format: RefTyped<Readonly<string>>,
  obj?: RefTyped<FormatObject>
): Readonly<Ref<string>>;

export function useFormat(
  format: Readonly<RefTyped<string>>,
  obj?: RefTyped<FormatObject>
): Readonly<Ref<string>>;

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
    const r = isRef(args) ? reactive(args.value) : reactive(args);
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
