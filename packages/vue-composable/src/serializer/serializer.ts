import { computed, ComputedRef } from "../api";
import { RefTyped, unwrap, wrap } from "../utils";

export interface StorageSerializer<T = any> {
  stringify(item: T): string;
  parse(data: string): T;
}

const map = new WeakMap();

export function isSerializedRef<T>(o: ComputedRef<T>): boolean {
  return map.has(o);
}

export function useSerializer<T>(
  obj: RefTyped<T>,
  serializer: StorageSerializer<T>
) {
  const r = wrap(obj);
  const c = computed<string>({
    get() {
      return serializer.stringify(unwrap(r));
    },
    set(v) {
      r.value = serializer.parse(v);
    },
  });
  map.set(c, true);
  return c;
}
