import { RefTyped, unwrap, isObject, NO_OP } from "../utils";
import { computed } from "@vue/runtime-core";

export type UsePathNotFoundReturn = (
  path: string,
  source: any,
  fullPath: string,
  originalSource: any
) => any;

export function usePath<T extends object = any>(
  source: RefTyped<T>,
  path: RefTyped<string>,
  separator: string = ".",
  notFoundReturn: UsePathNotFoundReturn = NO_OP
) {
  return computed(() => {
    const s = unwrap(source);
    const p = unwrap(path);

    if (s === undefined) return notFoundReturn(p, s, p, s);

    if (!p) {
      return s;
    }

    const fragments = p.split(separator);
    let c = s;
    for (let i = 0; i < fragments.length; i++) {
      let fragmentPath = fragments[i];
      let index: any = -1;

      if (fragmentPath[fragmentPath.length - 1] === "]") {
        const m = fragmentPath.match(/\[(\d+)\]$/);
        if (m && m[1]) {
          index = +m[1];

          fragmentPath = fragmentPath.slice(0, -m[0].length);
        }
      }

      if (isObject(c)) {
        c = c[fragmentPath];

        // array like: when using ref with and array, it becomes arraylike object
        if (index >= 0) {
          c = (c as any)[index];
        }
      } else {
        if (__DEV__) {
          console.warn(
            `Path "${fragments.slice(0, i).join(separator)}" doesn't exist on:`,
            source
          );
        }
        return notFoundReturn(fragments.slice(0, i).join(separator), c, p, s);
      }

      if (!c) {
        return notFoundReturn(fragments.slice(0, i).join(separator), c, p, s);
      }
    }

    return c;
  });
}
