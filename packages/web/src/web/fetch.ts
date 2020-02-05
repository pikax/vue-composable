import { usePromise, isBoolean, isString } from "@vue-composable/core";
import { ref, computed } from "@vue/composition-api";

export interface UseFetchOptions {
  /**
   * @description if the value is `true` it will parse the response automatically `json`
   * @default true
   */
  isJson?: boolean;
  /**
   * @description if the value is `true` it will parse the `json` before resolving the promise
   * @default true
   */
  parseImmediate?: boolean;
}


export function useFetch<T = any>(options?: UseFetchOptions & Partial<RequestInfo>, requestInit?: RequestInit) {
  const json = ref<T>(null);
  const text = ref('');
  const blob = ref<Blob>();
  // TODO add text = ref<string> ??
  const isOptions = options ? isBoolean((options as UseFetchOptions).isJson) || isBoolean((options as UseFetchOptions).isJson) : false;

  const jsonError = ref<any | null>(null);
  const isJson = isOptions ? (options as UseFetchOptions).isJson !== false : true;
  const parseImmediate = isOptions ? (options as UseFetchOptions).parseImmediate !== false : true;

  const isCancelled = ref(false);
  const cancelledMessage = ref<string>();

  let abortController: AbortController | undefined = undefined;
  const cancel = (message?: string) => {
    if (!abortController) {
      /* istanbul ignore else */
      if (__DEV__) {
        throw new Error('Cannot cancel because no request has been made');
      } else {
        return;
      }
    }
    abortController.abort();
    isCancelled.value = true;
    cancelledMessage.value = message;
  }

  const use = usePromise(async (request: RequestInfo, init?: RequestInit) => {
    abortController = new AbortController();

    const response = await fetch(request, {
      signal: abortController.signal,
      ...requestInit,
      ...init
    });

    if (response) {
      const promises = [
        // JSON
        isJson ? response
          .clone()
          .json()
          .then(x => (json.value = x))
          .catch(x => {
            json.value = null;
            jsonError.value = x;
          }) : Promise.resolve(),
        // BLOB
        response.clone()
          .blob()
          .then(x => {
            blob.value = x
          }),

        // TEXT
        response.clone()
          .text()
          .then(x => {
            text.value = x
          })
      ];
      if (parseImmediate) {
        await Promise.all(promises);
      }
    }
    return response;
  });

  const status = computed(
    () => (use.result.value && use.result.value.status) || null
  );
  const statusText = computed(
    () => (use.result.value && use.result.value.statusText) || null
  );

  // if not options are provided in the config, execute it straight away
  // NOTE: `false` is passed to the `exec` to prevent the exception to be thrown
  if (options) {
    if (isString(options) || !isOptions) {
      (use.exec as any)(options, undefined, false)
    }
  }

  return {
    ...use,

    cancel,
    isCancelled,
    cancelledMessage,

    json,
    jsonError,
    status,
    statusText
  };
}
