import { computed, ComputedRef, Ref, ref } from "./api";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import { isString, PromiseResultFactory, usePromise } from "vue-composable";

export interface MakeAxiosReturn<TData> extends
  PromiseResultFactory<
    Promise<AxiosResponse<TData>>,
    [AxiosRequestConfig | string]
  > {
  readonly client: AxiosInstance;
  readonly data: ComputedRef<TData | null>;
  readonly status: Ref<number | null>;
  readonly statusText: Ref<string | null>;

  cancel: (message?: string) => void;
  readonly isCancelled: Ref<boolean>;
  readonly cancelledMessage: Ref<string | null | undefined>;
  // readonly
}

export function makeAxios<T>(
  client: AxiosInstance,
  throwException = false,
): MakeAxiosReturn<T> {
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

      return client.request<any, AxiosResponse>({
        cancelToken: cancelToken.token,
        ...opts,
      });
    },
    {
      lazy: true,
      throwException,
    },
  );

  const data = computed(
    () =>
      (use.result.value && use.result.value.data) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.data) ||
      null,
  );
  const status = computed<number>(
    () =>
      (use.result.value && use.result.value.status) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.status) ||
      null,
  );
  const statusText = computed<string>(
    () =>
      (use.result.value && use.result.value.statusText) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.statusText) ||
      null,
  );

  return {
    ...use,
    client,
    data,
    status,
    statusText,

    cancel,
    isCancelled,
    cancelledMessage,
  };
}
