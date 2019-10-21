"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_api_1 = require("@vue/composition-api");
function usePromise(fn) {
    if (!fn) {
        throw new Error(`[usePromise] argument can't be null`);
    }
    if (typeof fn !== "function") {
        throw new Error(`[usePromise] expects function, but received ${typeof fn}`);
    }
    const loading = composition_api_1.ref(true);
    const error = composition_api_1.ref(null);
    const result = composition_api_1.ref(null);
    const promise = composition_api_1.ref();
    let lastPromise = null;
    const exec = async (...args) => {
        loading.value = true;
        error.value = null;
        result.value = null;
        const currentPromise = (promise.value = lastPromise = fn(...args));
        try {
            const r = await currentPromise;
            if (lastPromise === currentPromise) {
                result.value = r;
            }
            return r;
        }
        catch (er) {
            if (lastPromise === currentPromise) {
                error.value = er;
                result.value = null;
            }
            throw er;
        }
        finally {
            if (lastPromise === currentPromise) {
                loading.value = false;
            }
        }
    };
    return {
        exec,
        result,
        promise,
        loading,
        error
    };
}
exports.usePromise = usePromise;
//# sourceMappingURL=promise.js.map