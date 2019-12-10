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
export declare function useFetch<T = any>(options?: UseFetchOptions): {
    json: import("@vue/composition-api").Ref<T | null>;
    jsonError: import("@vue/composition-api").Ref<any>;
    status: Readonly<import("@vue/composition-api").Ref<number | null>>;
    statusText: Readonly<import("@vue/composition-api").Ref<string | null>>;
    exec: (request: RequestInfo, init?: RequestInit | undefined) => Promise<Response | undefined>;
    promise: import("@vue/composition-api").Ref<Promise<Response> | undefined>;
    result: import("@vue/composition-api").Ref<Response | null>; /**
     * @description if the value is `true` it will parse the `json` before resolving the promise
     * @default true
     */
    loading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<any>;
};
