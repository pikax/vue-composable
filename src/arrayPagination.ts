import {
  usePagination,
  PaginationResult,
  PaginationOptions
} from "./pagination";
import { RefTyped, wrap } from "./utils";
import { Ref, computed } from "@vue/composition-api";

export interface ArrayPaginationResult<T extends Array<any>>
  extends PaginationResult {
  result: Readonly<Ref<T>>;
}

export function useArrayPagination<T extends Array<TR>, TR>(
  array: RefTyped<T>,
  options?: Partial<Omit<PaginationOptions, 'total'>>
): ArrayPaginationResult<T>;
export function useArrayPagination<T extends Array<TR>, TR>(
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
  }) as Readonly<Ref<T>>;

  return {
    ...pagination,
    result
  };
}
