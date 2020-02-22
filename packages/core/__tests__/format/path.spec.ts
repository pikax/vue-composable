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

  it("should resolve array access", () => {
    const o = {
      array: [1, 2],
      deep: {
        x: [
          1,
          {
            a: {
              b: 1
            }
          }
        ]
      }
    };

    expect(usePath(o, "array[0]").value).toBe(1);
    expect(usePath(o, "array[1]").value).toBe(2);
    expect(usePath(o, "deep.x[1].a.b").value).toBe(1);
  });
});
