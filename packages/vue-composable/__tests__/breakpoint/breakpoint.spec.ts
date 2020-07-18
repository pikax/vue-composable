import { createVue, nextTick } from "../utils";
import { useBreakpoint } from "../../src";
import { promisedTimeout } from "../../src/utils";

describe("breakpoint", () => {
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

  let callback: () => void;
  const addEventListenerMock = jest.fn((_, cb) => (callback = cb));
  const removeEventListenerMock = jest.fn();

  window.addEventListener = addEventListenerMock;
  window.removeEventListener = removeEventListenerMock;

  beforeEach(() => {
    addEventListenerMock.mockClear();
    removeEventListenerMock.mockReset();
  });

  async function setWindowInnerWidth(n: number) {
    (window as any).innerWidth = n as any;
    callback();
    await promisedTimeout(12);
    await nextTick();
  }

  it("should addEventListener to the window", () => {
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return useBreakpoint({ L: 100 });
      }
    });
    expect(addEventListenerMock).not.toHaveBeenCalled();
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    mount();
    expect(addEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.anything(),
      {
        passive: true
      }
    );
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    destroy();
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.anything()
    );
  });

  it("should return the correct breakpoint based on the window.innerWidth", async () => {
    const breakpoints = {
      XL: 100,
      S: 20,
      L: 80
    };
    let breakpoint: any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints));
      }
    });

    mount();
    await setWindowInnerWidth(30);
    expect(breakpoint).toMatchObject({
      S: { value: true },
      L: { value: false },
      XL: { value: false },
      current: { value: "S" }
    });

    await setWindowInnerWidth(20);
    expect(breakpoint).toMatchObject({
      S: { value: true },
      L: { value: false },
      XL: { value: false },
      current: { value: "S" }
    });

    await setWindowInnerWidth(19);
    expect(breakpoint).toMatchObject({
      S: { value: false },
      L: { value: false },
      XL: { value: false },
      current: { value: undefined }
    });

    await setWindowInnerWidth(85);
    expect(breakpoint).toMatchObject({
      S: { value: true },
      L: { value: true },
      XL: { value: false },
      current: { value: "L" }
    });

    await setWindowInnerWidth(200);
    expect(breakpoint).toMatchObject({
      S: { value: true },
      L: { value: true },
      XL: { value: true },
      current: { value: "XL" }
    });

    destroy();
  });

  it("should useMatchMedia if string is passed", () => {
    const breakpoints = {
      S: "(min-width: 320px)"
    };

    let breakpoint: any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints));
      }
    });

    mount();
    destroy();

    expect(matchMedia).toHaveBeenCalledWith(breakpoints.S);

    expect(breakpoint).toMatchObject({
      S: { value: true }
    });
  });

  it("should not useMatchMedia if valid width string is passed", () => {
    setWindowInnerWidth(500);
    const breakpoints = {
      S: "320px"
    };

    let breakpoint: any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints));
      }
    });

    mount();
    destroy();

    expect(matchMedia).not.toHaveBeenCalled();

    expect(breakpoint).toMatchObject({
      S: { value: true }
    });
  });

  it("should useMatchMedia if valid width string is passed", () => {
    setWindowInnerWidth(500);
    const breakpoints = {
      S: "320px"
    };

    let breakpoint: any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints));
      }
    });

    mount();
    destroy();

    expect(matchMedia).not.toHaveBeenCalled();

    expect(breakpoint).toMatchObject({
      S: { value: true }
    });
  });

  it("should still work with invalid breakpoint", () => {
    const breakpoints = {
      S: false
    };

    let breakpoint: any;
    const { mount, destroy } = createVue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints as any));
      }
    });

    mount();
    destroy();

    expect(matchMedia).toHaveBeenCalledWith(false);

    expect(breakpoint).toMatchObject({
      S: { value: true }
    });
  });

  it("should check the type of the current breakpoint", () => {
    createVue({
      template: "<div></div>",
      setup() {
        const breakpoint = useBreakpoint({
          xs: "0px",
          sm: 600,
          md: 960
        });

        // @ts-expect-error it should warn if the breakpoint doesn't exist
        breakpoint.current.value === "test";

        breakpoint.current.value === "xs";
        breakpoint.current.value === "sm";
      }
    });
  });
});
