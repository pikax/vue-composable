import { useCancellablePromise } from "../../src/promise/cancellablePromise";
import { promisedTimeout } from "@vue-composable/core";
import { nextTick } from "../utils";

describe("cancellablePromise", () => {
  const consoleWarnSpy = jest.spyOn(console, "warn");

  beforeEach(() => {
    consoleWarnSpy.mockClear();
  });

  it("should resolve promise", async () => {
    const use = useCancellablePromise(() => promisedTimeout(100).then(x => 34));

    expect(await use.exec()).toBe(34);

    expect(use).toMatchObject({
      result: { value: 34 },
      cancelled: { value: false },
      error: { value: null },
      loading: { value: false }
    });
  });

  it("should not be resolved after cancelled", async () => {
    const use = useCancellablePromise(() => promisedTimeout(100).then(x => 34));

    expect(use.cancelled.value).toBe(false);

    use.exec();

    expect(use).toMatchObject({
      cancelled: { value: false },
      loading: { value: true }
    });

    use.cancel("cancelled");
    await nextTick();

    expect(use).toMatchObject({
      cancelled: { value: true },
      error: { value: "cancelled" },
      loading: { value: false }
    });

    // wait 200ms to wait for the other promise
    await promisedTimeout(200);

    // shouldn't change the result
    expect(use).toMatchObject({
      cancelled: { value: true },
      error: { value: "cancelled" },
      result: { value: null },
      loading: { value: false }
    });
  });

  it("should not cancel if promise has not being called", () => {
    const { cancel, cancelled } = useCancellablePromise(() => {}, true);

    cancel(true);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[useCancellablePromise] There's no promise to cancel. Please make sure to call `exec`"
    );

    expect(cancelled.value).toBe(false);
  });
});
