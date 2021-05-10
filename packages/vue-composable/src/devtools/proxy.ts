import { DevtoolsPluginApi, Hooks } from "@vue/devtools-api";
import { promisedTimeout } from "../utils";

type OnEvent = { type: Hooks; args: any[] };
type ApiEvent = { type: keyof DevtoolsPluginApi; args: any[] };

let apiProxyFactory: (
  promiseApi: Promise<DevtoolsPluginApi>,
) => DevtoolsPluginApi = undefined as any;

async function pushEventsToApi(
  api: DevtoolsPluginApi,
  EventQueue: OnEvent[],
  ApiQueue: ApiEvent[],
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
        (x) => x.args[0],
      ),
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
      notifyComponentUpdate(): any {
        queueEvent("notifyComponentUpdate", arguments);
      },
      addTimelineLayer(): any {
        queueEvent("addTimelineLayer", arguments);
      },
      addTimelineEvent(): any {
        queueEvent("addTimelineEvent", arguments);
      },
      addInspector(): any {
        queueEvent("addInspector", arguments);
      },
      sendInspectorTree(): any {
        queueEvent("sendInspectorTree", arguments);
      },
      sendInspectorState(): any {
        queueEvent("sendInspectorState", arguments);
      },
      getComponentBounds(): any {
        queueEvent("getComponentBounds", arguments);
      },
      getComponentName(): any {
        queueEvent("getComponentName", arguments);
      },
      getComponentInstances(): any {
        queueEvent("getComponentInstances", arguments);
      },
      highlightElement(): any {
        queueEvent("highlightElement", arguments);
      },
      unhighlightElement(): any {
        queueEvent("unhighlightElement", arguments);
      },

      on: {
        transformCall(handler) {
          if (api) {
            api.on.transformCall(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "transformCall", arg: arguments });
          }
        },
        getAppRecordName(handler) {
          if (api) {
            api.on.getAppRecordName(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getAppRecordName", arg: arguments });
          }
        },
        getAppRootInstance(handler) {
          if (api) {
            api.on.getAppRootInstance(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getAppRootInstance", arg: arguments });
          }
        },
        registerApplication(handler) {
          if (api) {
            api.on.registerApplication(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "registerApplication", arg: arguments });
          }
        },
        walkComponentTree(handler) {
          if (api) {
            api.on.walkComponentTree(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "walkComponentTree", arg: arguments });
          }
        },
        visitComponentTree(handler) {
          if (api) {
            api.on.visitComponentTree(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "visitComponentTree", arg: arguments });
          }
        },
        walkComponentParents(handler) {
          if (api) {
            api.on.walkComponentParents(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "walkComponentParents", arg: arguments });
          }
        },
        inspectComponent(handler) {
          if (api) {
            api.on.inspectComponent(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "inspectComponent", arg: arguments });
          }
        },
        getComponentBounds(handler) {
          if (api) {
            api.on.getComponentBounds(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getComponentBounds", arg: arguments });
          }
        },
        getComponentName(handler) {
          if (api) {
            api.on.getComponentName(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getComponentName", arg: arguments });
          }
        },
        getComponentInstances(handler) {
          if (api) {
            api.on.getComponentInstances(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getComponentInstances", arg: arguments });
          }
        },
        getElementComponent(handler) {
          if (api) {
            api.on.getElementComponent(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getElementComponent", arg: arguments });
          }
        },
        getComponentRootElements(handler) {
          if (api) {
            api.on.getComponentRootElements(handler);
          } else {
            EventQueue.push({
              //@ts-expect-error
              type: "getComponentRootElements",
              arg: arguments,
            });
          }
        },
        editComponentState(handler) {
          if (api) {
            api.on.editComponentState(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "editComponentState", arg: arguments });
          }
        },
        getComponentDevtoolsOptions(handler) {
          if (api) {
            api.on.getComponentDevtoolsOptions(handler);
          } else {
            EventQueue.push({
              //@ts-expect-error
              type: "getComponentDevtoolsOptions",
              arg: arguments,
            });
          }
        },
        inspectTimelineEvent(handler) {
          if (api) {
            api.on.inspectTimelineEvent(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "inspectTimelineEvent", arg: arguments });
          }
        },
        getInspectorTree(handler) {
          if (api) {
            api.on.getInspectorTree(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getInspectorTree", arg: arguments });
          }
        },
        getInspectorState(handler) {
          if (api) {
            api.on.getInspectorState(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "getInspectorState", arg: arguments });
          }
        },
        editInspectorState(handler) {
          if (api) {
            api.on.editInspectorState(handler);
          } else {
            //@ts-expect-error
            EventQueue.push({ type: "editInspectorState", arg: arguments });
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
            //@ts-expect-error
            return api.on[prop];
          } else if (prop in target) {
            // @ts-ignore
            return target[prop];
          } else {
            //@ts-ignore
            return (target[prop] = (...args) => {
              EventQueue.push({
                type: prop,
                args,
              });
            });
          }
        },
      },
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
      },
    );

    promiseApi.then((x) => {
      api = x;
      pushEventsToApi(api, EventQueue, ApiQueue);
    });
    return proxy as any;
  };
}

export default apiProxyFactory;
