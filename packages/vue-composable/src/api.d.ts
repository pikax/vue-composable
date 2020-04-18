export {
  ref,
  isRef,
  unref,
  Ref,
  onMounted,
  onUnmounted,
  inject,
  InjectionKey,
  provide,
  watch,
  reactive,
  computed,
  getCurrentInstance,
  ComputedRef,
  UnwrapRef
} from "@vue/runtime-core";

// istanbul ignore next
export declare function vueDelete(o: object, p: string): void;

// istanbul ignore next
export declare function vueSet(o: object, p: string, v: any): void;
