import { Ref, computed, watch, ref } from "@vue/composition-api";
import { isNumber, minMax, wrap, RefTyped } from "../utils";
/**
 * Pagination control
 */
export type PaginationControl = () => void;

/**
 * Pagination result object
 */
export interface PaginationResult {
  /**
   * Current page size
   */
  pageSize: Ref<number>;
  /**
   * Total number of items
   */
  total: Ref<number>;
  /**
   * Current page
   */
  currentPage: Ref<number>;
  /**
   * Current offset
   */
  offset: Ref<number>;

  /**
   * Last page number
   */
  lastPage: Readonly<Ref<number>>;

  /**
   * next page
   */
  next: PaginationControl;
  /**
   * prev page
   */
  prev: PaginationControl;
  /**
   * first page
   */
  first: PaginationControl;
  /**
   * last page
   */
  last: PaginationControl;
}

export interface PaginationOptions {
  pageSize: RefTyped<number>;
  total: RefTyped<number>;
  currentPage: RefTyped<number>;
}

export function usePagination(options: PaginationOptions): PaginationResult {
  const _currentPage = wrap(options.currentPage);
  const _pageSize = wrap(options.pageSize);
  const _offset = ref(0);
  const total = wrap(options.total);

  const offset = computed<number>({
    get() {
      return _offset.value;
    },
    set(v) {
      if (!isNumber(v)) {
        /* istanbul ignore else */
        if (__DEV__) {
          console.warn(
            `[offset] expected number but got: '${typeof v}' value: '${v}'`
          );
        }
        return;
      }
      _offset.value = Math.min(v, total.value);
    }
  });

  const currentPage: Ref<number> = computed<number>({
    get() {
      return _currentPage.value;
    },
    set(v) {
      if (!isNumber(v)) {
        /* istanbul ignore else  */
        if (__DEV__) {
          console.warn(
            `[currentPage] expected number but got: '${typeof v}' value: '${v}'`
          );
        }
        return;
      }
      _currentPage.value = minMax(v, 1, lastPage.value);
      // set the offset
      offset.value = (_currentPage.value - 1) * pageSize.value;
    }
  });

  const pageSize = computed<number>({
    get() {
      return _pageSize.value;
    },
    set(v) {
      if (!isNumber(v)) {
        /* istanbul ignore else */
        if (__DEV__) {
          console.warn(
            `[pageSize] expected number but got: '${typeof v}' value: '${v}'`
          );
        }
        return;
      }
      _pageSize.value = v;
    }
  });

  const lastPage = computed(() => Math.ceil(total.value / pageSize.value));
  // make sure the current page is the correct value
  currentPage.value = _currentPage.value;

  const prev = () => --currentPage.value;
  const next = () => ++currentPage.value;
  const first = () => (currentPage.value = 1);
  const last = () => (currentPage.value = lastPage.value);

  watch(
    [total, pageSize],
    () => {
      if (currentPage.value > lastPage.value) {
        currentPage.value = lastPage.value;
      }
    },
    { lazy: true } // no need to run on first render
  );

  return {
    // Mutable state
    pageSize,
    total,
    currentPage,
    offset,

    // Computed
    lastPage,

    // Functions
    next,
    prev,
    first,
    last
  };
}
