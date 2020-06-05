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
    c => {
      if (timeline.value[position.value] === c) {
        //ignore because is the same value
        return;
      }

      // new value added
      if (position.value > 0) {
        timeline.value.splice(position.value);
        // reset position
        position.value = 0;
      }

      // timeline.value.unshift(clone(p));
      timeline.value.unshift(clone(c));
      if (timeline.value.length >= maxLen) {
        timeline.value.pop();
      }
    },
    {
      ...options,
      immediate: true,
      flush: "sync"
    }
  );

  const undo = () => {
    position.value = Math.min(timeline.value.length, position.value + 1);
    current.value = timeline.value[position.value];
  };
  const redo = () => {
    position.value = Math.max(0, position.value - 1);
    current.value = timeline.value[position.value];
  };
  const jump = (pos: number) => (position.value = pos);

  const prev = computed(() => {
    // hide current
    const p = position.value === 0 ? 1 : position.value;
    return timeline.value.slice(p);
  });
  const next = computed(() => {
    // hide current
    const p = position.value === 0 ? 1 : 0;
    return timeline.value.slice(p, position.value);
  });

  return {
    value: current,
    timeline,

    undo,
    redo,
    jump,

    prev,
    next
  };
}
