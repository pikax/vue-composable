/* istanbul ignore file */

export {
  onMounted,
  onUnmounted,
  Ref,
  ref,
  unref,
  watch,
} from "@vue/runtime-core";

// istanbul ignore next
const NO_OP = () => {};

// istanbul ignore next
export const vueDelete: (o: object, p: string) => void = NO_OP;
// istanbul ignore next
export const vueSet: (o: object, p: string, v: any) => void = NO_OP;
