jest.mock("../../src/utils", () => ({
  ...jest.requireActual("../../src/utils"),
  isClient: false
}));
import { useWorker } from "../../src/web/worker";

describe("worker function SSR", () => {
  it("should return terminated", () => {
    expect(useWorker("")).toMatchObject({
      terminated: {
        value: true
      }
    });
  });
});
