import { usePromise } from "../promise/promise";
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

export function useFetch<T = any>(options?: UseFetchOptions) {
  const json = ref<T>(null);
  // TODO add text = ref<string> ??
  const jsonError = ref<any | null>(null);
  const isJson = options ? options.isJson !== false : true;
  const parseImmediate = options ? options.parseImmediate !== false : true;

  const use = usePromise(async (request: RequestInfo, init?: RequestInit) => {
    const response = await fetch(request, init);

    if (isJson) {
      const pJson = response
        .json()
        .then(x => (json.value = x))
        .catch(x => {
          json.value = null;
          jsonError.value = x;
        });
      if (parseImmediate) {
        await pJson;
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

  return {
    ...use,
    json,
    jsonError,
    status,
    statusText
  };
}
