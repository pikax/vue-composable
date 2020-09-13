import { ref, computed, watch, Ref, ComputedRef } from "../api";
import { RefTyped, MAX_ARRAY_SIZE, wrap } from "../utils";
import { useDevtoolsTimelineLayer } from "../devtools";

export interface UndoOptions<T> {
  /**
   * Watch `deep` option for changes
   */
  deep: boolean;

  /**
   * Max history change
   * @default MAX_ARRAY_SIZE
   *
   */
  maxLength: number;

  /**
   * Clone strategy
   * @default (x)=>x
   */
  clone: (entry: T) => T;

  /**
   * Adds it to the devtools timeline
   * @default undefined
   */
  devtoolId?: string;
}

export interface UndoOperation {
  /**
   * Move state
   * @param step - Positive position
   */
  (step: number): void;
  /**
   * Move 1 step in history
   */
  (): void;
}

export interface UndoReturn<T> {
  /**
   * Current value
   */
  value: Ref<T>;

  /**
   * Undo state to the previous
   */
  undo(): void;

  /**
   * Undo state
   * @param step - Positive position
   */
  undo(step: number): void;

  /**
   * Redo state to the previous
   */
  redo(): void;
  /**
   * Redo state
   * @param step - Positive position
   */
  redo(step: number): void;

  /**
   * Moves the cursor to delta
   * @param delta - If positive it will `undo` the state, if negative it will `redo`
   */
  jump(delta: number): void;

  /**
   * List of previous states
   */
  prev: ComputedRef<T[]>;
  /**
   * List of next states
   * This is only populated if you `undo` or `jump`
   */
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

  const timeline = ref([]) as Ref<T[]>;
  const position = ref(0);

  const maxLen = (options && options.maxLength) || MAX_ARRAY_SIZE;
  const clone = (options && options.clone) || ((t: any) => t);

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

  let addTimelineEvent:
    | ((time: number, data: any) => any)
    | undefined = undefined;

  if (__DEV__ && options && options.devtoolId) {
    const layer = useDevtoolsTimelineLayer(
      `useUndo:${options.devtoolId}`,
      options.devtoolId,
      0x32a2bf // TODO devtools fix color
    );
    addTimelineEvent = (time, data) =>
      layer.addEvent({
        time,
        data: {
          value: data,
          prev: [...prev.value],
          next: [...next.value],
        },
        meta: {
          prev: [...prev.value],
          next: [...next.value],
        },
      });
  }

  watch(
    current,
    (c) => {
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
      const v = clone(c);
      timeline.value.unshift(v);

      if (addTimelineEvent) {
        addTimelineEvent(Date.now(), c);
      }
    },
    {
      ...options,
      immediate: true,
      flush: "sync",
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

    if (addTimelineEvent) {
      addTimelineEvent(Date.now(), clone(current.value));
    }
  };

  return {
    value: current,

    undo,
    redo,
    jump,

    prev,
    next,
  };
}
