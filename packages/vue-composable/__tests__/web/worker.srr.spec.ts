jest.mock("../../src/utils", () => ({
  //@ts-ignore
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
