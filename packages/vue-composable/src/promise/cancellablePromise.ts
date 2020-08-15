import { Ref, ref, getCurrentInstance, onUnmounted } from "../api";
import { usePromise, PromiseResultFactory, PromiseOptions } from "./promise";
import { isObject } from "../utils";

export interface CancellablePromiseResult<TCancel = any> {
  cancel: (result?: TCancel) => void;
  cancelled: Ref<boolean>;
}

export interface CancellablePromiseOptions extends PromiseOptions {
  /**
   * @description cancel the promise on component unmount
   * @default true
   */
  unmountCancel?: boolean;
}

export function useCancellablePromise<T extends any, TArgs extends Array<any>>(
  fn: (...args: TArgs) => Promise<T>
): PromiseResultFactory<Promise<T>, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<T extends any, TArgs extends Array<any>>(
  fn: (...args: TArgs) => Promise<T>,
  lazy: boolean
): PromiseResultFactory<Promise<T>, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<T extends any, TArgs extends Array<any>>(
  fn: (...args: TArgs) => Promise<T>,
  options: CancellablePromiseOptions
): PromiseResultFactory<Promise<T>, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<T extends any>(
  fn: () => T
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<T extends any>(
  fn: () => T,
  lazy: boolean
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<T extends any>(
  fn: () => T,
  options: CancellablePromiseOptions
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T,
  lazy: boolean
): PromiseResultFactory<T, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T,
  options: CancellablePromiseOptions
): PromiseResultFactory<T, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<T = any>(
  fn: () => T
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<T = any>(
  fn: () => T,
  lazy: boolean
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<T = any>(
  fn: () => T,
  options: CancellablePromiseOptions
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<T extends Promise<TR>, TR>(
  fn: () => T
): PromiseResultFactory<T> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T,
  lazyOptions?: CancellablePromiseOptions | boolean
): PromiseResultFactory<Promise<TR>, TArgs> & CancellablePromiseResult<TR> {
  const cancelled = ref(false);
  let _cancel: ((result?: TR) => void) | undefined = undefined;

  const cancel = (result?: TR) => {
    if (!_cancel) {
      /* istanbul ignore else */
      if (__DEV__) {
        console.warn(
          "[useCancellablePromise] There's no promise to cancel. Please make sure to call `exec`"
        );
      }
      return;
    }
    _cancel(result);
  };

  const promise = (p: T): T =>
    new Promise<TR>((res, rej) => {
      _cancel = result => {
        cancelled.value = true;
        rej(result);
      };
      p.then(res).catch(rej);
    }) as T;

  const use = usePromise<TR, TArgs>(
    (...args: TArgs) => promise(fn(...args)),
    lazyOptions as PromiseOptions
  );

  if (
    getCurrentInstance() &&
    (!isObject(lazyOptions) || lazyOptions.unmountCancel !== false)
  ) {
    onUnmounted(() => _cancel && _cancel());
  }

  return {
    ...use,
    cancel,
    cancelled
  };
}
