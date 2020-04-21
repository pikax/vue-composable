export {
  ref,
  isRef,
  unref,
  Ref,
  inject,
  InjectionKey,
  provide,
  watch,
  reactive,
  computed,
  getCurrentInstance,
  ComputedRef,
  UnwrapRef,
  onMounted,
  onUnmounted,
  onActivated,
  onBeforeMount,
  onDeactivated
} from "@vue/runtime-core";

// istanbul ignore next
const NO_OP = () => {};

// istanbul ignore next
export const vueDelete: (o: object, p: string) => void = NO_OP;
// istanbul ignore next
export const vueSet: (o: object, p: string, v: any) => void = NO_OP;
