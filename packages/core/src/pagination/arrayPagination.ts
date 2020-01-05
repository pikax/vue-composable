import {
  usePagination,
  PaginationResult,
  PaginationOptions
} from "./pagination";
import { RefTyped, wrap } from "@vue-composable/core";
import { computed, ComputedRef } from "@vue/runtime-core";

export interface ArrayPaginationResult<T extends Array<any>>
  extends PaginationResult {
  // result: Readonly<Ref<T>>;

  result: ComputedRef<T>;

}

export function useArrayPagination<T extends Array<TR>, TR>(
  array: RefTyped<T>,
  options?: Partial<Omit<PaginationOptions, 'total'>>
): ArrayPaginationResult<T>;
export function useArrayPagination<T extends Array<any>>(
  array: RefTyped<T>,
  options?: Partial<Omit<PaginationOptions, 'total'>>
): ArrayPaginationResult<T> {
  const arrayRef = wrap(array);

  const pagination = usePagination({
    ...{
      currentPage: 1,
      pageSize: 10,
    },
    ...options,
    total: computed(() => arrayRef.value.length)
  });

  const result = computed(() => {
    const array = arrayRef.value;
    if (!Array.isArray(array)) return [];
    return array.slice(
      pagination.offset.value,
      pagination.offset.value + pagination.pageSize.value
    );
  }) as ComputedRef<T>;

  return {
    ...pagination,
    result
  };
}
