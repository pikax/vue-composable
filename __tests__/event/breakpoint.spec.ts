import { onMounted, onUnmounted, Ref, ref } from "@vue/composition-api";
import { Vue, nextTick } from "../utils";
import { useBreakpoint } from "../../src";
import { promisedTimeout } from "../../src/utils";

describe("breakpoint", () => {
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
    const vm = new Vue({
      template: "<div></div>",
      setup() {
        return useBreakpoint({ L: 100 });
      }
    });
    expect(addEventListenerMock).not.toHaveBeenCalled();
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    vm.$mount();
    expect(addEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.anything(),
      {
        passive: true
      }
    );
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    vm.$destroy();
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
    const vm = new Vue({
      template: "<div></div>",
      setup() {
        return (breakpoint = useBreakpoint(breakpoints));
      }
    });

    vm.$mount();
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
      current: { value: 'L' }
    });

    await setWindowInnerWidth(200);
    expect(breakpoint).toMatchObject({
      S: { value: true },
      L: { value: true },
      XL: { value: true },
      current: { value: 'XL' }
    });

    vm.$destroy();
  });

});
