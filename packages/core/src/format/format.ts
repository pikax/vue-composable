import { RefTyped, unwrap, isArray } from "../utils";
import { reactive, computed } from "@vue/composition-api";

type FormatValue = RefTyped<object> | RefTyped<string> | RefTyped<number>;
export interface FormatObject {
  [id: string]: FormatValue;
}

export function useFormat(
  format: RefTyped<string>,
  args: RefTyped<FormatObject> | Array<FormatValue>
) {
  const r = reactive(args);

  const formatter = computed(() => {
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

  return formatter;
}
