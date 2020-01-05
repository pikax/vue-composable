import { computed, Ref, ComputedRef } from "@vue/runtime-core";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { usePromise, PromiseResultFactory } from "@vue-composable/core";

/* istanbul ignore next  */
const _axios = axios || (globalThis && (globalThis as any).axios);

interface AxiosReturn<TData> extends PromiseResultFactory<Promise<AxiosResponse<TData>>, [AxiosRequestConfig]> {
  readonly client: Ref<Readonly<AxiosInstance>>;
  readonly data: ComputedRef<TData | null>;
  readonly status: Ref<number | null>;
  readonly statusText: Ref<string | null>;
}

// TODO replace by shared project
const isObject = (d: any): d is Object => typeof d === 'object';
const isString = (d: any): d is String => typeof d === 'string';
const isBoolean = (d: any): d is Boolean => typeof d === 'boolean';

export function useAxios<TData = any>(url: string, config?: AxiosRequestConfig, throwException?: boolean): AxiosReturn<TData>;
export function useAxios<TData = any>(config?: AxiosRequestConfig, throwException?: boolean): AxiosReturn<TData>;
export function useAxios<TData = any>(configUrl?: AxiosRequestConfig | string, configThrowException?: AxiosRequestConfig | boolean, throwException = false): AxiosReturn<TData> {
  /* istanbul ignore next  */
  __DEV__ &&
    !_axios &&
    console.warn(`[axios] not installed, please install it`);

  const config = !isString(configUrl) ? configUrl : isObject(configThrowException) ? configThrowException as AxiosRequestConfig : undefined;
  throwException = isBoolean(configThrowException) ? configThrowException : throwException;

  const axiosClient = _axios.create(config);
  const client = computed(() => axiosClient);
  const use = usePromise(async (request: AxiosRequestConfig) => {
    return axiosClient.request<any, AxiosResponse<TData>>(request);
  }, throwException);

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
  if (typeof configUrl === 'string') {
    use.exec({ url: configUrl });
  } else if (config && config.url) {
    use.exec(config)
  }

  return {
    ...use,
    client,
    data,
    status,
    statusText
  };
}
