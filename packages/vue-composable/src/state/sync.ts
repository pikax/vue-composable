import { Ref, ref, watch } from "../api";
import { RefTyped, wrap } from "../utils";

export function useSync<T>(
  main: RefTyped<T>,
  ...args: RefTyped<T>[]
): Ref<Ref<T>[]> {
  const master = wrap(main);

  const list = ref(
    [master].concat(
      args.map(x => {
        // first master sync
        const v = wrap(x);
        v.value = master.value;
        return v;
      })
    )
  );

  watch(
    list,
    values => {
      const d = values.find(x => x.value !== master.value);
      if (d) master.value = d.value;
    },
    {
      deep: true
    }
  );

  watch(
    master,
    m => {
      list.value.filter(x => x !== master).forEach(x => (x.value = m));
    },
    {
      deep: true,
      flush: "sync"
    }
  );

  return list;
}
