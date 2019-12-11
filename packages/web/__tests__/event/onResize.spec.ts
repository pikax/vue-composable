import { Vue, nextTick } from "../utils";
import { useOnResize, ResizeResult } from "../../src/event/onResize";
import { promisedTimeout } from "../../src/utils";

describe("onResize", () => {
  it("should add the correct event", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("resize");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    let use: ResizeResult | undefined = undefined;

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element);
      }
    }).$mount();

    expect(element.addEventListener).toHaveBeenCalled();

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
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    let use: ResizeResult | undefined = undefined;

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element);
      }
    }).$mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    use!.remove();

    expect(element.removeEventListener).toHaveBeenCalled();
  });

  it("should debounce if wait is passed", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("resize");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    let use: ResizeResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element, wait);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalled();

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
    let use: ResizeResult | undefined = undefined;
    const options = {
      passive: true
    };

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element, options);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
      options
    );
  });
  
  it("should pass options to the event listener and be debounced", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("resize");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      clientHeight: 0,
      clientWidth: 0
    } as any;
    let use: ResizeResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;
    const options = {
      passive: true
    };

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        use = useOnResize(element, options, wait);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
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
