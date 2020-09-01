import type {
  DevtoolsPluginApi,
  TimelineEvent,
  Context,
  Hookable,
  TimelineLayerOptions,
  TimelineEventOptions,
  CustomInspectorOptions,
} from "@vue/devtools-api";
import { App, InjectionKey, inject } from "../api";
import { NO_OP, promisedTimeout } from "../utils";

// istanbul ignore next
const DEVTOOLS_KEY: InjectionKey<DevtoolsPluginApi> = /*#__PURE__*/ Symbol(
  (__DEV__ && "DEVTOOLS_KEY") || ``
);

type DevtoolsPluginApiMethods = Exclude<keyof DevtoolsPluginApi, "on">;

// queue devtools event
class DevtoolsQueue implements DevtoolsPluginApi {
  private _queue: { key: DevtoolsPluginApiMethods; args: any }[] = [];

  private _onQueue: { event: keyof Hookable<Context>; handler: any }[] = [];
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

      getInspectorTree(handler): any {
        if (self._api) {
          self._api.on.getInspectorTree(handler);
        } else {
          self._onQueue.push({ event: "getInspectorTree", handler });
        }
      },
      getInspectorState(handler): any {
        if (self._api) {
          self._api.on.getInspectorState(handler);
        } else {
          self._onQueue.push({ event: "getInspectorState", handler });
        }
      },
    };
  }

  on: Hookable<Context>;

  private queueEvent(key: DevtoolsPluginApiMethods, args: any) {
    if (this._api) {
      //@ts-ignore
      this._api[key](...args);
    } else {
      this._queue.push({ key, args });
    }
  }

  notifyComponentUpdate(_: any): any {
    this.queueEvent("notifyComponentUpdate", arguments);
  }
  addTimelineLayer(_: TimelineLayerOptions) {
    this.queueEvent("addTimelineLayer", arguments);
  }
  addTimelineEvent(_: TimelineEventOptions): any {
    this.queueEvent("addTimelineEvent", arguments);
  }

  addInspector(_: CustomInspectorOptions): any {
    this.queueEvent("addInspector", arguments);
  }
  sendInspectorTree(_: string): any {
    this.queueEvent("sendInspectorTree", arguments);
  }
  sendInspectorState(_: string): any {
    this.queueEvent("sendInspectorState", arguments);
  }

  toDevtools(api: DevtoolsPluginApi) {
    this._api = api;

    setTimeout(async () => {
      const priority: DevtoolsPluginApiMethods[] = [
        "addTimelineLayer",
        "addInspector",
        "sendInspectorTree",
        "sendInspectorState",
        "addTimelineEvent",
      ];

      for (const k of priority) {
        for (const it of this._queue.filter((x) => x.key === k)) {
          // @ts-ignore
          api[k](...it.args);
        }
        await promisedTimeout(20);
      }

      new Set(
        this._queue
          .filter((x) => x.key === "notifyComponentUpdate")
          .map((x) => x.args[0])
      ).forEach((x) => api.notifyComponentUpdate(x));

      this._onQueue.forEach((x) => api.on[x.event](x.handler));
    }, 10);

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
