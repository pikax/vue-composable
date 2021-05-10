jest.mock("../../src/utils", () => ({
  //@ts-ignore
  ...jest.requireActual("../../src/utils"),
  isClient: false,
}));

jest.mock("../../src/promise/cancellablePromise", () => ({
  useCancellablePromise: jest.fn(),
}));
import { useWorkerFunction } from "../../src/web/workerFunction";
import { useCancellablePromise } from "../../src/promise/cancellablePromise";

describe("worker function SSR", () => {
  it("should return cancelablePromise", () => {
    const r = { a: 1 };
    (useCancellablePromise as jest.Mock<any, any>).mockReturnValue(r);

    expect(useWorkerFunction(() => 1 + 2)).toBe(r);
  });
});
