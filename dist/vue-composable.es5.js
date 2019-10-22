import { isRef, onMounted, onUnmounted, ref, computed, watch } from '@vue/composition-api';

function useEvent(el, name, listener, options) {
    const element = isRef(el) ? el.value : el;
    const remove = () => element.removeEventListener(name, listener);
    onMounted(() => element.addEventListener(name, listener, options));
    onUnmounted(remove);
    return remove;
}

function unwrap(o) {
    return isRef(o) ? o.value : o;
}
function wrap(o) {
    return isRef(o) ? o : ref(o);
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
    const pageSize = wrap(options.pageSize);
    const total = wrap(options.total);
    const currentPage = computed({
        get() {
            return _currentPage.value;
        },
        set(v) {
            if (typeof v !== "number")
                return;
            _currentPage.value = minMax(v, 1, lastPage.value);
        }
    });
    const lastPage = computed(() => Math.ceil(total.value / pageSize.value));
    // make sure the current page is the correct value
    currentPage.value = _currentPage.value;
    const offset = computed(() => Math.min((currentPage.value - 1) * pageSize.value, total.value));
    const prev = () => --currentPage.value;
    const next = () => ++currentPage.value;
    const first = () => (currentPage.value = 1);
    const last = () => (currentPage.value = lastPage.value);
    // lastPage may never be < currentPage
    watch([total, pageSize], () => {
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

function useArrayPagination(array, options) {
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

function useMouseResize(el, options, wait) {
    const element = unwrap(el);
    const mouseX = ref(0);
    const mouseY = ref(0);
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
    const height = ref(element.clientHeight);
    const width = ref(element.clientWidth);
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
    const scrollTop = ref(element.scrollTop);
    const scrollLeft = ref(element.scrollLeft);
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
    const loading = ref(false);
    const error = ref(null);
    const result = ref(null);
    const promise = ref();
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
    const cancelled = ref(false);
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

export { debounce, useArrayPagination, useCancellablePromise, useDebounce, useEvent, useMouseResize, useOnResize, useOnScroll, usePagination, usePromise };
