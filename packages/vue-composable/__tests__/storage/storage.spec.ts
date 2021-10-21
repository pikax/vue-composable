import { useStorage } from "../../src";

describe("storage", () => {
  it("should get localStorage if supported", () => {
    const { storage } = useStorage("");

    expect(storage).not.toEqual(null);
  });
});
