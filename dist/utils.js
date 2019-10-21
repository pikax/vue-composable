"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
function unwrap(o) {
    return composition_api_1.isRef(o) ? o.value : o;
}
exports.unwrap = unwrap;
function wrap(o) {
    return composition_api_1.isRef(o) ? o : composition_api_1.ref(o);
}
exports.wrap = wrap;
function promisedTimeout(timeout) {
    return new Promise(res => {
        setTimeout(res, timeout);
    });
}
exports.promisedTimeout = promisedTimeout;
function minMax(val, min, max) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
}
exports.minMax = minMax;
//# sourceMappingURL=utils.js.map