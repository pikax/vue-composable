import {
  usePromise,
  isBoolean,
  isString,
  PromiseResultFactory
} from "@vue-composable/core";
import { ref, computed, Ref } from "@vue/composition-api";

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

type ExtractArguments<T = any> = T extends (...args: infer TArgs) => void
  ? TArgs
  : never;

interface FetchReturn<T>
  extends PromiseResultFactory<
    Promise<Response>,
    ExtractArguments<(request: RequestInfo, init?: RequestInit) => void>
  > {
  cancel(message?: string): void;
  isCancelled: Ref<Readonly<boolean>>;
  cancelledMessage: Ref<Readonly<string | undefined>>;

  text: Ref<Readonly<string>>;
  blob: Ref<Readonly<Blob | undefined>>;

  json: Ref<T | null>;
  jsonError: Ref<string>;
  status: Ref<number | null>;
  statusText: Ref<string | null>;
}

function isFetchOptions(v: any): v is UseFetchOptions {
  return v && (isBoolean(v.isJson) || isBoolean(v.parseImmediate));
}

export function useFetch<T = any>(
  request?: Partial<RequestInfo>,
  init?: RequestInit & UseFetchOptions
): FetchReturn<T>;
export function useFetch<T = any>(
  init?: RequestInit & UseFetchOptions
): FetchReturn<T>;
export function useFetch<T = any>(
  options?: Partial<RequestInfo> | (UseFetchOptions & RequestInit),
  requestInitOptions?: RequestInit & UseFetchOptions
): FetchReturn<T> {
  const json = ref<T>(null);
  const text = ref("");
  const blob = ref<Blob>();

  const jsonError = ref<any | null>(null);

  const [isJson, parseImmediate] = isFetchOptions(options)
    ? [options.isJson !== false, options.parseImmediate !== false]
    : isFetchOptions(requestInitOptions)
    ? [
        requestInitOptions.isJson !== false,
        requestInitOptions.parseImmediate !== false
      ]
    : [true, true];

  const requestInit = options
    ? isString(options)
      ? (requestInitOptions as RequestInit)
      : isFetchOptions(options)
      ? options
      : isString(options.url)
      ? requestInitOptions
      : options
    : undefined;

  const isCancelled = ref(false);
  const cancelledMessage = ref<string>();

  let abortController: AbortController | undefined = undefined;
  const cancel = (message?: string) => {
    if (!abortController) {
      /* istanbul ignore else */
      if (__DEV__) {
        throw new Error("Cannot cancel because no request has been made");
      } else {
        return;
      }
    }
    abortController.abort();
    isCancelled.value = true;
    cancelledMessage.value = message;
  };

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
        isJson
          ? response
              .clone()
              .json()
              .then(x => (json.value = x))
              .catch(x => {
                json.value = null;
                jsonError.value = x;
              })
          : Promise.resolve(),
        // BLOB
        response
          .clone()
          .blob()
          .then(x => {
            blob.value = x;
          }),

        // TEXT
        response
          .clone()
          .text()
          .then(x => {
            text.value = x;
          })
      ];
      if (parseImmediate) {
        await Promise.all(promises);
      }
    }
    return response;
  }, true);

  const status = computed(
    () => (use.result.value && use.result.value.status) || null
  );
  const statusText = computed(
    () => (use.result.value && use.result.value.statusText) || null
  );

  // if not options are provided in the config, execute it straight away
  // NOTE: `false` is passed to the `exec` to prevent the exception to be thrown
  if (options) {
    if (isString(options) || isString((options as Request).url)) {
      (use.exec as any)(options, undefined, false);
    }
  }

  return {
    ...use,

    cancel,
    isCancelled,
    cancelledMessage,

    text,
    blob,

    json,
    jsonError,
    status,
    statusText
  };
}
