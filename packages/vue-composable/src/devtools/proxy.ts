import { DevtoolsPluginApi, Hooks } from "@vue/devtools-api";
import { promisedTimeout } from "../utils";

type OnEvent = { type: Hooks; args: any[] };
type ApiEvent = { type: keyof DevtoolsPluginApi; args: any[] };

let apiProxyFactory: (
  promiseApi: Promise<DevtoolsPluginApi>
) => DevtoolsPluginApi = undefined as any;

async function pushEventsToApi(
  api: DevtoolsPluginApi,
  EventQueue: OnEvent[],
  ApiQueue: ApiEvent[]
) {
  setTimeout(async () => {
    const priority: (keyof DevtoolsPluginApi)[] = [
      "addTimelineLayer",
      "addInspector",
      "sendInspectorTree",
      "sendInspectorState",
      "addTimelineEvent",
    ];

    for (const k of priority) {
      for (const it of ApiQueue.filter((x) => x.type === k)) {
        // @ts-ignore
        api[k](...it.args);
      }
      await promisedTimeout(20);
    }

    new Set(
      ApiQueue.filter((x) => x.type === "notifyComponentUpdate").map(
        (x) => x.args[0]
      )
    ).forEach((x) => api.notifyComponentUpdate(x));

    // @ts-ignore
    EventQueue.forEach((x) => api.on[x.type](...x.args));

    EventQueue.length = 0;
    ApiQueue.length = 0;
  }, 100);
}

if (__VUE_2__) {
  apiProxyFactory = (promiseApi) => {
    const EventQueue: OnEvent[] = [];
    const ApiQueue: ApiEvent[] = [];
    let api: DevtoolsPluginApi;

    function queueEvent(type: keyof DevtoolsPluginApi, args: any) {
      if (api) {
        //@ts-ignore
        api[type](...args);
      } else {
        ApiQueue.push({ type, args });
      }
    }

    promiseApi.then((x) => {
      api = x;
      pushEventsToApi(api, EventQueue, ApiQueue);
    });

    const proxyApi: DevtoolsPluginApi = {
      notifyComponentUpdate(_: any): any {
        queueEvent("notifyComponentUpdate", arguments);
      },
      addTimelineLayer(_) {
        queueEvent("addTimelineLayer", arguments);
      },
      addTimelineEvent(_): any {
        queueEvent("addTimelineEvent", arguments);
      },

      addInspector(_): any {
        queueEvent("addInspector", arguments);
      },
      sendInspectorTree(_): any {
        queueEvent("sendInspectorTree", arguments);
      },
      sendInspectorState(_): any {
        queueEvent("sendInspectorState", arguments);
      },

      on: {
        transformCall(handler): any {
          if (api) {
            api.on.transformCall(handler);
          } else {
            //@ts-ignore2
            EventQueue.push({ type: "transformCall", args: arguments });
          }
        },
        getAppRecordName(handler): any {
          if (api) {
            api.on.getAppRecordName(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getAppRecordName", args: arguments });
          }
        },
        getAppRootInstance(handler): any {
          if (api) {
            api.on.getAppRootInstance(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getAppRootInstance", args: arguments });
          }
        },
        registerApplication(handler): any {
          if (api) {
            api.on.registerApplication(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "registerApplication", args: arguments });
          }
        },
        walkComponentTree(handler): any {
          if (api) {
            api.on.walkComponentTree(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "walkComponentTree", args: arguments });
          }
        },
        walkComponentParents(handler): any {
          if (api) {
            api.on.walkComponentParents(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "walkComponentParents", args: arguments });
          }
        },
        inspectComponent(handler): any {
          if (api) {
            api.on.inspectComponent(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "inspectComponent", args: arguments });
          }
        },
        getComponentBounds(handler): any {
          if (api) {
            api.on.getComponentBounds(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getComponentBounds", args: arguments });
          }
        },
        getComponentName(handler): any {
          if (api) {
            api.on.getComponentName(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getComponentName", args: arguments });
          }
        },
        getElementComponent(handler): any {
          if (api) {
            api.on.getElementComponent(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getElementComponent", args: arguments });
          }
        },

        getInspectorTree(handler): any {
          if (api) {
            api.on.getInspectorTree(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getInspectorTree", args: arguments });
          }
        },
        getInspectorState(handler): any {
          if (api) {
            api.on.getInspectorState(handler);
          } else {
            //@ts-ignore
            EventQueue.push({ type: "getInspectorState", args: arguments });
          }
        },
      },
    };

    return proxyApi;
  };
} else {
  apiProxyFactory = (promiseApi) => {
    let api: DevtoolsPluginApi;
    const EventQueue: OnEvent[] = [];
    const ApiQueue: ApiEvent[] = [];

    const onProxy = new Proxy(
      {},
      {
        get: (target, prop: Hooks) => {
          if (api) {
            return api.on[prop];
          } else if (prop in target) {
            // @ts-ignore
            return target[prop];
          } else {
            //@ts-ignore
            target[prop] = (...args) => {
              EventQueue.push({
                type: prop,
                args,
              });
            };
          }
        },
      }
    );
    const proxy = new Proxy(
      {
        on: onProxy,
      },
      {
        get: (target, prop: keyof DevtoolsPluginApi) => {
          if (prop === "on") {
            return target.on;
          }
          if (api) {
            return api[prop];
          }

          if (prop in target) {
            // @ts-ignore
            return target[prop];
          }

          // @ts-ignore
          return (target[prop] = (...args) => {
            ApiQueue.push({
              type: prop,
              args,
            });
          });
        },
      }
    );

    promiseApi.then((x) => {
      api = x;
      pushEventsToApi(api, EventQueue, ApiQueue);
    });
    return proxy as any;
  };
}

export default apiProxyFactory;
