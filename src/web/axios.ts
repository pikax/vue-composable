import { ref, computed, watch } from "@vue/composition-api";
import axios, { AxiosRequestConfig } from "axios";
import { usePromise } from "../promise/promise";

/* istanbul ignore next  */
__DEV__ && !axios && console.warn(`[axios] not installed, please install it`);

export function useAxios<TData = any>(config?: AxiosRequestConfig) {
  const axiosClient = axios.create(config);
  const client = computed(() => axiosClient);

  const use = usePromise(async (request: AxiosRequestConfig) => {
    return axiosClient.request(request);
  });

  const data = computed<TData>(
    () => (use.result.value && use.result.value.data) || null
  );
  const status = computed(
    () => (use.result.value && use.result.value.status) || null
  );
  const statusText = computed(
    () => (use.result.value && use.result.value.statusText) || null
  );

  return {
    ...use,
    client,
    data,
    status,
    statusText
  };
}
