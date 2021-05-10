import { TimelineEvent } from "@vue/devtools-api";
import { NO_OP } from "../utils";
import { getDevtools } from "./api";

export function useDevtoolsTimelineLayer(
  id: string,
  label: string,
  color: number,
) {
  const api = getDevtools();
  let addEvent: (event: TimelineEvent, all?: boolean) => any = NO_OP;
  let pushEvent: (event: Omit<TimelineEvent, "time">) => any = NO_OP;
  if (api) {
    api.addTimelineLayer({
      id,
      label,
      color,
    });
    addEvent = (event, all) =>
      api.addTimelineEvent({ layerId: id, event, all });

    pushEvent = (event) => addEvent({ ...event, time: Date.now() });
  }

  return {
    id,

    addEvent,
    pushEvent,
  };
}
