import { Ref, computed, watch, isRef } from "../api";
import { RefTyped, wrap, unwrap, isArray } from "../utils";

export function useSync<T>(
  main: RefTyped<T>,
  ...args: RefTyped<T>[]
): Ref<Ref<T>[]>;
export function useSync<T>(
  main: RefTyped<T>,
  list: Ref<RefTyped<T>[]>
): Ref<Ref<T>[]>;

export function useSync<T>(
  main: RefTyped<T>,
  args: RefTyped<T>[] | Ref<RefTyped<T>[]>
): Ref<Ref<T>[]> {
  const master = wrap(main);

  const l: RefTyped<T>[] | Ref<RefTyped<T>[]> =
    arguments.length === 2
      ? isRef(arguments[1]) && isArray(arguments[1].value)
        ? ((arguments[1] as unknown) as RefTyped<T>[])
        : [arguments[1]]
      : Array.from(arguments).slice(1);

  const list = computed(() => unwrap(l).map(x => wrap(x)));
  list.value.forEach(x => (x.value = master.value));

  let lastLen = list.value.length;

  watch(
    [master, list] as const,
    ([m, list]) => {
      // value added set master
      if (lastLen < list.length) {
        list.forEach(x => (x.value = m));
        return;
      }
      lastLen = list.length;
      for (const v of list) {
        if (v.value !== m) {
          master.value = v.value;
          return;
        }
      }
    },
    {
      deep: true,
      flush: "sync"
    }
  );

  watch(
    master,
    m => {
      list.value.forEach(x => (x.value = m));
    },
    {
      deep: true,
      flush: "sync"
    }
  );

  return list;
}
