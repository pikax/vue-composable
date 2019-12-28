import { ref } from "@vue/composition-api";

import { Vue, nextTick } from "../utils";
import { useIntersectionObserver, IntersectionObserverOptions } from "../../src";

describe("IntersectionObserver", () => {
  const _intersectionObserver = window.IntersectionObserver;
  const observeFn = jest.fn();
  const unobserveFn = jest.fn();
  const disconnectFn = jest.fn();
  const constructorFn = jest.fn();
  beforeAll(() => {
    class IntersectionObserver {
      constructor(...args: any[]) {
        constructorFn(...args);
      }
      observe = observeFn;
      unobserve = unobserveFn;
      disconnect = disconnectFn;
    }
    Object.defineProperty(
      window,
      'IntersectionObserver',
      { writable: true, configurable: true, value: IntersectionObserver }
    );
    Object.defineProperty(
      global,
      'IntersectionObserver',
      { writable: true, configurable: true, value: IntersectionObserver }
    );
  });

  afterAll(() => {
    Object.defineProperty(
      window,
      'IntersectionObserver',
      { writable: true, configurable: true, value: _intersectionObserver }
    );
    Object.defineProperty(
      global,
      'IntersectionObserver',
      { writable: true, configurable: true, value: _intersectionObserver }
    );
  })

  beforeEach(() => {
    observeFn.mockReset();
    unobserveFn.mockReset();
    constructorFn.mockReset();
    disconnectFn.mockReset();
  })


  it("should create new IntersectionObserver", () => {
    useIntersectionObserver(undefined as any);

    expect(constructorFn).toHaveBeenCalledTimes(1);
    expect(observeFn).not.toHaveBeenCalled();
  })

  it('should call disconnect on ref(options) change', async () => {
    const options = ref<IntersectionObserverOptions>({
      rootMargin: '0px'
    })

    useIntersectionObserver(options);
    expect(constructorFn).toHaveBeenCalledWith(expect.anything(), options.value);
    options.value.rootMargin = '1px';
    await nextTick();

    expect(constructorFn).toHaveBeenCalledTimes(2);
    expect(constructorFn).toHaveBeenLastCalledWith(expect.anything(), options.value);
    expect(disconnectFn).toHaveBeenCalledTimes(1);

    expect(observeFn).not.toHaveBeenCalled();
  })


  describe('observe/unobserve', () => {
    it('should `observe`/`unobserve` if `observe` has been called', () => {
      const options = ref<IntersectionObserverOptions>({
        rootMargin: '0px'
      })
      const { observe, unobserve } = useIntersectionObserver(options);
      expect(observeFn).not.toHaveBeenCalled();

      const el = document.createElement('div');
      observe(el);
      expect(observeFn).toHaveBeenCalledWith(el);
      unobserve(el);
      expect(unobserveFn).toHaveBeenCalledWith(el);
    })

    it('should unwrap the element', () => {
      const options = ref<IntersectionObserverOptions>({
        rootMargin: '0px'
      })
      const { observe, unobserve } = useIntersectionObserver(options);
      expect(observeFn).not.toHaveBeenCalled();

      const el = ref<Element>(document.createElement('div'));
      observe(el);
      expect(observeFn).toHaveBeenCalledWith(el.value);
      unobserve(el);
      expect(unobserveFn).toHaveBeenCalledWith(el.value);
    })
  })


  it('should set element when observing', () => {
    const options = ref<IntersectionObserverOptions>({
      rootMargin: '0px'
    })
    const { observe, elements } = useIntersectionObserver(options);
    const handling: (entries: IntersectionObserverEntry[]) => void = constructorFn.mock.calls[0][0];

    expect(handling).toBeDefined();
    const el = document.createElement('div');
    observe(el);
    const observeEntries = [
      { target: el } as any
    ];
    handling(observeEntries);

    expect(elements).toMatchObject(ref(observeEntries));
  })

  it('should set isIntersection if all elements are intersecting', async () => {
    const options = ref<IntersectionObserverOptions>({
      rootMargin: '0px'
    })
    const { isIntersecting } = useIntersectionObserver(options);
    const handling: (entries: IntersectionObserverEntry[]) => void = constructorFn.mock.calls[0][0];

    await nextTick();
    expect(isIntersecting.value).toBe(false);
    expect(handling).toBeDefined();

    let observeEntries: IntersectionObserverEntry[] = [
      { isIntersecting: true } as any
    ];
    handling(observeEntries);
    await nextTick();

    expect(isIntersecting.value).toBe(true);

    observeEntries = [
      { isIntersecting: true } as any,
      { isIntersecting: false } as any
    ];
    handling(observeEntries);

    await nextTick();

    expect(isIntersecting.value).toBe(false);

    observeEntries = [
      { isIntersecting: true } as any,
      { isIntersecting: true } as any
    ];
    handling(observeEntries);

    await nextTick();

    expect(isIntersecting.value).toBe(true);
  })

  describe('hooks onMounted/onUnmounted', () => {
    it("should hook", () => {
      const vm = new Vue({
        template: "<div ref='el'></div>",
        setup() {
          const el = ref<Element>();
          return {
            ...useIntersectionObserver(el, { rootMargin: '0px' }),
            el
          }
        }
      });
      vm.$mount();

      expect(observeFn).toHaveBeenCalledTimes(1);
      expect(disconnectFn).toHaveBeenCalledTimes(0);

      vm.$destroy();
      expect(observeFn).toHaveBeenCalledTimes(1);
      expect(disconnectFn).toHaveBeenCalledTimes(1);
    })

    it('should call observer on custom element', () => {
      const vm = new Vue({
        template: "<div></div>",
        setup() {
          return useIntersectionObserver(document.createElement('div'));
        }
      });
      vm.$mount();

      expect(observeFn).toHaveBeenCalledTimes(1);
      expect(disconnectFn).toHaveBeenCalledTimes(0);

      vm.$destroy();
      expect(observeFn).toHaveBeenCalledTimes(1);
      expect(disconnectFn).toHaveBeenCalledTimes(1);
    })

    it("should not call observer", () => {
      const vm = new Vue({
        template: "<div></div>",
        setup() {
          const el = ref<Element>();
          return {
            ...useIntersectionObserver(el),
            el
          }
        }
      });
      vm.$mount();

      expect(observeFn).not.toHaveBeenCalled();
      expect(disconnectFn).not.toHaveBeenCalled();

      vm.$destroy();
      expect(observeFn).not.toHaveBeenCalled();
      expect(disconnectFn).toHaveBeenCalled();
    })

  })

})