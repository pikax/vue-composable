import { ref, watch, Ref, readonly, DeepReadonly } from "../api";
import { MAX_ARRAY_SIZE } from "../utils";

export interface TimelineEntry<T> {
  item: T;
  date: Date;
}

export interface TimelineOptions<T> {
  deep: boolean;

  maxLength: number;

  clone: (entry: T) => T;
}

export function useTimeline<T>(
  value: Ref<T>,
  options?: Partial<TimelineOptions<T>>
): DeepReadonly<Ref<TimelineEntry<T>[]>> {
  const timeline = ref([]) as Ref<TimelineEntry<T>[]>;
  const clone = options && options.clone ? options.clone : (x: any) => x;
  const maxLength = (options && options.maxLength) || MAX_ARRAY_SIZE;
  watch(
    value,
    (_, o) => {
      timeline.value.unshift({
        item: clone(o),
        date: new Date()
      });

      if (timeline.value.length > maxLength) {
        timeline.value.pop();
      }
    },
    {
      immediate: false,
      flush: "sync",
      // allow options to override defaults
      ...options
    }
  );

  return readonly(timeline);
}
