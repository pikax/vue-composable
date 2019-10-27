import { AxiosRequestConfig } from "axios";
export declare function useAxios<TData = any>(config?: AxiosRequestConfig): {
    client: import("@vue/composition-api").Ref<import("axios").AxiosInstance>;
    data: import("@vue/composition-api").Ref<TData>;
    status: import("@vue/composition-api").Ref<any>;
    statusText: import("@vue/composition-api").Ref<any>;
    exec: (request: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any> | undefined>;
    promise: import("@vue/composition-api").Ref<Promise<import("axios").AxiosResponse<any>> | undefined>;
    result: import("@vue/composition-api").Ref<import("axios").AxiosResponse<any> | null>;
    loading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<any>;
};
