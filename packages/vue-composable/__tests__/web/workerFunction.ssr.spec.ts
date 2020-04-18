jest.mock("@vue-composable/core", () => ({
  ...jest.requireActual("@vue-composable/core"),
  isClient: false,
  useCancellablePromise: jest.fn()
}));
import { useWorkerFunction } from "../../src/web/workerFunction";
import { useCancellablePromise } from "@vue-composable/core";

describe("worker function SSR", () => {
  it("should return cancelablePromise", () => {
    const r = { a: 1 };
    (useCancellablePromise as jest.Mock<any, any>).mockReturnValue(r);

    expect(useWorkerFunction(() => 1 + 2)).toBe(r);
  });
});
