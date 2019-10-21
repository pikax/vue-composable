"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination_1 = require("./pagination");
const utils_1 = require("./utils");
const composition_api_1 = require("@vue/composition-api");
function useArrayPagination(array, options) {
    const arrayRef = utils_1.wrap(array);
    const pagination = pagination_1.usePagination({
        ...{
            currentPage: 1,
            pageSize: 10,
        },
        ...options,
        total: composition_api_1.computed(() => arrayRef.value.length)
    });
    const result = composition_api_1.computed(() => {
        const array = arrayRef.value;
        if (!Array.isArray(array))
            return [];
        return array.slice(pagination.offset.value, pagination.offset.value + pagination.pageSize.value);
    });
    return {
        ...pagination,
        result
    };
}
exports.useArrayPagination = useArrayPagination;
//# sourceMappingURL=array-pagination.js.map