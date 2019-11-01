(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vue/composition-api'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', '@vue/composition-api', 'axios'], factory) :
  (global = global || self, factory(global.vueComposable = {}, global.vueCompositionApi, global._axios));
}(this, (function (exports, compositionApi, _axios) { 'use strict';

  _axios = _axios && _axios.hasOwnProperty('default') ? _axios['default'] : _axios;

  // export function unwrap<T>(o: RefTyped<T>): T {
  //   return isRef(o) ? o.value : o;
  // }
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
  const axios = _axios || (globalThis && globalThis.axios);
  function useAxios(config) {
      /* istanbul ignore next  */
       !axios && console.warn(`[axios] not installed, please install it`);
      const axiosClient = axios.create(config);
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

  exports.debounce = debounce;
  exports.useArrayPagination = useArrayPagination;
  exports.useAxios = useAxios;
  exports.useCancellablePromise = useCancellablePromise;
  exports.useDebounce = useDebounce;
  exports.useEvent = useEvent;
  exports.useFetch = useFetch;
  exports.useOnMouseMove = useOnMouseMove;
  exports.useOnResize = useOnResize;
  exports.useOnScroll = useOnScroll;
  exports.usePagination = usePagination;
  exports.usePromise = usePromise;
  exports.useWebSocket = useWebSocket;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
