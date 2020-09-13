import { isBoolean, isString } from "../utils";
import { ref, computed, Ref, onUnmounted, getCurrentInstance } from "../api";
import { PromiseResultFactory, usePromise } from "../promise";
import { useDevtoolsTimelineLayer } from "../devtools";

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

  /**
   * @description cancels the request on component unmount
   * @default true
   */
  unmountCancel?: boolean;

  /**
   * @description devtools timeline, if string sets the id otherwise
   * will set the request url
   * @default true
   */
  devtoolId?: boolean | string;
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
  return (
    v &&
    (isBoolean(v.isJson) ||
      isBoolean(v.parseImmediate) ||
      isBoolean(v.unmountCancel))
  );
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
  // TODO move to computeAsync
  const json: Ref<T | null> = ref(null);
  const text = ref("");
  const blob = ref<Blob>();

  const jsonError = ref<any | null>(null);

  const [isJson, parseImmediate, unmountCancel] = isFetchOptions(options)
    ? [
        options.isJson !== false,
        options.parseImmediate !== false,
        options.unmountCancel !== false,
      ]
    : isFetchOptions(requestInitOptions)
    ? [
        requestInitOptions.isJson !== false,
        requestInitOptions.parseImmediate !== false,
        requestInitOptions.unmountCancel !== false,
      ]
    : [true, true, true];

  const requestInit = options
    ? isString(options)
      ? (requestInitOptions as RequestInit)
      : isFetchOptions(options)
      ? options
      : isString(options.url)
      ? requestInitOptions
      : options
    : undefined;

  let addTimelineEvent:
    | ((time: number, request: any, extra: any) => any)
    | undefined = undefined;

  let devtoolId = __DEV__
    ? isString(options)
      ? options
      : isString((options as Request).url)
      ? (options as any).url
      : "useFetch"
    : undefined;

  if (__DEV__ && devtoolId) {
    const layer = useDevtoolsTimelineLayer(
      `useFetch:${devtoolId}`,
      devtoolId,
      0x32a2bf
    );
    addTimelineEvent = (time, request, extra) =>
      layer.addEvent({
        time,
        data: {
          ...request,
          ...extra,
        },
        meta: {},
      });
  }

  const isCancelled = ref(false);
  const cancelledMessage = ref<string | undefined>();

  let abortController: AbortController | undefined = undefined;
  const cancel = (message?: string) => {
    if (!abortController) {
      /* istanbul ignore else */
      if (__DEV__) {
        if (addTimelineEvent) {
          addTimelineEvent(
            Date.now(),
            { message },
            {
              type: "cancel_error",
              error: "No request has been made yet",
            }
          );
        }
        throw new Error("Cannot cancel because no request has been made");
      } else {
        return;
      }
    }
    abortController.abort();
    isCancelled.value = true;
    cancelledMessage.value = message;

    if (addTimelineEvent) {
      addTimelineEvent(
        Date.now(),
        { message },
        {
          type: "cancel",
        }
      );
    }
  };

  const use = usePromise(async (request: RequestInfo, init?: RequestInit) => {
    abortController = new AbortController();

    if (addTimelineEvent) {
      addTimelineEvent(
        Date.now(),
        isString(request) ? { url: request } : request,
        { type: "request", init }
      );
    }

    const response = await fetch(request, {
      signal: abortController.signal,
      ...requestInit,
      ...init,
    });

    if (addTimelineEvent) {
      addTimelineEvent(Date.now(), response, {
        type: "response",
        init,
        request,
      });
    }

    if (response) {
      const promises = [
        // JSON
        isJson
          ? response
              .clone()
              .json()
              .then((x) => (json.value = x))
              .catch((x) => {
                json.value = null;
                jsonError.value = x;
              })
          : Promise.resolve(),
        // BLOB
        response
          .clone()
          .blob()
          .then((x) => {
            blob.value = x;
          }),

        // TEXT
        response
          .clone()
          .text()
          .then((x) => {
            text.value = x;
          }),
      ];
      if (parseImmediate) {
        await Promise.all(promises);

        if (addTimelineEvent) {
          addTimelineEvent(
            Date.now(),
            {},
            {
              type: "parsed",
              json: json.value,
              blob: blob.value,
              text: text.value,
              request,
            }
          );
        }
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

  if (unmountCancel && getCurrentInstance()) {
    onUnmounted(() => {
      if (abortController) {
        cancel("unmounted");
      }
    });
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
    statusText,
  };
}
