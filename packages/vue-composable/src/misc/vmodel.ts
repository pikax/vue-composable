import { ref, Ref, computed, getCurrentInstance } from "../api";

export function useVModel<TProps, PropName extends keyof TProps>(
  props: TProps,
  name: PropName
): Ref<TProps[PropName]> {
  /* istanbul ignore if */
  if (__VUE_2__) {
    console.warn("[useVModel] is not supported on @vue/composition-api.");
    return undefined as any;
  }

  const instance = getCurrentInstance();
  if (!instance) {
    return ref() as any;
  }
  return computed({
    get() {
      return props[name];
    },
    set(v) {
      instance.emit(`update:${name}`, v);
    }
  });
}
