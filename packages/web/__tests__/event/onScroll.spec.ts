import { Vue, nextTick } from "../utils";
import { useOnScroll, ScrollResult } from "../../src/event/onScroll";
import { promisedTimeout } from "@vue-composable/core";

describe("onScroll", () => {
  it("should add the correct event", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("scroll");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      scrollTop: 0,
      scrollLeft: 0
    } as any;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    let use: ScrollResult | undefined = undefined;

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnScroll(element);
      }
    }).$mount();

    expect(element.addEventListener).toHaveBeenCalled();

    expect(use).toMatchObject({
      scrollTop: { value: 0 },
      scrollLeft: { value: 0 }
    });

    (element as any).scrollTop = 50;
    (element as any).scrollLeft = 50;

    handler!({});
    await nextTick();

    expect(use).toMatchObject({
      scrollTop: { value: 50 },
      scrollLeft: { value: 50 }
    });
  });

  it("should removeEventListener if `remove` is called", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      scrollTop: 0,
      scrollLeft: 0
    } as any;
    let use: ScrollResult | undefined = undefined;

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnScroll(element);
      }
    }).$mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    use!.remove();

    expect(element.removeEventListener).toHaveBeenCalled();
  });

  it("should debounce if wait is passed", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("scroll");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      scrollTop: 0,
      scrollLeft: 0
    } as any;
    let use: ScrollResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnScroll(element, wait);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalled();

    for (let i = 0; i < 10; i++) {
      (element as any).scrollTop = 10 + i;
      (element as any).scrollLeft = 10 + i;

      handler!({});
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      scrollTop: { value: 0 },
      scrollLeft: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      scrollTop: { value: 19 },
      scrollLeft: { value: 19 }
    });
  });

  it("should pass options to the event listener", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      scrollTop: 0,
      scrollLeft: 0
    } as any;
    const options = {
      passive: true
    };

    new Vue({
      template: "<div></div>",
      setup() {
        return useOnScroll(element, options);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      options
    );
  });
  
  it("should pass options to the event listener and be debounced", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("scroll");
        handler = listener;
      }),
      removeEventListener: jest.fn(),
      scrollTop: 0,
      scrollLeft: 0
    } as any;
    let use: ScrollResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;
    const options = {
      passive: true
    };

    new Vue({
      template: "<div></div>",
      setup() {
        use = useOnScroll(element, options, wait);
      }
    }).$mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      options
    );

    for (let i = 0; i < 10; i++) {
      (element as any).scrollTop = 10 + i;
      (element as any).scrollLeft = 10 + i;

      handler!({});
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      scrollTop: { value: 0 },
      scrollLeft: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      scrollTop: { value: 19 },
      scrollLeft: { value: 19 }
    });
  });
});
