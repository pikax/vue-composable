import type { ComponentState, InspectedComponentData } from "@vue/devtools-api";
import { Context } from "vm";
import { getCurrentInstance } from "../api";
import { isArray, isFunction, isObject, unwrap } from "../utils";
import { getDevtools } from "./api";

export interface DevtoolsComponentStateOptions {
  /**
   * devtools grouping it can be `setup`, `firebase bindings`, `observables`, or a custom string
   * @default setup
   */
  type: string;
  /**
   * if the key already in the state it will add it again
   * @default false
   */
  multiple: boolean;
}

function getSetupStateExtra(raw: any) {
  if (!raw) return {};

  // NOTE vue3!
  const isRef = !!raw.__v_isRef;
  const isComputed = isRef && !!raw.effect;
  const isReactive = !!raw.__v_reactive;

  const objectType = isComputed
    ? "Computed"
    : isRef
    ? "Ref"
    : isReactive
    ? "Reactive"
    : null;

  return {
    ...(objectType ? { objectType } : {}),
    ...(raw.effect ? { raw: raw.effect.raw.toString() } : {}),
  };
}

export function useDevtoolsComponentState(
  getState: (
    instanceData: InspectedComponentData,
    ctx: Context,
  ) => ComponentState[],
): void;
export function useDevtoolsComponentState(
  state: ComponentState[],
  options?: Omit<DevtoolsComponentStateOptions, "type">,
): void;
export function useDevtoolsComponentState(
  state: Record<string, object | ComponentState>,
  options?: DevtoolsComponentStateOptions,
): void;
export function useDevtoolsComponentState(
  state:
    | ComponentState[]
    | Record<string, object | ComponentState>
    | ((
      instanceData: InspectedComponentData,
      ctx: Context,
    ) => ComponentState[]),
  options?: DevtoolsComponentStateOptions,
): void {
  const instance = getCurrentInstance();
  const api = getDevtools();

  if (api && instance) {
    api.on.inspectComponent((payload, ctx) => {
      if (payload.componentInstance !== instance) return;

      const [type, multiple] = isObject(options)
        ? [options.type, options.multiple]
        : ["setup", false];

      if (isFunction(state)) {
        state(payload.instanceData, ctx);
        return;
      }

      let data = isArray(state) ? state : Object.keys(state).map(
        (key) => ({
          type,
          key,
          value: unwrap(state[key]),
          ...getSetupStateExtra(state[key]),
        } as ComponentState),
      );

      if (!multiple) {
        const inserted = new Set(payload.instanceData.state.map((x) => x.key));
        data = data.filter((x) => !inserted.has(x.key));
      }

      payload.instanceData.state.push(...data);
    });
  }
}
