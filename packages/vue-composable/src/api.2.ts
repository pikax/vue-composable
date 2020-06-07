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

export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref;
}

export const vueDelete = (x: any, o: string) => Vue.delete(x, o);
export const vueSet = set;

export interface ComputedRef<T = any> extends WritableComputedRef<T> {
  readonly value: T;
}

export interface WritableComputedRef<T> extends Ref<T> {}
export type UnwrapRef<T> = T extends Ref<infer R> ? R : T;

// vue watch

export type WatchEffect = (onInvalidate: InvalidateCbRegistrator) => void;

export type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);

export type WatchCallback<V = any, OV = any> = (
  value: V,
  oldValue: OV,
  onInvalidate: InvalidateCbRegistrator
) => any;

type MapSources<T> = {
  [K in keyof T]: T[K] extends WatchSource<infer V> ? V : never;
};

type MapOldSources<T, Immediate> = {
  [K in keyof T]: T[K] extends WatchSource<infer V>
    ? Immediate extends true
      ? V | undefined
      : V
    : never;
};

export interface WatchOptionsBase {
  flush?: FlushMode;
  // onTrack?: ReactiveEffectOptions['onTrack'];
  // onTrigger?: ReactiveEffectOptions['onTrigger'];
}

type InvalidateCbRegistrator = (cb: () => void) => void;

export type FlushMode = "pre" | "post" | "sync";

export interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {
  immediate?: Immediate;
  deep?: boolean;
}

export interface VueWatcher {
  lazy: boolean;
  get(): any;
  teardown(): void;
}

export type WatchStopHandle = () => void;

export interface VueWatcher {
  lazy: boolean;
  get(): any;
  teardown(): void;
}

// overload #1: array of multiple sources + cb
// Readonly constraint helps the callback to correctly infer value types based
// on position in the source array. Otherwise the values will get a union type
// of all possible value types.
export function watch<
  T extends Readonly<WatchSource<unknown>[]>,
  Immediate extends Readonly<boolean> = false
>(
  sources: T,
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

// overload #2: single source + cb
export function watch<T, Immediate extends Readonly<boolean> = false>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

// overload #3: watching reactive object w/ cb
export function watch<
  T extends object,
  Immediate extends Readonly<boolean> = false
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

// implementation
export function watch<T = any>(
  source: WatchSource<T> | WatchSource<T>[],
  cb: WatchCallback<T>,
  options?: WatchOptions
): WatchStopHandle {
  const w = vueWatch(source as any, cb, {
    ...options,
    lazy:
      options && typeof options.immediate === "boolean"
        ? !options.immediate
        : undefined
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
