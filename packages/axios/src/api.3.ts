/* istanbul ignore file */

export {
  computed,
  ComputedRef,
  getCurrentInstance,
  inject,
  InjectionKey,
  isRef,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  Ref,
  ref,
  unref,
  UnwrapRef,
  watch,
} from "@vue/runtime-core";

// istanbul ignore next
const NO_OP = () => {};

// istanbul ignore next
export const vueDelete: (o: object, p: string) => void = NO_OP;
// istanbul ignore next
export const vueSet: (o: object, p: string, v: any) => void = NO_OP;
