import { isRef, ref, computed, watch, onMounted, onUnmounted } from '@vue/composition-api';
import axios from 'axios';

// export function unwrap<T>(o: RefTyped<T>): T {
//   return isRef(o) ? o.value : o;
// }
function wrap(o) {
    return isRef(o) ? o : ref(o);
}
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
// export const isSymbol = (val: unknown): val is symbol =>
//   typeof val === "symbol";
const isDate = (val) => isObject(val) && isFunction(val.getTime);
const isNumber = (val) => typeof val === "number";
const isObject = (val) => val !== null && typeof val === "object";
function isPromise(val) {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function promisedTimeout(timeout) {
    return new Promise(res => {
        setTimeout(res, timeout);
    });
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
    const _offset = ref(0);
    const total = wrap(options.total);
    const offset = computed({
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
    const currentPage = computed({
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
    const pageSize = computed({
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
    const lastPage = computed(() => Math.ceil(total.value / pageSize.value));
    // make sure the current page is the correct value
    currentPage.value = _currentPage.value;
    const prev = () => --currentPage.value;
    const next = () => ++currentPage.value;
    const first = () => (currentPage.value = 1);
    const last = () => (currentPage.value = lastPage.value);
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

function useEvent(el, name, listener, options) {
    const element = wrap(el);
    const remove = () => element.value.removeEventListener(name, listener);
    onMounted(() => element.value.addEventListener(name, listener, options));
    onUnmounted(remove);
    return remove;
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

function useOnMouseMove(el, options, wait) {
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
    const remove = useEvent(el, "mousemove", handler, eventOptions);
    return {
        mouseX,
        mouseY,
        remove
    };
}

function useOnResize(el, options, wait) {
    const element = wrap(el);
    const height = ref(element.value && element.value.clientHeight);
    const width = ref(element.value && element.value.clientWidth);
    let handler = () => {
        debugger;
        height.value = element.value.clientHeight;
        width.value = element.value.clientWidth;
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
    const element = wrap(el);
    const scrollTop = ref(element.value && element.value.scrollTop);
    const scrollLeft = ref(element.value && element.value.scrollLeft);
    let handler = (ev) => {
        scrollTop.value = element.value.scrollTop;
        scrollLeft.value = element.value.scrollLeft;
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
    const exec = async (...args) => {
        loading.value = true;
        error.value = null;
        result.value = null;
        const currentPromise = (promise.value = fn(...args));
        try {
            const r = await currentPromise;
            if (promise.value === currentPromise) {
                result.value = r;
            }
            return r;
        }
        catch (er) {
            if (promise.value === currentPromise) {
                error.value = er;
                result.value = null;
            }
            return undefined;
        }
        finally {
            if (promise.value === currentPromise) {
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

const MAX_RETRIES = 9000;
/* istanbul ignore next */
const ExecutionId = Symbol(process.env.NODE_ENV !== "production" ? "RetryId" : undefined);
/* istanbul ignore next */
const CancellationToken = Symbol(process.env.NODE_ENV !== "production" ? "CancellationToken" : undefined);
const defaultStrategy = async (options, context, factory, args) => {
    const retryId = context[ExecutionId].value;
    let i = -1;
    const maxRetries = options.maxRetries || MAX_RETRIES + 1;
    const delay = options.retryDelay || noDelay;
    context.retryErrors.value = [];
    context.isRetrying.value = false;
    context.nextRetry.value = undefined;
    let nextRetry = undefined;
    do {
        let success = false;
        let result = null;
        try {
            ++i;
            if (args) {
                result = factory(...args);
            }
            else {
                result = factory();
            }
            if (isPromise(result)) {
                result = await result;
            }
            // is cancelled?
            if (context[CancellationToken].value) {
                return null;
            }
            success = true;
        }
        catch (error) {
            result = null;
            context.retryErrors.value.push(error);
        }
        // is our retry current one?
        if (retryId !== context[ExecutionId].value) {
            return result;
        }
        if (success) {
            context.isRetrying.value = false;
            context.nextRetry.value = undefined;
            return result;
        }
        if (i >= maxRetries) {
            context.isRetrying.value = false;
            context.nextRetry.value = undefined;
            return Promise.reject(new Error(`[useRetry] max retries reached ${maxRetries}`));
        }
        context.isRetrying.value = true;
        const now = Date.now();
        const pDelayBy = delay(i); // wrapped
        const delayBy = isPromise(pDelayBy) ? await pDelayBy : pDelayBy; // unwrap promise
        if (!isPromise(pDelayBy) || !!delayBy) {
            if (isNumber(delayBy)) {
                nextRetry = delayBy;
            }
            else if (isDate(delayBy)) {
                nextRetry = delayBy.getTime();
            }
            else {
                throw new Error(`[useRetry] invalid value received from options.retryDelay '${typeof delayBy}'`);
            }
            // if the retry is in the past, means we need to await that amount
            if (nextRetry < now) {
                context.nextRetry.value = now + nextRetry;
            }
            else {
                context.nextRetry.value = nextRetry;
                nextRetry = nextRetry - now;
            }
            if (nextRetry > 0) {
                await promisedTimeout(nextRetry);
            }
        }
        // is cancelled?
        if (context[CancellationToken].value) {
            return null;
        }
        // is our retry current one?
        if (retryId !== context[ExecutionId].value) {
            return result;
        }
    } while (i < MAX_RETRIES);
    return null;
};
function useRetry(options, factory) {
    const opt = !options || isFunction(options) ? {} : options;
    const fn = isFunction(options) ? options : factory;
    if (!isFunction(options) && !isObject(options)) {
        throw new Error("[useRetry] options needs to be 'object'");
    }
    if (!!fn && !isFunction(fn)) {
        throw new Error("[useRetry] factory needs to be 'function'");
    }
    const isRetrying = ref(false);
    const nextRetry = ref();
    const retryErrors = ref([]);
    const cancellationToken = { value: false };
    const retryId = { value: 0 };
    const retryCount = computed(() => retryErrors.value.length);
    const context = {
        isRetrying,
        retryCount,
        nextRetry,
        retryErrors,
        [ExecutionId]: retryId,
        [CancellationToken]: cancellationToken
    };
    const exec = fn
        ? (...args) => {
            ++context[ExecutionId].value;
            return defaultStrategy(opt, context, fn, args);
        }
        : (f) => {
            ++context[ExecutionId].value;
            return defaultStrategy(opt, context, f, undefined);
        };
    const cancel = () => {
        context.isRetrying.value = false;
        context.retryErrors.value.push(new Error("[useRetry] cancelled"));
        context.nextRetry.value = undefined;
        cancellationToken.value = true;
    };
    return {
        ...context,
        cancel,
        exec
    };
}
const exponentialDelay = retryNumber => {
    const delay = Math.pow(2, retryNumber) * 100;
    const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
    return delay + randomSum;
};
const noDelay = () => 0;

function useFetch(options) {
    const json = ref(null);
    // TODO add text = ref<string> ??
    const jsonError = ref(null);
    const isJson = options ? options.isJson !== false : true;
    const parseImmediate = options ? options.parseImmediate !== false : true;
    const use = usePromise(async (request, init) => {
        const response = await fetch(request, init);
        if (isJson) {
            const pJson = response
                .json()
                .then(x => (json.value = x))
                .catch(x => {
                json.value = null;
                jsonError.value = x;
            });
            if (parseImmediate) {
                await pJson;
            }
        }
        return response;
    });
    const status = computed(() => (use.result.value && use.result.value.status) || null);
    const statusText = computed(() => (use.result.value && use.result.value.statusText) || null);
    return {
        ...use,
        json,
        jsonError,
        status,
        statusText
    };
}

/* istanbul ignore next  */
const _axios = axios || (globalThis && globalThis.axios);
function useAxios(config) {
    /* istanbul ignore next  */
    process.env.NODE_ENV !== "production" && !_axios && console.warn(`[axios] not installed, please install it`);
    const axiosClient = _axios.create(config);
    const client = computed(() => axiosClient);
    const use = usePromise(async (request) => {
        return axiosClient.request(request);
    });
    const data = computed(() => (use.result.value && use.result.value.data) ||
        (use.error.value &&
            use.error.value.response &&
            use.error.value.response.data) ||
        null);
    const status = computed(() => (use.result.value && use.result.value.status) ||
        (use.error.value &&
            use.error.value.response &&
            use.error.value.response.status) ||
        null);
    const statusText = computed(() => (use.result.value && use.result.value.statusText) ||
        (use.error.value &&
            use.error.value.response &&
            use.error.value.response.statusText) ||
        null);
    return {
        ...use,
        client,
        data,
        status,
        statusText
    };
}

function useWebSocket(url, protocols) {
    const ws = new WebSocket(url, protocols);
    const messageEvent = ref(null);
    const errorEvent = ref();
    const data = ref(null);
    const isOpen = ref(false);
    const isClosed = ref(false);
    const errored = ref(false);
    /* istanbul ignore next  */
    let lastMessage = (process.env.NODE_ENV !== "production" && Date.now()) || undefined;
    ws.addEventListener("message", x => {
        messageEvent.value = x;
        data.value = x.data;
        // if the messages are to quick, we need to warn
        /* istanbul ignore else  */
        if (process.env.NODE_ENV !== "production") {
            if (Date.now() - lastMessage < 2) {
                console.warn('[useWebSocket] message rate is too high, if you are using "data" or "messageEvent"' +
                    " you might not get updated of all the messages." +
                    ' Use "ws..addEventListener("message", handler)" instead');
            }
            lastMessage = Date.now();
        }
    });
    ws.addEventListener("error", error => {
        errorEvent.value = error;
        errored.value = true;
    });
    ws.addEventListener("close", () => {
        isOpen.value = false;
        isClosed.value = true;
    });
    ws.addEventListener("open", () => {
        isOpen.value = true;
        isClosed.value = false;
    });
    const send = (data) => ws.send(data);
    const close = (code, reason) => {
        ws.close(code, reason);
    };
    return {
        ws,
        send,
        close,
        messageEvent,
        errorEvent,
        data,
        isOpen,
        isClosed,
        errored
    };
}

function useScript(options) {
    const loading = ref(true);
    const error = ref(false);
    const success = ref(false);
    const opts = isString(options) ? { src: options } : options;
    const script = document.createElement("script");
    script.async = opts.async || false;
    script.defer = opts.defer || false;
    if (opts.module) {
        script.type = "module";
    }
    script.addEventListener("load", () => {
        loading.value = false;
        success.value = true;
        error.value = false;
    }, { passive: true });
    script.addEventListener("error", () => {
        loading.value = false;
        success.value = false;
        error.value = true;
    }, {
        passive: true
    });
    script.src = opts.src;
    document.body.appendChild(script);
    return {
        loading,
        error,
        success
    };
}

// used to store all the instances of weakMap
const keyedMap = new Map();
const weakMap = new WeakMap();
function useLocalStorage(key, defaultValue) {
    let lazy = false;
    let k = keyedMap.get(key);
    const json = localStorage.getItem(key);
    const storage = (k && weakMap.get(k)) ||
        (!!defaultValue && wrap(defaultValue)) ||
        ref(null);
    if (json && !k) {
        try {
            storage.value = JSON.parse(json);
            lazy = false;
        }
        catch (e) {
            /* istanbul ignore next */
            console.warn("[useLocalStorage] error parsing value from localStorage", key, e);
        }
    }
    // do not watch if we already created the instance
    if (!k) {
        k = {};
        keyedMap.set(key, k);
        weakMap.set(k, storage);
        watch(storage, storage => {
            if (storage === undefined) {
                localStorage.removeItem(key);
                return;
            }
            // do not overflow localStorage with updates nor keep doing stringify
            debounce(() => localStorage.setItem(key, JSON.stringify(storage)), 100)();
        }, {
            deep: true,
            lazy
        });
    }
    const clear = () => {
        keyedMap.forEach((v) => {
            const obj = weakMap.get(v);
            /* istanbul ignore else */
            if (obj) {
                obj.value = undefined;
            }
            weakMap.delete(v);
        });
        keyedMap.clear();
    };
    const remove = () => {
        keyedMap.delete(key);
        weakMap.delete(k);
        storage.value = undefined;
    };
    return {
        storage,
        clear,
        remove
    };
}

export { debounce, exponentialDelay, noDelay, useArrayPagination, useAxios, useCancellablePromise, useDebounce, useEvent, useFetch, useLocalStorage, useOnMouseMove, useOnResize, useOnScroll, usePagination, usePromise, useRetry, useScript, useWebSocket };
