(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vue/composition-api'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', '@vue/composition-api', 'axios'], factory) :
  (global = global || self, factory(global.vueComposable = {}, global.vueCompositionApi, global.axios));
}(this, (function (exports, compositionApi, axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  // export function unwrap<T>(o: RefTyped<T>): T {
  //   return isRef(o) ? o.value : o;
  // }
  function wrap(o) {
      return compositionApi.isRef(o) ? o : compositionApi.ref(o);
  }
  const isFunction = (val) => typeof val === "function";
  // export const isString = (val: unknown): val is string =>
  //   typeof val === "string";
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

  function useEvent(el, name, listener, options) {
      const element = wrap(el);
      const remove = () => element.value.removeEventListener(name, listener);
      compositionApi.onMounted(() => element.value.addEventListener(name, listener, options));
      compositionApi.onUnmounted(remove);
      return remove;
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
                  {
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
                  {
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
                  {
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

  function useOnMouseMove(el, options, wait) {
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
      const remove = useEvent(el, "mousemove", handler, eventOptions);
      return {
          mouseX,
          mouseY,
          remove
      };
  }

  function useOnResize(el, options, wait) {
      const element = wrap(el);
      const height = compositionApi.ref(element.value && element.value.clientHeight);
      const width = compositionApi.ref(element.value && element.value.clientWidth);
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
      const scrollTop = compositionApi.ref(element.value && element.value.scrollTop);
      const scrollLeft = compositionApi.ref(element.value && element.value.scrollLeft);
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
      const loading = compositionApi.ref(false);
      const error = compositionApi.ref(null);
      const result = compositionApi.ref(null);
      const promise = compositionApi.ref();
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

  const MAX_RETRIES = 9000;
  /* istanbul ignore next */
  const ExecutionId = Symbol( "RetryId" );
  /* istanbul ignore next */
  const CancellationToken = Symbol( "CancellationToken" );
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
      const isRetrying = compositionApi.ref(false);
      const nextRetry = compositionApi.ref();
      const retryErrors = compositionApi.ref([]);
      const cancellationToken = { value: false };
      const retryId = { value: 0 };
      const retryCount = compositionApi.computed(() => retryErrors.value.length);
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
      const json = compositionApi.ref(null);
      // TODO add text = ref<string> ??
      const jsonError = compositionApi.ref(null);
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

  /* istanbul ignore next  */
  const _axios = axios || (globalThis && globalThis.axios);
  function useAxios(config) {
      /* istanbul ignore next  */
       !_axios && console.warn(`[axios] not installed, please install it`);
      const axiosClient = _axios.create(config);
      const client = compositionApi.computed(() => axiosClient);
      const use = usePromise(async (request) => {
          return axiosClient.request(request);
      });
      const data = compositionApi.computed(() => (use.result.value && use.result.value.data) ||
          (use.error.value &&
              use.error.value.response &&
              use.error.value.response.data) ||
          null);
      const status = compositionApi.computed(() => (use.result.value && use.result.value.status) ||
          (use.error.value &&
              use.error.value.response &&
              use.error.value.response.status) ||
          null);
      const statusText = compositionApi.computed(() => (use.result.value && use.result.value.statusText) ||
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
      const messageEvent = compositionApi.ref(null);
      const errorEvent = compositionApi.ref();
      const data = compositionApi.ref(null);
      const isOpen = compositionApi.ref(false);
      const isClosed = compositionApi.ref(false);
      const errored = compositionApi.ref(false);
      /* istanbul ignore next  */
      let lastMessage = ( Date.now()) || undefined;
      ws.addEventListener("message", x => {
          messageEvent.value = x;
          data.value = x.data;
          // if the messages are to quick, we need to warn
          /* istanbul ignore else  */
          {
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

  // used to store all the instances of weakMap
  const keyedMap = new Map();
  const weakMap = new WeakMap();
  function useLocalStorage(key, defaultValue) {
      let lazy = false;
      let k = keyedMap.get(key);
      const json = localStorage.getItem(key);
      const storage = (k && weakMap.get(k)) ||
          (!!defaultValue && wrap(defaultValue)) ||
          compositionApi.ref(null);
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
          compositionApi.watch(storage, storage => {
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

  function useBreakpoint(breakpoints) {
      const result = {};
      const map = new Map();
      const current = compositionApi.ref();
      let sorted = [];
      for (const key in breakpoints) {
          const bp = breakpoints[key];
          const r = compositionApi.ref(false);
          result[key] = r;
          map.set(bp, {
              name: key,
              valid: r
          });
          sorted.push(bp);
      }
      sorted = sorted.sort((a, b) => b - a);
      const resize = () => {
          const width = window.innerWidth;
          let c = undefined;
          for (let i = 0; i < sorted.length; i++) {
              const bp = sorted[i];
              const r = map.get(bp);
              r.valid.value = width >= bp;
              if (width >= bp && c === undefined) {
                  c = r.name;
              }
          }
          current.value = c;
      };
      const processResize = useDebounce(resize, 10);
      const remove = () => window.removeEventListener("resize", processResize);
      compositionApi.onMounted(() => {
          resize();
          window.addEventListener("resize", processResize, {
              passive: true
          });
      });
      compositionApi.onUnmounted(() => remove());
      return {
          ...result,
          remove,
          current
      };
  }

  exports.debounce = debounce;
  exports.exponentialDelay = exponentialDelay;
  exports.noDelay = noDelay;
  exports.useArrayPagination = useArrayPagination;
  exports.useAxios = useAxios;
  exports.useBreakpoint = useBreakpoint;
  exports.useCancellablePromise = useCancellablePromise;
  exports.useDebounce = useDebounce;
  exports.useEvent = useEvent;
  exports.useFetch = useFetch;
  exports.useLocalStorage = useLocalStorage;
  exports.useOnMouseMove = useOnMouseMove;
  exports.useOnResize = useOnResize;
  exports.useOnScroll = useOnScroll;
  exports.usePagination = usePagination;
  exports.usePromise = usePromise;
  exports.useRetry = useRetry;
  exports.useWebSocket = useWebSocket;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
