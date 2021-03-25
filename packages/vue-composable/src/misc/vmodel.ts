import { Ref, computed, getCurrentInstance } from "../api";

export function useVModel<TProps, PropName extends keyof TProps>(
  props: TProps,
  name: PropName
): Ref<TProps[PropName]>;
export function useVModel(props: Record<string, any>, name: string): Ref<any> {
  /* istanbul ignore if */
  if (__VUE_2__) {
    console.warn("[useVModel] is not supported on @vue/composition-api.");
    return undefined as any;
  }

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(
      "useVModel must be called from the setup or lifecycle hook methods."
    );
  }

  return computed({
    get() {
      return props[name];
    },
    set(v) {
      // @ts-ignore when building v2 the instance doesn't have `emit`
      instance.emit(`update:${name}`, v);
    },
  });
}
