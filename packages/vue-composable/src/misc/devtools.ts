import type {
  DevtoolsPluginApi,
  TimelineEvent,
  Context,
  Hookable,
  TimelineLayerOptions,
  TimelineEventOptions,
} from "@vue/devtools-api";
import { App, InjectionKey, inject } from "../api";
import { NO_OP } from "../utils";

// istanbul ignore next
const DEVTOOLS_KEY: InjectionKey<DevtoolsPluginApi> = /*#__PURE__*/ Symbol(
  (__DEV__ && "DEVTOOLS_KEY") || ``
);

// queue devtools event
class DevtoolsQueue implements DevtoolsPluginApi {
  private _onQueue: { event: keyof Hookable<Context>; handler: any }[] = [];

  private _notifyComponentUpdateQueue = new Set<any>();
  private _timelineLayerQueue: any[] = [];
  private _timelineEventQueue: any[] = [];

  private _api: DevtoolsPluginApi | undefined = undefined;

  constructor() {
    const self = this;
    this.on = {
      transformCall(handler): any {
        if (self._api) {
          self._api.on.transformCall(handler);
        } else {
          self._onQueue.push({ event: "transformCall", handler });
        }
      },
      getAppRecordName(handler): any {
        if (self._api) {
          self._api.on.getAppRecordName(handler);
        } else {
          self._onQueue.push({ event: "getAppRecordName", handler });
        }
      },
      getAppRootInstance(handler): any {
        if (self._api) {
          self._api.on.getAppRootInstance(handler);
        } else {
          self._onQueue.push({ event: "getAppRootInstance", handler });
        }
      },
      registerApplication(handler): any {
        if (self._api) {
          self._api.on.registerApplication(handler);
        } else {
          self._onQueue.push({ event: "registerApplication", handler });
        }
      },
      walkComponentTree(handler): any {
        if (self._api) {
          self._api.on.walkComponentTree(handler);
        } else {
          self._onQueue.push({ event: "walkComponentTree", handler });
        }
      },
      walkComponentParents(handler): any {
        if (self._api) {
          self._api.on.walkComponentParents(handler);
        } else {
          self._onQueue.push({ event: "walkComponentParents", handler });
        }
      },
      inspectComponent(handler): any {
        if (self._api) {
          self._api.on.inspectComponent(handler);
        } else {
          self._onQueue.push({ event: "inspectComponent", handler });
        }
      },
      getComponentBounds(handler): any {
        if (self._api) {
          self._api.on.getComponentBounds(handler);
        } else {
          self._onQueue.push({ event: "getComponentBounds", handler });
        }
      },
      getComponentName(handler): any {
        if (self._api) {
          self._api.on.getComponentName(handler);
        } else {
          self._onQueue.push({ event: "getComponentName", handler });
        }
      },
      getElementComponent(handler): any {
        if (self._api) {
          self._api.on.getElementComponent(handler);
        } else {
          self._onQueue.push({ event: "getElementComponent", handler });
        }
      },
    };
  }

  on: Hookable<Context>;
  notifyComponentUpdate(instance: any): any {
    if (this._api) {
      this._api.notifyComponentUpdate(instance);
    } else {
      this._notifyComponentUpdateQueue.add(instance);
    }
  }
  addTimelineLayer(options: TimelineLayerOptions) {
    if (this._api) {
      this._api.addTimelineLayer(options);
    } else {
      this._timelineLayerQueue.push(options);
    }
  }
  addTimelineEvent(options: TimelineEventOptions): any {
    if (this._api) {
      this._api.addTimelineEvent(options);
    } else {
      this._timelineEventQueue.push(options);
    }
  }

  toDevtools(api: DevtoolsPluginApi) {
    this._timelineLayerQueue.forEach((x) => api.addTimelineLayer(x));
    this._timelineEventQueue.forEach((x) => api.addTimelineEvent(x));

    this._onQueue.forEach((x) => api.on[x.event](x.handler));

    this._notifyComponentUpdateQueue.forEach((x) =>
      api.notifyComponentUpdate(x)
    );

    this._api = api;
    return api;
  }
}

export function setDevtoolApi(
  app: App,
  promiseApi: Promise<DevtoolsPluginApi>
) {
  const temp = new DevtoolsQueue();
  app.provide(DEVTOOLS_KEY, temp);

  promiseApi
    .then((x) => temp.toDevtools(x))
    .then((x) => app.provide(DEVTOOLS_KEY, x));
}

function getDevtools(): DevtoolsPluginApi | undefined {
  const devtools = inject(DEVTOOLS_KEY);
  if (!devtools) {
    console.warn(
      `[vue-composable] devtools not found, please run app.use(VueComposableDevtools)`
    );
  }
  return devtools;
}

export function useDevtoolsTimelineLayer(
  id: string,
  label: string,
  color: number
) {
  const api = getDevtools();
  let addEvent: (event: TimelineEvent, all?: boolean) => any = NO_OP;
  if (api) {
    api.addTimelineLayer({
      id,
      label,
      color,
    });
    addEvent = (event, all) =>
      api.addTimelineEvent({ layerId: id, event, all });
  }

  return {
    id,
    addEvent,
  };
}
