import { ref, watch, Ref } from "../api";

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
) {
  const timeline = ref<TimelineEntry<T>[]>([]);
  const clone = options && options.clone ? options.clone : (x: any) => x;
  const maxLength = (options && options.maxLength) || 0;
  watch(
    value,
    (_, o) => {
      timeline.value.unshift({
        item: clone(o),
        date: new Date()
      });

      if (maxLength >= timeline.value.length) {
        timeline.value.pop();
      }
    },
    {
      ...options,
      immediate: false
    }
  );

  return timeline;
}
