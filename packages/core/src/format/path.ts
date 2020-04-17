import { RefTyped, unwrap, isObject, NO_OP } from "../utils";
import { computed, Ref } from "@vue/runtime-core";

export type UsePathNotFoundReturn<T = any> = (
  path: string,
  source: any,
  fullPath: string,
  originalSource: any
) => T;

export function usePath<T = any>(
  source: RefTyped<object>,
  path: RefTyped<string>,
  separator: string = ".",
  notFoundReturn: UsePathNotFoundReturn = NO_OP
): Ref<Readonly<T>> {
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

      if (fragmentPath[fragmentPath.length - 1] === "]") {
        const r = /\[[`'"]?([^`'"\]]*)[`'"]?\]/g;
        let path = fragmentPath;
        let m = r.exec(path);

        if (m) {
          let lastLen = m[0].length;
          let lastIndex = m.index - lastLen;
          let mi = 1;

          do {
            if (lastIndex + lastLen !== m.index) {
              // istanbul ignore else
              if (__DEV__) {
                console.warn(`[usePath] invalid path "${fragments[i]}"`);
              }
            }
            lastIndex = m.index;
            lastLen = m[0].length;

            fragmentPath = fragmentPath.slice(0, -m[0].length);
            fragments.splice(i + mi, 0, m[1]);

            ++mi;
          } while ((m = r.exec(path)));

          // if the fragmentPath is empty, eg: [1][1]
          // we should continue until the next path
          if (!fragmentPath && path[0] === "[" && path.length > 2) {
            continue;
          }
        } else {
          fragmentPath = "";
          console.warn(`[usePath] invalid path provided "${path}"`);
        }
      }

      if (isObject(c)) {
        if (!fragmentPath) {
          // istanbul ignore else
          if (__DEV__) {
            console.warn(
              `Path "${fragments
                .slice(0, i + 1)
                .join(separator)}" doesn't exist on:`,
              source
            );
          }
          return notFoundReturn(
            fragments.slice(0, i + 1).join(separator),
            c,
            p,
            s
          );
        }

        c = c[fragmentPath];
      } else {
        // istanbul ignore else
        if (__DEV__) {
          console.warn(
            `Path "${fragments
              .slice(0, i + 1)
              .join(separator)}" doesn't exist on:`,
            source
          );
        }
        return notFoundReturn(
          fragments.slice(0, i + 1).join(separator),
          c,
          p,
          s
        );
      }

      if (!c) {
        // istanbul ignore else
        if (__DEV__) {
          console.warn(
            `Path "${fragments
              .slice(0, i + 1)
              .join(separator)}" doesn't exist on:`,
            source
          );
        }
        return notFoundReturn(
          fragments.slice(0, i + 1).join(separator),
          c,
          p,
          s
        );
      }
    }

    return c;
  });
}
