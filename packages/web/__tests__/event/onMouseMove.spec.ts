import { createVue, nextTick } from "../utils";
import { useOnMouseMove, MouseMoveResult } from "../../src/event/onMouseMove";
import { promisedTimeout } from "@vue-composable/core";
import { ref, Ref } from "@vue/runtime-core";

describe("onMouseMove", () => {
  it("should add the correct event", () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("mousemove");
        handler = listener;
      }),
      removeEventListener: jest.fn()
    } as any;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    let use: MouseMoveResult | undefined = undefined;

    createVue({
      template: "<div></div>",
      setup() {
        use = useOnMouseMove(element);
      }
    }).mount();

    expect(element.addEventListener).toHaveBeenCalled();

    expect(use).toMatchObject({
      mouseX: { value: 0 },
      mouseY: { value: 0 }
    });

    handler!({
      x: 50,
      y: 50
    });

    expect(use).toMatchObject({
      mouseX: { value: 50 },
      mouseY: { value: 50 }
    });
  });

  it("should removeEventListener if `remove` is called", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    let use: MouseMoveResult | undefined = undefined;

    createVue({
      template: "<div></div>",
      setup() {
        use = useOnMouseMove(element);
      }
    }).mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    use!.remove();

    expect(element.removeEventListener).toHaveBeenCalled();
  });

  it("should debounce if wait is passed", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("mousemove");
        handler = listener;
      }),
      removeEventListener: jest.fn()
    } as any;
    let use: MouseMoveResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;

    createVue({
      template: "<div></div>",
      setup() {
        use = useOnMouseMove(element, wait);
      }
    }).mount();
    expect(element.addEventListener).toHaveBeenCalled();

    for (let i = 0; i < 10; i++) {
      handler!({
        x: 10 + i,
        y: 10 + i
      });
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      mouseX: { value: 0 },
      mouseY: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      mouseX: { value: 19 },
      mouseY: { value: 19 }
    });
  });

  it("should pass options to the event listener", () => {
    const element: Ref<Element> = ref({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }) as any;
    const options = {
      passive: true
    };

    createVue({
      template: "<div></div>",
      setup() {
        return useOnMouseMove(element, options);
      }
    }).mount();
    expect(element.value.addEventListener).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function),
      options
    );
  });

  it("should pass options to the event listener and be debounced", async () => {
    const element: Element = {
      addEventListener: jest.fn().mockImplementation((name, listener) => {
        expect(name).toBe("mousemove");
        handler = listener;
      }),
      removeEventListener: jest.fn()
    } as any;
    let use: MouseMoveResult | undefined = undefined;
    let handler: ((ev: Partial<MouseEvent>) => void) | undefined = undefined;
    const wait = 50;
    const options = {
      passive: true
    };

    createVue({
      template: "<div></div>",
      setup() {
        use = useOnMouseMove(element, options, wait);
      }
    }).mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "mousemove",
      expect.any(Function),
      options
    );

    for (let i = 0; i < 10; i++) {
      handler!({
        x: 10 + i,
        y: 10 + i
      });
    }

    await nextTick();

    // still waiting to set the values
    expect(use).toMatchObject({
      mouseX: { value: 0 },
      mouseY: { value: 0 }
    });

    await promisedTimeout(wait);
    expect(use).toMatchObject({
      mouseX: { value: 19 },
      mouseY: { value: 19 }
    });
  });
});
