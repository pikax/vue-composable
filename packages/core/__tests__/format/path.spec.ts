import { usePath } from "../../src";

describe("path", () => {
  it("should return the object value", () => {
    const o = {
      deep: {
        a: 1,
        b: {
          a: 2
        }
      }
    };

    expect(usePath(o, "deep.a").value).toBe(1);
    expect(usePath(o, "deep.b").value).toMatchObject({ a: 2 });
    expect(usePath(o, "noprop.a").value).toBeUndefined();
  });
});
