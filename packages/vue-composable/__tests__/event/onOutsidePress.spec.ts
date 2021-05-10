import { createVue } from "../utils";
import { useOnOutsidePress } from "../../src";

describe("onOutsidePress", () => {
  const addEventListenerMock = jest.fn();
  let addEventListener: any;
  beforeAll(() => {
    addEventListener = document.addEventListener;
    document.addEventListener = addEventListenerMock;
  });

  beforeEach(() => {
    addEventListenerMock.mockClear();
  });

  afterAll(() => {
    document.addEventListener = addEventListener;
  });

  test("should work mousedown", () => {
    const element = document.createElement("div");
    let handler: (a: any) => void = {} as any;

    addEventListenerMock.mockImplementation((_, h) => {
      handler = h;
    });

    let callback = jest.fn();
    const { mount } = createVue({
      template: "<div></div>",
      setup() {
        useOnOutsidePress(element, callback);
      },
    });
    mount();

    expect(callback).not.toHaveBeenCalled();

    expect(addEventListenerMock).toHaveBeenLastCalledWith(
      "mousedown",
      expect.any(Function),
      { passive: true },
    );

    // inside
    handler({
      target: element,
    });
    expect(callback).not.toHaveBeenCalled();

    // outside
    handler({
      target: document.createElement("div"),
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  //   test("should work touchstart", () => {
  //     const element = document.createElement("div");
  //     let handler: (a: any) => void = {} as any;

  //     addEventListenerMock.mockImplementation((_, h) => {
  //       handler = h;
  //     });

  //     // remove mousedown
  //     const onmousedown = document.documentElement.onmousedown;
  //     document.documentElement.onmousedown

  //     let callback = jest.fn();
  //     const { mount } = createVue({
  //       template: "<div></div>",
  //       setup() {
  //         useOnOutsidePress(element, callback);
  //       },
  //     });
  //     mount();

  //     expect(callback).not.toHaveBeenCalled();

  //     expect(addEventListenerMock).toHaveBeenLastCalledWith(
  //       "touchstart",
  //       expect.any(Function),
  //       { passive: true }
  //     );

  //     // inside
  //     handler({
  //       target: element,
  //     });
  //     expect(callback).not.toHaveBeenCalled();

  //     // outside
  //     handler({
  //       target: document.createElement("div"),
  //     });
  //     expect(callback).toHaveBeenCalledTimes(1);

  //     document.documentElement.onmousedown = onmousedown;
  //   });
});
