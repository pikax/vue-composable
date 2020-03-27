import { computed, Ref, ref } from "@vue/composition-api";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  CancelTokenSource
} from "axios";
import {
  usePromise,
  PromiseResultFactory,
  isString,
  isBoolean,
  isObject
} from "@vue-composable/core";

interface AxiosReturn<TData>
  extends PromiseResultFactory<
    Promise<AxiosResponse<TData>>,
    [AxiosRequestConfig | string]
  > {
  readonly client: Ref<Readonly<AxiosInstance>>;
  readonly data: Ref<TData | null>;
  readonly status: Ref<number | null>;
  readonly statusText: Ref<string | null>;

  cancel: (message?: string) => void;
  readonly isCancelled: Ref<boolean>;
  readonly cancelledMessage: Ref<string | null | undefined>;
  // readonly
}

export function useAxios<TData = any>(
  throwException?: boolean
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  url: string,
  config?: AxiosRequestConfig,
  throwException?: boolean
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  url: string,
  throwException?: boolean
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  config?: AxiosRequestConfig,
  throwException?: boolean
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  configUrlThrowException?: AxiosRequestConfig | string | boolean,
  configThrowException?: AxiosRequestConfig | boolean,
  throwException = false
): AxiosReturn<TData> {
  /* istanbul ignore next  */
  __DEV__ && !axios && console.warn(`[axios] not installed, please install it`);

  const config =
    !isString(configUrlThrowException) && !isBoolean(configUrlThrowException)
      ? configUrlThrowException
      : isObject(configThrowException)
      ? (configThrowException as AxiosRequestConfig)
      : undefined;
  throwException = isBoolean(configUrlThrowException)
    ? configUrlThrowException
    : isBoolean(configThrowException)
    ? configThrowException
    : throwException;

  const axiosClient = axios.create(config);
  const client = computed(() => axiosClient);
  const isCancelled = ref(false);
  const cancelledMessage = ref<string | undefined | null>(null);

  let cancelToken: CancelTokenSource | undefined = undefined;
  const cancel = (message?: string) => {
    if (!cancelToken) {
      /* istanbul ignore else */
      if (__DEV__) {
        throw new Error("Cannot cancel because no request has been made");
      } else {
        return;
      }
    }
    cancelToken.cancel(message);
    isCancelled.value = true;
    cancelledMessage.value = message;
  };

  const use = usePromise(
    async (request: AxiosRequestConfig | string) => {
      cancelToken = axios.CancelToken.source();
      isCancelled.value = false;
      cancelledMessage.value = null;

      const opts = isString(request) ? { url: request } : request;

      return axiosClient.request<any, AxiosResponse<TData>>({
        cancelToken: cancelToken.token,
        ...opts
      });
    },
    {
      lazy: true,
      throwException
    }
  );

  const data = computed<TData>(
    () =>
      (use.result.value && use.result.value.data) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.data) ||
      null
  );
  const status = computed<number>(
    () =>
      (use.result.value && use.result.value.status) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.status) ||
      null
  );
  const statusText = computed<string>(
    () =>
      (use.result.value && use.result.value.statusText) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.statusText) ||
      null
  );

  // if url provided in the config, execute it straight away
  // NOTE: `false` is passed to the `exec` to prevent the exception to be thrown
  if (typeof configUrlThrowException === "string") {
    (use.exec as any)({ ...config, url: configUrlThrowException }, false);
  } else if (config && config.url) {
    (use.exec as any)(config, false);
  }

  return {
    ...use,
    client,
    data,
    status,
    statusText,

    cancel,
    isCancelled,
    cancelledMessage
  };
}
