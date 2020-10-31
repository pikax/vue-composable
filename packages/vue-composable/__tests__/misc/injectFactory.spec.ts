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
      },
    };

    createVue({
      components: {
        comp,
      },
      template: `<comp/>`,
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
      },
    };

    const { app, mount } = createVue({
      components: {
        comp,
      },
      template: `<comp/>`,

      setup() {
        if (__VUE_2__) {
          provide(key, 1);
        }
        injectFactory(key, fn);
      },
    });

    if (!__VUE_2__) {
      app.provide(key, 1);
    }
    mount();

    expect(fn).not.toHaveBeenCalled();
  });
});
