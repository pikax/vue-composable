const Vue = require("vue/dist/vue.common.js");
import { onMounted, onUnmounted, Ref, ref } from "@vue/composition-api";
import { useEvent } from "../src/event";

describe("event", () => {
  jest.mock("@vue/composition-api");

  it("should add event on lifecycle", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        useEvent(element, "load", mockHandler, options);
      }
    });
    expect(element.addEventListener).not.toHaveBeenCalled();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    vm.$mount();
    expect(element.addEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler,
      options
    );
    expect(element.removeEventListener).not.toHaveBeenCalled();

    vm.$destroy();
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

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        useEvent(element, "load", mockHandler, options);
      }
    });
    expect(element.value.addEventListener).not.toHaveBeenCalled();
    expect(element.value.removeEventListener).not.toHaveBeenCalled();

    vm.$mount();
    expect(element.value.addEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler,
      options
    );
    expect(element.value.removeEventListener).not.toHaveBeenCalled();

    vm.$destroy();
    expect(element.value.removeEventListener).toHaveBeenCalledWith(
      "load",
      mockHandler
    );
  });

  it("should remove event listener when return function is called", () => {
    const element: Element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any;
    const mockHandler = jest.fn();
    const options = {};

    let remove: (() => void) | null = null;

    const vm = new Vue({
      template: "<div></div>",
      setup() {
        remove = useEvent(element, "load", mockHandler, options);
      }
    }).$mount();
    expect(element.removeEventListener).not.toHaveBeenCalled();

    remove!();

    expect(element.removeEventListener).toHaveBeenCalled();
  });
});
