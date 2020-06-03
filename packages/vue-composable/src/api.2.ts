/* istanbul ignore file */

export {
  ref,
  isRef,
  Ref,
  onMounted,
  onUnmounted,
  inject,
  InjectionKey,
  provide,
  reactive,
  computed,
  getCurrentInstance
} from "@vue/composition-api";
export { VueConstructor as App } from "vue";

import {
  Ref,
  watch as vueWatch,
  isRef,
  set,
  getCurrentInstance,
  onUnmounted,
  computed
} from "@vue/composition-api";
import Vue, { PluginFunction } from "vue";

export type Plugin = PluginFunction<any>;

interface WatcherOption {
  immediate: boolean;
  deep: boolean;
  flush: FlushMode;
}
export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

export type ComputedRef<T> = Readonly<Ref<Readonly<T>>>;
export type UnwrapRef<T> = T extends Ref<infer R> ? R : T;

// vue watch
declare type CleanupRegistrator = (invalidate: () => void) => void;
declare type SimpleEffect = (onCleanup: CleanupRegistrator) => void;
declare type StopHandle = () => void;
declare type WatcherCallBack<T> = (
  newVal: T,
  oldVal: T,
  onCleanup: CleanupRegistrator
) => void;
declare type WatcherSource<T> = Ref<T> | (() => T);
declare type MapSources<T> = {
  [K in keyof T]: T[K] extends WatcherSource<infer V> ? V : never;
};
declare type FlushMode = "pre" | "post" | "sync";
interface WatcherOption {
  immediate: boolean;
  deep: boolean;
  flush: FlushMode;
}
export interface VueWatcher {
  lazy: boolean;
  get(): any;
  teardown(): void;
}

// export function watch<T = any>(
//   source: SimpleEffect,
//   options?: Omit<Partial<WatcherOption>, "lazy">
// ): StopHandle;
export function watch<T = any>(
  source: WatcherSource<T>,
  cb: WatcherCallBack<T>,
  options?: Partial<WatcherOption>
): StopHandle;
export function watch<T extends WatcherSource<unknown>[]>(
  sources: T,
  cb: (
    newValues: MapSources<T>,
    oldValues: MapSources<T>,
    onCleanup: CleanupRegistrator
  ) => any,
  options?: Partial<WatcherOption>
): StopHandle;
export function watch(source: any, cb: any, options?: any): any {
  const w = vueWatch(source, cb, {
    ...options,
    lazy:
      typeof options.immediate === "boolean" ? !options.immediate : undefined
  });

  const vm = getCurrentInstance();
  if (vm) {
    onUnmounted(w);
  }
  return w;
}

// FAKE readonly
export function readonly<T extends object>(target: T): Readonly<UnwrapRef<T>> {
  return computed(() => target) as any;
}
