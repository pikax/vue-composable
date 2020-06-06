import { ref, computed, watch, Ref, ComputedRef } from "../api";
import { RefTyped, MAX_ARRAY_SIZE, wrap } from "../utils";

export interface UndoOptions<T> {
  deep: boolean;

  maxLength: number;

  clone: (entry: T) => T;
}

export interface UndoOperation {
  (step: number): void;
  (): void;
}

export interface UndoReturn<T> {
  value: Ref<T>;

  undo: UndoOperation;
  redo: UndoOperation;

  jump: (delta: number) => void;

  prev: ComputedRef<T[]>;
  next: ComputedRef<T[]>;
}

export function useUndo<T = any>(): UndoReturn<T | undefined>;

export function useUndo<T>(
  defaultValue: RefTyped<T>,
  options?: Partial<UndoOptions<T>>
): UndoReturn<T>;

export function useUndo<T>(
  defaultValue?: RefTyped<T>,
  options?: Partial<UndoOptions<T>>
): UndoReturn<T> {
  const current = wrap(defaultValue!);

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
        const pos = position.value;
        timeline.value.splice(0, pos);
        // reset position
        position.value = 0;
      }

      if (timeline.value.length > maxLen) {
        timeline.value.pop();
      }

      timeline.value.unshift(clone(c));
    },
    {
      ...options,
      immediate: true,
      flush: "sync"
    }
  );

  const undo = (step = 1) => jump(step);
  const redo = (step = 1) => jump(-step);

  const jump = (delta: number) => {
    const s =
      Math.sign(delta) <= 0
        ? Math.max(delta, -next.value.length)
        : Math.min(delta, prev.value.length);

    position.value += s;
    current.value = timeline.value[position.value];
  };

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

    undo,
    redo,
    jump,

    prev,
    next
  };
}
