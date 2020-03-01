import {
  getVariableFor,
  setVariableFor,
  useCssVariables,
  UseCssVariables
} from "../../src";
import { Vue } from "../utils";

describe("CSS variables", () => {
  let callback: () => void;
  const _mutationObserver = window.MutationObserver;
  const observeFn = jest.fn().mockImplementation(() => {
    callback();
  });
  const disconnectFn = jest.fn();
  const constructorFn = jest.fn();

  beforeAll(() => {
    class MutationObserver {
      constructor(...args: any[]) {
        constructorFn(...args);
      }
      observe = observeFn;
      disconnect = disconnectFn;
    }
    Object.defineProperty(window, "MutationObserver", {
      writable: true,
      configurable: true,
      value: MutationObserver
    });
    Object.defineProperty(global, "MutationObserver", {
      writable: true,
      configurable: true,
      value: MutationObserver
    });
  });

  afterAll(() => {
    Object.defineProperty(window, "MutationObserver", {
      writable: true,
      configurable: true,
      value: _mutationObserver
    });
    Object.defineProperty(global, "MutationObserver", {
      writable: true,
      configurable: true,
      value: _mutationObserver
    });
  });

  beforeEach(() => {
    observeFn.mockReset();
    constructorFn.mockReset();
    disconnectFn.mockReset();
  });

  it("should retrieve the correct value for a defined CSS variable", async () => {
    const element = document.createElement("div");
    element.style.setProperty("--variable-name", "#fff");

    const definedVariable = getVariableFor("variable-name", element);
    expect(definedVariable).toBe("#fff");

    const undefinedVariable = getVariableFor("undefined-variable", element);
    expect(undefinedVariable).toBeNull();
  });

  it("should retrieve the correct value for an undefined CSS variable", async () => {
    const element = document.createElement("div");
    const undefinedVariable = getVariableFor("undefined-variable", element);
    expect(undefinedVariable).toBeNull();
  });

  it("should set the value of a CSS variable on an element", async () => {
    const element = document.createElement("div");

    setVariableFor("variable-name", "#fff", element);

    expect(element.style.getPropertyValue("--variable-name")).toBe("#fff");
  });

  it("should know if the observer is no longer listening", async () => {
    let variables: UseCssVariables<Record<string, string>> = {} as any;

    new Vue({
      template: "<div></div>",
      setup() {
        variables = useCssVariables({});
      }
    }).$mount();

    let { listening, stop, resume } = variables;

    expect(listening).toMatchObject({
      value: true
    });

    stop();

    expect(listening).toMatchObject({
      value: false
    });

    resume();

    expect(listening).toMatchObject({
      value: true
    });
  });

  it("should automatically start the observer and stops it on destroy", async () => {
    const vm = new Vue({
      template: "<div></div>",
      setup() {
        useCssVariables({
          test: "variable-name"
        });
      }
    });

    vm.$mount();

    expect(observeFn).toHaveBeenCalledTimes(1);
    expect(disconnectFn).toHaveBeenCalledTimes(0);

    vm.$destroy();

    expect(observeFn).toHaveBeenCalledTimes(1);
    expect(disconnectFn).toHaveBeenCalledTimes(1);
  });

  it("should update properties thanks to the observer", async () => {
    const element = document.createElement("div");
    let variables: UseCssVariables<Record<string, string>> = {} as any;

    new Vue({
      template: "<div></div>",
      setup() {
        variables = useCssVariables(
          {
            test: "variable-name"
          },
          element
        );
      }
    }).$mount();

    callback = () => {
      variables.test.value = getVariableFor("variable-name", element);
    };

    expect(variables.test.value).toBeNull();

    // Simulate an observation
    setVariableFor("variable-name", "red", element);
    callback();

    expect(variables.test.value).toBe("red");
  });
});
