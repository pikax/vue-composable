import { usePromiseLazy } from "../../src";

jest.mock("../../src/promise/promise", () => ({
  usePromise: jest.fn()
}));

import { usePromise } from "../../src/promise/promise";

describe("lazyPromise", () => {
  it("should usePromise with lazy: true", () => {
    const factory = () => {};
    usePromiseLazy(factory);

    expect(usePromise).toHaveBeenCalledWith(
      factory,
      expect.objectContaining({
        lazy: true,
        throwException: false
      })
    );
  });

  it("should usePromise with throwException: true", () => {
    const factory = () => {};
    usePromiseLazy(factory, true);

    expect(usePromise).toHaveBeenCalledWith(
      factory,
      expect.objectContaining({
        lazy: true,
        throwException: true
      })
    );
  });
});
