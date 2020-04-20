import { computed, Ref, ComputedRef } from "./api";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import {
  PromiseResultFactory,
  isString,
  isBoolean,
  isObject
} from "vue-composable";
import { makeAxios } from "./makeAxios";

interface AxiosReturn<TData>
  extends PromiseResultFactory<
    Promise<AxiosResponse<TData>>,
    [AxiosRequestConfig | string]
  > {
  readonly client: Ref<Readonly<AxiosInstance>>;
  readonly data: ComputedRef<TData | null>;
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

  const use = makeAxios(axiosClient, throwException);

  // if url provided in the config, execute it straight away
  // NOTE: `false` is passed to the `exec` to prevent the exception to be thrown
  if (typeof configUrlThrowException === "string") {
    (use.exec as any)({ ...config, url: configUrlThrowException }, false);
  } else if (config && config.url) {
    (use.exec as any)(config, false);
  }

  return {
    ...use,
    client
  };
}
