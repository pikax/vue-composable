import { ref, computed, watch } from "@vue/composition-api";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { usePromise } from "../promise/promise";

/* istanbul ignore next  */
const _axios = axios || (globalThis && (globalThis as any).axios);

export function useAxios<TData = any>(config?: AxiosRequestConfig) {
  /* istanbul ignore next  */
  __DEV__ && !_axios && console.warn(`[axios] not installed, please install it`);

  const axiosClient = _axios.create(config);
  const client = computed(() => axiosClient);
  const use = usePromise(async (request: AxiosRequestConfig) => {
    return axiosClient.request(request);
  });

  const data = computed<TData>(
    () =>
      (use.result.value && use.result.value.data) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.data) ||
      null
  );
  const status = computed(
    () =>
      (use.result.value && use.result.value.status) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.status) ||
      null
  );
  const statusText = computed(
    () =>
      (use.result.value && use.result.value.statusText) ||
      (use.error.value &&
        use.error.value.response &&
        use.error.value.response.statusText) ||
      null
  );

  return {
    ...use,
    client,
    data,
    status,
    statusText
  };
}
