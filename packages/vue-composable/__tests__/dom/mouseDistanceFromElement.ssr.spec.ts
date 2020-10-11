jest.mock("../../src/utils", () => ({
  //@ts-ignore
  ...jest.requireActual("../../src/utils"),
  isClient: false,
}));

import { useMouseDistanceFromElement } from "../../src";

describe("useMouseDistanceFromElement ssr", () => {
  it("should return -1 ", () => {
    const { distance } = useMouseDistanceFromElement({} as any);

    expect(distance.value).toBe(-1);
  });
});
