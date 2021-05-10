/* istanbul ignore file */

export {
  App,
  computed,
  ComputedRef,
  customRef,
  DeepReadonly,
  getCurrentInstance,
  inject,
  InjectionKey,
  isRef,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onUnmounted,
  Plugin,
  provide,
  reactive,
  readonly,
  Ref,
  ref,
  toRaw,
  unref,
  UnwrapRef,
  watch,
  watchEffect,
} from "@vue/runtime-core";

// istanbul ignore next
const NO_OP = () => {};

// istanbul ignore next
export const vueDelete: (o: object, p: string) => void = NO_OP;
// istanbul ignore next
export const vueSet: (o: object, p: string, v: any) => void = NO_OP;
