import { Ref, ref } from "@vue/runtime-core";
import { usePromise, PromiseResultFactory } from "./promise";

export interface CancellablePromiseResult<TCancel = any> {
  cancel: (result?: TCancel) => void;
  cancelled: Ref<boolean>;
}


export function useCancellablePromise<
  T extends any,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => Promise<T>
): PromiseResultFactory<Promise<T>, TArgs> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends any
>(
  fn: () => T
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TArgs> & CancellablePromiseResult;


export function useCancellablePromise<
  T = any
>(
  fn: () => T
): PromiseResultFactory<Promise<T>> & CancellablePromiseResult;


export function useCancellablePromise<T extends Promise<TR>, TR>(
  fn: () => T
): PromiseResultFactory<T> & CancellablePromiseResult;
export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<Promise<TR>, TArgs> & CancellablePromiseResult<TR> {
  const cancelled = ref(false);
  let _cancel: ((result?: TR) => void) | undefined = undefined;

  const cancel = (result?: TR) => _cancel!(result); // TODO add warning if cancel is undefined

  const promise = (p: T): T =>
    new Promise<TR>((res, rej) => {
      _cancel = result => {
        cancelled.value = true;
        rej(result);
      };
      p.then(res).catch(rej);
    }) as T;

  const use = usePromise<TR, TArgs>((...args: TArgs) =>
    promise(fn(...args))
  );

  return {
    ...use,
    cancel,
    cancelled
  };
}
