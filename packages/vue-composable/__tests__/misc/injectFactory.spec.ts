import { injectFactory } from "../../src";
import { provide } from "../../src/api";
import { createVue } from "../utils";

describe("injectFactory", () => {
  it("should work", () => {
    const key = "hello";

    const fn = jest.fn();

    const comp = {
      template: `<div/>`,
      setup() {
        injectFactory(key, fn);
      }
    };

    createVue({
      components: {
        comp
      },
      template: `<comp/>`
    }).mount();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should not call injectFactory", () => {
    const key = "hello";

    const fn = jest.fn();

    const comp = {
      template: `<div/>`,
      setup() {
        injectFactory(key, fn);
      }
    };

    createVue({
      components: {
        comp
      },
      template: `<comp/>`,

      setup() {
        provide(key, 1);
        injectFactory(key, fn);
      }
    }).mount();

    expect(fn).not.toHaveBeenCalled();
  });
});
