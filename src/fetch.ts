import { usePromise } from "./promise";
import { ref, computed, watch } from "@vue/composition-api";

export interface UseFetchOptions {
  /**
   * @description if the value is `true` it will parse the response automatically `json`
   * **default**: `true`
   */
  isJson?: boolean;
  /**
   * @description if the value is `true` it will parse the `json` before resolving the promise
   * **default**: `true`
   */
  parseImmediate?: boolean;
}

export function useFetch<T = any>(init?: RequestInit & UseFetchOptions) {
  const json = ref<T>(null);
  // TODO add text = ref<string> ??
  const jsonError = ref<any | null>(null);

  const use = usePromise(async (request: RequestInfo) => {
    const response = await fetch(request, init);

    if (!init || init.isJson !== false) {
      const pJson = response
        .json()
        .then(x => (json.value = x))
        .catch(x => {
          json.value = null;
          jsonError.value = x;
        });
      if (!init || init.parseImmediate !== false) {
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
