import { Ref, ref } from "../../src/api";
import { createVue, nextTick } from "../utils";
import { useEvent, NO_OP } from "../../src";

describe("event", () => {
  it("should add event on lifecycle", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        useEvent(element, "load", mockHandler, options);
      }
    });
    expect(element.addEventListener).not.toHaveBeenCalled();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler,
      options
    );
    expect(element.removeEventListener).not.toHaveBeenCalled();

    destroy();

    expect(element.removeEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler
    );
  });

  it("should add event on window lifecycle", () => {
    const element: Window = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        useEvent(element, "load", mockHandler, options);
      }
    });
    expect(element.addEventListener).not.toHaveBeenCalled();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler,
      options
    );
    expect(element.removeEventListener).not.toHaveBeenCalled();

    destroy();
    expect(element.removeEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler
    );
  });

  it("should add event on ref", () => {
    const element: Ref<Element> = ref({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }) as any;
    const mockHandler = jest.fn();
    const options = {};

    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        useEvent(element, "load", mockHandler, options);
      }
    });
    expect(element.value.addEventListener).not.toHaveBeenCalled();
    expect(element.value.removeEventListener).not.toHaveBeenCalled();

    mount();
    expect(element.value.addEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler,
      options
    );
    expect(element.value.removeEventListener).not.toHaveBeenCalled();

    destroy();
    expect(element.value.removeEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler
    );
  });

  it("should add event on `window`", () => {
    const mockHandler = jest.fn();
    const options = {};

    createVue({
      template: "<div></div>",
      setup() {
        useEvent(window, "load", mockHandler, options);
      }
    });
  });

  it("should remove event listener when return function is called", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    let remove: (() => void) | null = null;

    createVue({
      template: "<div></div>",
      setup() {
        remove = useEvent(element, "load", mockHandler, options);
      }
    }).mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    remove!();

    expect(element.removeEventListener).toHaveBeenCalled();
  });

  it("should not throw if undefined passed", () => {
    expect(useEvent(undefined as any, "load", NO_OP)).toBe(NO_OP);
  });

  it("should remove event listener if ref changes", async () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    const el = ref(element);

    createVue({
      template: "<div></div>",
      setup() {
        useEvent(el, "load", mockHandler, options);
      }
    }).mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();
    expect(element.addEventListener).toHaveBeenCalled();

    el.value = {
      ...element
    };

    await nextTick();

    expect(element.removeEventListener).toHaveBeenCalled();
    expect(element.addEventListener).toHaveBeenCalledTimes(2);

    el.value = null as any;

    await nextTick();
    expect(element.removeEventListener).toHaveBeenCalledTimes(2);
  });
});
