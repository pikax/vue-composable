import { Ref, computed, watch } from "@vue/composition-api";
import { minMax, RefTyped, wrap } from "./utils";

type PaginationControl = () => void;

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

export function usePagination(options: PaginationOptions): PaginationResult {
  const _currentPage = wrap(options.currentPage);
  const pageSize = wrap(options.pageSize);
  const total = wrap(options.total);


  const currentPage: Ref<number> = computed<number>({
    get() {
      return _currentPage.value;
    },
    set(v) {
      if (typeof v !== "number") return;
      _currentPage.value = minMax(v, 1, lastPage.value);
    }
  });

  const lastPage = computed(() => Math.ceil(total.value / pageSize.value));
  
  // make sure the current page is the correct value
  currentPage.value = _currentPage.value;

  const offset = computed(() =>
    Math.min((currentPage.value - 1) * pageSize.value, total.value)
  );

  const prev = () => --currentPage.value;
  const next = () => ++currentPage.value;
  const first = () => (currentPage.value = 1);
  const last = () => (currentPage.value = lastPage.value);

  // lastPage may never be < currentPage
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

    //Computed
    lastPage,
    offset,

    // Functions
    next,
    prev,
    first,
    last
  };
}
