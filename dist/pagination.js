"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
const utils_1 = require("./utils");
function usePagination(options) {
    const _currentPage = utils_1.wrap(options.currentPage);
    const pageSize = utils_1.wrap(options.pageSize);
    const total = utils_1.wrap(options.total);
    const currentPage = composition_api_1.computed({
        get() {
            return currentPage.value;
        },
        set(v) {
            if (typeof v !== "number")
                return;
            _currentPage.value = utils_1.minMax(v, 1, lastPage.value);
        }
    });
    const lastPage = composition_api_1.computed(() => Math.ceil(total.value / pageSize.value));
    const offset = composition_api_1.computed(() => Math.min((currentPage.value - 1) * pageSize.value, total.value));
    const prev = () => --currentPage.value;
    const next = () => ++currentPage.value;
    const first = () => (currentPage.value = 1);
    const last = () => (currentPage.value = lastPage.value);
    // lastPage may never be < currentPage
    composition_api_1.watch([total, pageSize], () => {
        if (_currentPage.value > lastPage.value) {
            _currentPage.value = lastPage.value;
        }
    }, { lazy: true } // no need to run on first render
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
exports.usePagination = usePagination;
//# sourceMappingURL=pagination.js.map