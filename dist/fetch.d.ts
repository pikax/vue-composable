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
export declare function useFetch<T = any>(init?: RequestInit & UseFetchOptions): {
    json: import("@vue/composition-api").Ref<T | null>;
    jsonError: import("@vue/composition-api").Ref<any>;
    status: import("@vue/composition-api").Ref<number | null>;
    statusText: import("@vue/composition-api").Ref<string | null>;
    exec: (request: RequestInfo) => Promise<Response | undefined>;
    promise: import("@vue/composition-api").Ref<Promise<Response> | undefined>;
    result: import("@vue/composition-api").Ref<Response | null>;
    loading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<any>;
};
