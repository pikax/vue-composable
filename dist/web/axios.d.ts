import { AxiosRequestConfig } from "axios";
export declare function useAxios<TData = any>(config?: AxiosRequestConfig): {
    client: Readonly<import("@vue/composition-api").Ref<Readonly<import("axios").AxiosInstance>>>;
    data: Readonly<import("@vue/composition-api").Ref<Readonly<TData>>>;
    status: Readonly<import("@vue/composition-api").Ref<Readonly<any>>>;
    statusText: Readonly<import("@vue/composition-api").Ref<Readonly<any>>>;
    exec: (request: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<any> | undefined>;
    promise: import("@vue/composition-api").Ref<Promise<import("axios").AxiosResponse<any>> | undefined>;
    result: import("@vue/composition-api").Ref<import("axios").AxiosResponse<any> | null>;
    loading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<any>;
};
