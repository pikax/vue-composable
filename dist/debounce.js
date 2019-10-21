"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_es_1 = require("lodash-es");
function useDebounce(handler, wait) {
    return lodash_es_1.debounce(handler, wait);
}
exports.useDebounce = useDebounce;
//# sourceMappingURL=debounce.js.map