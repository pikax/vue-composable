jest.mock("../../src/utils", () => ({
  //@ts-ignore
  ...jest.requireActual("../../src/utils"),
  isClient: false,
}));
import { useTitle, provideSSRTitle, useSSRTitle } from "../../src/";
import { createVue } from "../utils";
import { Ref, ref, provide, onUnmounted } from "../../src/api";

describe("worker function SSR", () => {
  it("should not change document.title", () => {
    document.title = "test";

    let title: Ref<string | null> = undefined as any;
    let lastTitle: Ref<string | null> = undefined as any;
    const comp1 = {
      template: "<p></p>",
      setup() {
        title = useTitle("ssr");
      },
    };
    const { app, mount, destroy } = createVue({
      components: {
        comp1,
      },
      template: `<comp1/>`,
      setup() {
        if (__VUE_2__) {
          provideSSRTitle({ provide });
        }
        onUnmounted(() => {
          lastTitle = useSSRTitle();
        });
      },
    });

    if (!__VUE_2__) {
      provideSSRTitle(app);
    }

    mount();

    expect(title.value).toBe("ssr");
    expect(document.title).not.toBe(title.value);

    destroy();

    expect(lastTitle.value).toBe("ssr");
    expect(lastTitle).toBe(title);
  });

  it("should return default if not called in a setup", () => {
    const title = useTitle("ssr");

    expect(title.value).toBe("ssr");
  });

  it("should return default if `provideSSRTitle` not called", () => {
    const warnSpy = jest.spyOn(console, "warn");

    let title: Ref<string | null> = undefined as any;
    createVue({
      setup() {
        title = useSSRTitle("test");
      },
    }).mount();

    expect(title.value).toBe("test");

    expect(warnSpy).toBeCalledWith(
      "[useSSRTitle] can't find SSRTitle have you forgotten calling `provideSSRTitle`?"
    );
  });

  it("should return the same ref", () => {
    const titleRef = ref("hello");

    let comp1TitleRef: Ref<string | null> = {} as any;

    const comp1 = {
      template: "<p></p>",
      setup() {
        comp1TitleRef = useTitle();
      },
    };

    const app = createVue({
      components: {
        comp1,
      },
      template: `<comp1></comp1>`,
      setup() {
        // faking app
        provideSSRTitle({ provide }, titleRef);
      },
    });

    app.mount();
    expect(comp1TitleRef).toBe(titleRef);
  });
});
