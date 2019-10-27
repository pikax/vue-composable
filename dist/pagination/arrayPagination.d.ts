import { PaginationResult, PaginationOptions } from "./pagination";
import { RefTyped } from "../utils";
import { Ref } from "@vue/composition-api";
export interface ArrayPaginationResult<T extends Array<any>> extends PaginationResult {
    result: Readonly<Ref<T>>;
}
export declare function useArrayPagination<T extends Array<TR>, TR>(array: RefTyped<T>, options?: Partial<Omit<PaginationOptions, 'total'>>): ArrayPaginationResult<T>;
