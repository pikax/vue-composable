import { RefTyped } from "@vue-composable/core";
import { getCurrentInstance } from "@vue/composition-api";
import { useSharedRef } from "./sharedRef";


let shared: Set<string> | undefined = undefined;

export function refShared<T = any>(defaultValue?: RefTyped<T>, id?: string) {
  const vm = getCurrentInstance()!;
  const name = id ? id : `${vm.$vnode.tag}${(vm as any)._uid}`;

  if (__DEV__) {
    if (!shared) {
      shared = new Set();
    }
    if (shared.has(name)) {
      console.warn('[refShared] You can only have one refShared per component, if you need more please assign pass an id refShared(defaultValue, id)')
    }
    shared.add(name);
  }

  const { data, supported } = useSharedRef(name, defaultValue);

  if (__DEV__) {
    if (!supported) {
      console.warn('[refShared] is dependent of BroadcastChannel');
    }
  }

  return data;
}
