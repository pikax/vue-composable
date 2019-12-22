import { Vue, nextTick } from "../utils";
import { useOnResize, ResizeResult } from "../../src/event/onResize";
import { promisedTimeout } from "@vue-composable/core";

describe("onResize", () => {
  const windowEventSpy = jest.fn();
  const windowEvent = window.addEventListener;
  const windowRemoveEvent = window.removeEventListener;

  beforeAll(() => {
    window.addEventListener = windowEventSpy;
  })
  afterAll(() => {
    window.addEventListener = windowEvent;
    window.removeEventListener = windowRemoveEvent;
  })

  it("should add the correct event", async () => {
    const element: Element = {
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;

    windowEventSpy.mockImplementation((name, listener) => {
      expect(name).toBe("resize");
      handler = listener;
    });

    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    let use: ResizeResult | undefined = undefined;

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element);
      }
    }).$mount();

    expect(window.addEventListener).toHaveBeenCalled();

    expect(use).toMatchObject({
      height: { value: 0 },
      width: { value: 0 }
    });

    (element as any).clientHeight = 50;
    (element as any).clientWidth = 50;

    handler!({});
    await nextTick();

    expect(use).toMatchObject({
      height: { value: 50 },
      width: { value: 50 }
    });
  });

  it("should removeEventListener if `remove` is called", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    let use: ResizeResult | undefined = undefined;
    window.removeEventListener = jest.fn();

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element);
      }
    }).$mount();
    expect(window.removeEventListener).not.toHaveBeenCalled();

    use!.remove();

    expect(window.removeEventListener).toHaveBeenCalled();
  });

  it("should debounce if wait is passed", async () => {
    const element: Element = {
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    windowEventSpy.mockImplementation((name, listener) => {
      expect(name).toBe("resize");
      handler = listener;
    });
    let use: ResizeResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element, wait);
      }
    }).$mount();
    expect(window.addEventListener).toHaveBeenCalled();

    for (let i = 0; i < 10; i++) {
      (element as any).clientHeight = 10 + i;
      (element as any).clientWidth = 10 + i;

      handler!({});
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      height: { value: 0 },
      width: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      height: { value: 19 },
      width: { value: 19 }
    });
  });

  it("should pass options to the event listener", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    const options = {
      passive: true
    };

    new Vue({
      template: "<div></div>",
      setup() {
        return useOnResize(element, options);
      }
    }).$mount();
    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
      options
    );
  });

  it("should pass options to the event listener and be debounced", async () => {
    const element: Element = {
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    windowEventSpy.mockImplementation((name, listener) => {
      expect(name).toBe("resize");
      handler = listener;
    });
    let use: ResizeResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;
    const options = {
      passive: true
    };

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element, options, wait);
      }
    }).$mount();
    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
      options
    );

    for (let i = 0; i < 10; i++) {
      (element as any).clientHeight = 10 + i;
      (element as any).clientWidth = 10 + i;

      handler!({});
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      height: { value: 0 },
      width: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      height: { value: 19 },
      width: { value: 19 }
    });
  });
});
