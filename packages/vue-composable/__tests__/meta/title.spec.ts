import { useTitle } from "../../src";
import { createVue, nextTick } from "../utils";
import { Ref } from "../../src/api";

describe("title", () => {
  const _mutationObserver = window.MutationObserver;
  const observeFn = jest.fn();
  const disconnectFn = jest.fn();
  const constructorFn = jest.fn();
  const restoreMutationObserver = () => {
    Object.defineProperty(window, "MutationObserver", {
      writable: true,
      configurable: true,
      value: _mutationObserver,
    });
    Object.defineProperty(global, "MutationObserver", {
      writable: true,
      configurable: true,
      value: _mutationObserver,
    });
  };

  const mockMutationObserver = () => {
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
      value: MutationObserver,
    });
    Object.defineProperty(global, "MutationObserver", {
      writable: true,
      configurable: true,
      value: MutationObserver,
    });
  };

  beforeAll(() => {
    restoreMutationObserver();
  });

  it("should set title", () => {
    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle("test");
      },
    }).mount();

    expect(document.title).toBe(title.value);
  });

  it("should create titleElement", () => {
    const titleElement = document.head.querySelector("title");
    if (titleElement) {
      document.head.removeChild(titleElement);
      expect(document.head.querySelector("title")).toBeNull();
    }

    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle("test");
      },
    }).mount();

    expect(document.title).toBe(title.value);

    expect(document.head.querySelector("title")).not.toBeNull();
  });

  it("should create titleElement if no string is passed", () => {
    const titleElement = document.head.querySelector("title");
    if (titleElement) {
      document.head.removeChild(titleElement);
      expect(document.head.querySelector("title")).toBeNull();
    }

    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle();
      },
    }).mount();

    expect(document.title).toBe(title.value);

    expect(document.head.querySelector("title")).not.toBeNull();
  });

  it("should update title if changed", async () => {
    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle("test");
      },
    }).mount();

    expect(document.title).toBe(title.value);

    title.value = "new title";
    await nextTick();
    expect(document.title).toBe(title.value);
  });

  it("should be updated if the document.title changes", async () => {
    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle("test");
      },
    }).mount();

    expect(document.title).toBe(title.value);

    document.title = "new title";
    await nextTick();
    expect(document.title).toBe(title.value);
  });

  it("should only update on string", async () => {
    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle("test");
      },
    }).mount();

    expect(document.title).toBe(title.value);

    // @ts-ignore
    title.value = { t: "new title" };
    await nextTick();
    expect(document.title).toBe("test");
  });

  it("should not override title", () => {
    document.title = "test";

    let title: Ref<string | null> = undefined as any;
    createVue({
      template: `<p></p>`,
      setup() {
        title = useTitle();
      },
    }).mount();

    expect(title.value).toBe("test");
  });

  it("should disconnect observer on onUnmounted", () => {
    mockMutationObserver();
    const { mount, destroy } = createVue({
      template: `<p></p>`,
      setup() {
        useTitle("test");
      },
    });

    mount();
    expect(constructorFn).toHaveBeenCalled();
    expect(disconnectFn).not.toHaveBeenCalled();

    destroy();

    expect(disconnectFn).toHaveBeenCalled();
  });
});
