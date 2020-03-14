import { RefTyped, unwrap, isObject, NO_OP } from "../utils";
import { computed, Ref } from "@vue/composition-api";

export type UsePathNotFoundReturn<TSource> = (
  /**
   * Current path
   */
  path: string,
  /**
   * last source found
   */
  source: any,
  /**
   * Full path requested
   */
  fullPath: string,
  /**
   * Original source
   */
  originalSource: TSource
) => any;

/**
 * Retrieve object value based on string path
 * @param source - Source object to retrieve path
 * @param path - string path to value
 * @param separator - path separator, default '.'
 * @param notFoundReturn - not found handler
 */
export function usePath<T = any, TSource = any>(
  source: RefTyped<TSource>,
  path: RefTyped<string>,
  separator: string = ".",
  notFoundReturn: UsePathNotFoundReturn<TSource> = NO_OP
): Ref<Readonly<T>> {
  return computed(() => {
    const s = unwrap(source);
    const p = unwrap(path);

    if (s === undefined) return notFoundReturn(p, s, p, s);

    if (!p) {
      return s;
    }

    const fragments = p.split(separator);
    let c: Record<string, any> = s;
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
