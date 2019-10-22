import { Ref, ref } from "@vue/composition-api";
import { usePromise, PromiseResultFactory } from "./promise";

export interface CancellablePromiseResult<TR> {
  cancel: (result?: TR) => void;
  cancelled: Ref<boolean>;
}

export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TR, TArgs> & CancellablePromiseResult<TR>;
export function useCancellablePromise<T extends Promise<TR>, TR>(
  fn: () => T
): PromiseResultFactory<T, TR> & CancellablePromiseResult<TR>;
export function useCancellablePromise<
  T extends Promise<TR>,
  TR,
  TArgs extends Array<any>
>(
  fn: (...args: TArgs) => T
): PromiseResultFactory<T, TR, TArgs> & CancellablePromiseResult<TR> {
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

  const use = usePromise<T, TR, TArgs>((...args: TArgs) =>
    promise(fn(...args))
  );

  return {
    ...use,
    cancel,
    cancelled
  };
}
