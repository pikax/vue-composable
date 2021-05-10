import axios, { AxiosRequestConfig } from "axios";
import { isBoolean, isObject, isString } from "vue-composable";
import { makeAxios, MakeAxiosReturn } from "./makeAxios";

export interface AxiosReturn<TData> extends MakeAxiosReturn<TData> {}

export function useAxios<TData = any>(
  throwException?: boolean,
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  url: string,
  config?: AxiosRequestConfig,
  throwException?: boolean,
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  url: string,
  throwException?: boolean,
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  config?: AxiosRequestConfig,
  throwException?: boolean,
): AxiosReturn<TData>;
export function useAxios<TData = any>(
  configUrlThrowException?: AxiosRequestConfig | string | boolean,
  configThrowException?: AxiosRequestConfig | boolean,
  throwException = false,
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

  const use = makeAxios<TData>(axiosClient, throwException);

  // if url provided in the config, execute it straight away
  // NOTE: `false` is passed to the `exec` to prevent the exception to be thrown
  if (typeof configUrlThrowException === "string") {
    (use.exec as any)({ ...config, url: configUrlThrowException }, false);
  } else if (config && config.url) {
    (use.exec as any)(config, false);
  }

  return use;
}
