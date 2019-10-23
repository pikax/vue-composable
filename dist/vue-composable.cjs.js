'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var compositionApi = require('@vue/composition-api');

function useEvent(el, name, listener, options) {
    const element = compositionApi.isRef(el) ? el.value : el;
    const remove = () => element.removeEventListener(name, listener);
    compositionApi.onMounted(() => element.addEventListener(name, listener, options));
    compositionApi.onUnmounted(remove);
    return remove;
}

function unwrap(o) {
    return compositionApi.isRef(o) ? o.value : o;
}
function wrap(o) {
    return compositionApi.isRef(o) ? o : compositionApi.ref(o);
}
function minMax(val, min, max) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
}

function usePagination(options) {
    const _currentPage = wrap(options.currentPage);
    const _pageSize = wrap(options.pageSize);
    const _offset = compositionApi.ref(0);
    const total = wrap(options.total);
    const offset = compositionApi.computed({
        get() {
            return _offset.value;
        },
        set(v) {
            if (typeof v !== "number") {
                /* istanbul ignore else */
                if (process.env.NODE_ENV !== "production") {
                    console.warn(`[offset] expected number but got: '${typeof v}' value: '${v}'`);
                }
                return;
            }
            _offset.value = Math.min(v, total.value);
        }
    });
    const currentPage = compositionApi.computed({
        get() {
            return _currentPage.value;
        },
        set(v) {
            if (typeof v !== "number") {
                /* istanbul ignore else  */
                if (process.env.NODE_ENV !== "production") {
                    console.warn(`[currentPage] expected number but got: '${typeof v}' value: '${v}'`);
                }
                return;
            }
            _currentPage.value = minMax(v, 1, lastPage.value);
            // set the offset
            offset.value = (_currentPage.value - 1) * pageSize.value;
        }
    });
    const pageSize = compositionApi.computed({
        get() {
            return _pageSize.value;
        },
        set(v) {
            if (typeof v !== "number") {
                /* istanbul ignore else */
                if (process.env.NODE_ENV !== "production") {
                    console.warn(`[pageSize] expected number but got: '${typeof v}' value: '${v}'`);
                }
                return;
            }
            _pageSize.value = v;
        }
    });
    const lastPage = compositionApi.computed(() => Math.ceil(total.value / pageSize.value));
    // make sure the current page is the correct value
    currentPage.value = _currentPage.value;
    const prev = () => --currentPage.value;
    const next = () => ++currentPage.value;
    const first = () => (currentPage.value = 1);
    const last = () => (currentPage.value = lastPage.value);
    compositionApi.watch([total, pageSize], () => {
        if (currentPage.value > lastPage.value) {
            currentPage.value = lastPage.value;
        }
    }, { lazy: true } // no need to run on first render
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

function useArrayPagination(array, options) {
    const arrayRef = wrap(array);
    const pagination = usePagination({
        ...{
            currentPage: 1,
            pageSize: 10,
        },
        ...options,
        total: compositionApi.computed(() => arrayRef.value.length)
    });
    const result = compositionApi.computed(() => {
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

function useDebounce(handler, wait) {
    return debounce(handler, wait);
}
/* istanbul ignore next */
function debounce(func, waitMilliseconds = 50, options = {
    isImmediate: false
}) {
    let timeoutId;
    return function (...args) {
        const context = this;
        const doLater = function () {
            timeoutId = undefined;
            if (!options.isImmediate) {
                func.apply(context, args);
            }
        };
        const shouldCallNow = options.isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
        if (shouldCallNow) {
            func.apply(context, args);
        }
    };
}

function useMouseMove(el, options, wait) {
    const element = unwrap(el);
    const mouseX = compositionApi.ref(0);
    const mouseY = compositionApi.ref(0);
    let handler = (ev) => {
        mouseX.value = ev.x;
        mouseY.value = ev.y;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = useDebounce(handler, wait);
    }
    const remove = useEvent(element, "mousemove", handler, eventOptions);
    return {
        mouseX,
        mouseY,
        remove
    };
}

function useOnResize(el, options, wait) {
    const element = unwrap(el);
    const height = compositionApi.ref(element.clientHeight);
    const width = compositionApi.ref(element.clientWidth);
    let handler = (ev) => {
        height.value = element.clientHeight;
        width.value = element.clientWidth;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = useDebounce(handler, wait);
    }
    const remove = useEvent(element, "resize", handler, eventOptions);
    return {
        height,
        width,
        remove
    };
}

function useOnScroll(el, options, wait) {
    const element = unwrap(el);
    const scrollTop = compositionApi.ref(element.scrollTop);
    const scrollLeft = compositionApi.ref(element.scrollLeft);
    let handler = (ev) => {
        scrollTop.value = element.scrollTop;
        scrollLeft.value = element.scrollLeft;
    };
    const eventOptions = typeof options === "number" ? undefined : options;
    const ms = typeof options === "number" ? options : wait;
    if (ms) {
        handler = useDebounce(handler, wait);
    }
    const remove = useEvent(element, "scroll", handler, eventOptions);
    return {
        scrollTop,
        scrollLeft,
        remove
    };
}

function usePromise(fn) {
    if (!fn) {
        throw new Error(`[usePromise] argument can't be '${fn}'`);
    }
    if (typeof fn !== "function") {
        throw new Error(`[usePromise] expects function, but received ${typeof fn}`);
    }
    const loading = compositionApi.ref(false);
    const error = compositionApi.ref(null);
    const result = compositionApi.ref(null);
    const promise = compositionApi.ref();
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
            return undefined;
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

function useCancellablePromise(fn) {
    const cancelled = compositionApi.ref(false);
    let _cancel = undefined;
    const cancel = (result) => _cancel(result); // TODO add warning if cancel is undefined
    const promise = (p) => new Promise((res, rej) => {
        _cancel = result => {
            cancelled.value = true;
            rej(result);
        };
        p.then(res).catch(rej);
    });
    const use = usePromise((...args) => promise(fn(...args)));
    return {
        ...use,
        cancel,
        cancelled
    };
}

function useFetch(init) {
    const json = compositionApi.ref(null);
    // TODO add text = ref<string> ??
    const jsonError = compositionApi.ref(null);
    const use = usePromise(async (request) => {
        const response = await fetch(request, init);
        if (!init || init.isJson !== false) {
            const pJson = response
                .json()
                .then(x => (json.value = x))
                .catch(x => {
                json.value = null;
                jsonError.value = x;
            });
            if (!init || init.parseImmediate !== false) {
                await pJson;
            }
        }
        return response;
    });
    const status = compositionApi.computed(() => (use.result.value && use.result.value.status) || null);
    const statusText = compositionApi.computed(() => (use.result.value && use.result.value.statusText) || null);
    return {
        ...use,
        json,
        jsonError,
        status,
        statusText
    };
}

exports.debounce = debounce;
exports.useArrayPagination = useArrayPagination;
exports.useCancellablePromise = useCancellablePromise;
exports.useDebounce = useDebounce;
exports.useEvent = useEvent;
exports.useFetch = useFetch;
exports.useMouseMove = useMouseMove;
exports.useOnResize = useOnResize;
exports.useOnScroll = useOnScroll;
exports.usePagination = usePagination;
exports.usePromise = usePromise;
