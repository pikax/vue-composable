import { deepClone } from "../src/utils";

describe("utils", () => {
  it("should deepClone with one source", () => {
    const e = {
      deep1: {
        deep11: {
          deep111: {
            a: 1,
            b: "1",
            c: () => true
          }
        },
        a: 1
      }
    };

    const r = deepClone<any>({}, e);
    expect(r).toMatchObject(e);
  });

  it("should clone with multiple sources", () => {
    const s1 = {
      a: 1,
      b: {
        a: "1"
      }
    };

    const s2 = {
      a: {
        a: 1
      },
      b: {
        a: "22"
      }
    };

    const s3 = {
      a: 2,
      b: {
        a: 1
      }
    };

    const e = {
      a: 2,
      b: {
        a: "22"
      }
    };

    const r = deepClone<any>({}, s1, s2, s3);
    expect(r).toMatchObject(e);
  });
});
