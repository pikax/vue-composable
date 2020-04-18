jest.mock("@vue-composable/core", () => ({
  ...jest.requireActual("@vue-composable/core"),
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
