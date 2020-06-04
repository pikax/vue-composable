import { ref, computed, watch } from "../api";
import { RefTyped, MAX_ARRAY_SIZE, wrap } from "../utils";

export interface UndoOptions<T> {
  deep: boolean;

  maxLength: number;

  clone: (entry: T) => T;
}

export function useUndo<T>(
  defaultValue: RefTyped<T>,
  options?: Partial<UndoOptions<T>>
) {
  const current = wrap(defaultValue);

  const timeline = ref<T[]>([]);
  const position = ref(0);

  const maxLen = (options && options.maxLength) || MAX_ARRAY_SIZE;
  const clone = (options && options.clone) || ((t: any) => t);

  watch(
    current,
    (c, p) => {
      if (position.value !== 0) {
        if (timeline.value[position.value] === current.value) {
          //ignore because is the same value
          return;
        }
        // new value added
        timeline.value.splice(position.value);
        // reset position
        position.value = 0;
      }

      timeline.value.unshift(clone(p));
      if (timeline.value.length >= maxLen) {
        timeline.value.pop();
      }
    },
    {
      ...options,
      immediate: false,
      flush: "sync"
    }
  );

  const undo = () => (position.value = Math.max(0, position.value - 1));
  const redo = () =>
    (position.value = Math.min(timeline.value.length, position.value - 1));

  const prev = computed(() => timeline.value.slice(position.value));
  const next = computed(() => timeline.value.slice(0, position.value));

  return {
    value: current,

    undo,
    redo,

    prev,
    next
  };
}
