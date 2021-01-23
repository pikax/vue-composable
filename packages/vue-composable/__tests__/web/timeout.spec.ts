import { useTimeout } from "../../src";
import { createVue } from "../utils";
import { Ref, ref } from "../../src/api";

describe("timeout", () => {
  jest.useFakeTimers();
  it("should be defined", () => {
    expect(useTimeout).toBeDefined();
  });

  it("should call passed function after given amount of time", async () => {
    let count = 0;
    useTimeout(() => {
      count++;
    }, 1000);

    expect(count).toBe(0);
    jest.advanceTimersByTime(900);
    // should not be resolved
    expect(count).toBe(0);

    jest.advanceTimersByTime(100);
    expect(count).toBe(1);
  });

  it("should set ready true after run callback", async () => {
    const { ready } = useTimeout(() => {}, 1000);

    expect(ready.value).toBe(false);
    jest.advanceTimersByTime(1000);
    expect(ready.value).toBe(true);
  });

  it("should cancel function call when call cancel function", async () => {
    let count = 0;
    const { ready, cancel } = useTimeout(() => {
      count++;
    }, 1000);

    expect(ready.value).toBe(false);
    expect(count).toBe(0);

    cancel();

    jest.advanceTimersByTime(1000);
    expect(ready.value).toBe(null);
    expect(count).toBe(0);
  });

  it("should cancel on unMounted", async () => {
    let ready: Ref<boolean | null> = ref(false);

    const { mount, destroy } = createVue({
      template: `<div></div>`,
      setup() {
        ready = useTimeout(() => {}, 1000).ready;
      },
    });

    mount();

    expect(ready.value).toBe(false);
    jest.advanceTimersByTime(500);
    expect(ready.value).toBe(false);

    destroy();
    expect(ready.value).toBe(null);
  });

  it("should default the delay to 0", () => {
    let count = 0;
    useTimeout(() => {
      count++;
    });

    expect(count).toBe(0);
    jest.runOnlyPendingTimers();
    expect(count).toBe(1);
  });
});
