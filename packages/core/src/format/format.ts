import { RefTyped, unwrap, isArray } from "../utils";
import { reactive, computed, Ref, isRef } from "@vue/composition-api";

type FormatValue = RefTyped<object> | RefTyped<string> | RefTyped<number>;
export interface FormatObject {
  [id: string]: FormatValue;
}

export function useFormat(
  format: RefTyped<string>,
  obj: RefTyped<FormatObject>
): Readonly<Ref<string>>;

export function useFormat(
  format: RefTyped<string>,
  ...args: Array<FormatValue>
): Readonly<Ref<string>>;

export function useFormat(
  format: RefTyped<string>,
  args: RefTyped<FormatObject> | Array<FormatValue>
): Readonly<Ref<string>> {
  return computed(() => {
    const r = isRef(args) ? reactive(args.value) : reactive(args);
    const f = unwrap(format);
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
