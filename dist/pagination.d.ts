import { Ref } from "@vue/composition-api";
import { RefTyped } from "./utils";
declare type PaginationControl = () => void;
export interface PaginationResult {
    pageSize: Ref<number>;
    total: Ref<number>;
    currentPage: Ref<number>;
    lastPage: Readonly<Ref<number>>;
    offset: Readonly<Ref<number>>;
    next: PaginationControl;
    prev: PaginationControl;
    first: PaginationControl;
    last: PaginationControl;
}
export interface PaginationOptions {
    pageSize: RefTyped<number>;
    total: RefTyped<number>;
    currentPage: RefTyped<number>;
}
export declare function usePagination(options: PaginationOptions): PaginationResult;
export {};
