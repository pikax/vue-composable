jest.mock("@vue-composable/core", () => ({
  ...jest.requireActual("@vue-composable/core"),
  isClient: false
}));

import { Vue } from "../utils";
import { useBreakpoint } from "../../src";

describe("breakpoint ssr", () => {
  let matchMediaSpy: jest.SpyInstance = undefined as any;
  let windowWidth = window.innerWidth;
  beforeAll(() => {
    (window as any).innerWidth = windowWidth;

    matchMediaSpy = window.matchMedia = jest.fn(query => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      };
    });
  });

  beforeEach(() => {
    matchMediaSpy.mockClear();
  });

  const addEventListenerMock = jest.fn();
  const removeEventListenerMock = jest.fn();

  window.addEventListener = addEventListenerMock;
  window.removeEventListener = removeEventListenerMock;

  beforeEach(() => {
    addEventListenerMock.mockClear();
    removeEventListenerMock.mockReset();
  });

  it("should addEventListener to the window", () => {
    const vm = new Vue({
      template: "<div></div>",
      setup() {
        return useBreakpoint({ L: 100 });
      }
    });
    expect(addEventListenerMock).not.toHaveBeenCalled();
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    vm.$mount();
    expect(addEventListenerMock).not.toHaveBeenCalled();
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    vm.$destroy();
    expect(removeEventListenerMock).not.toHaveBeenCalled();
  });
});
