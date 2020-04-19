import { usePath } from "../../src";
import { ref } from "../../src/api";

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

  describe("not found", () => {
    const notFoundResolverMock = jest.fn().mockImplementation(() => "test");

    const warnSpy = jest.spyOn(console, "warn");

    beforeEach(() => {
      notFoundResolverMock.mockClear();
      warnSpy.mockClear();
    });

    test("source `undefined`", () => {
      expect(
        usePath(ref(undefined), "yey", undefined, notFoundResolverMock).value
      ).toBe("test");
      expect(notFoundResolverMock).toHaveBeenLastCalledWith(
        "yey",
        undefined,
        "yey",
        undefined
      );
    });

    test("no path", () => {
      const o = {
        a: 1
      };
      expect(usePath(o, "", undefined, notFoundResolverMock).value).toBe(o);
      expect(notFoundResolverMock).not.toBeCalled();
    });

    test("first path not found", () => {
      const o = {
        a: 1
      };
      expect(usePath(o, "b", undefined, notFoundResolverMock).value).toBe(
        "test"
      );
      expect(notFoundResolverMock).toBeCalled();
      expect(warnSpy).toBeCalledWith(`Path "b" doesn't exist on:`, o);
    });

    test("deep path not found", () => {
      const o = {
        a: {
          c: "hello"
        }
      };
      expect(usePath(o, "a.c.a", undefined, notFoundResolverMock).value).toBe(
        "test"
      );
      expect(notFoundResolverMock).toBeCalled();
      expect(warnSpy).toBeCalledWith(`Path "a.c.a" doesn't exist on:`, o);
    });

    test("if access with []", () => {
      const o = {};
      expect(usePath(o, "[]", undefined, notFoundResolverMock).value).toBe(
        "test"
      );
      expect(warnSpy).toBeCalledWith(`Path "[]" doesn't exist on:`, o);
    });

    test("access with consecutive []", () => {
      const o = {
        a: {
          a: 1,
          b: [
            2,
            {
              c: {
                ["a-b-c-d"]: 3
              }
            }
          ]
        }
      };

      expect(usePath(o, "a[a]").value).toBe(o.a.a);
      expect(usePath(o, "[a]['a']").value).toBe(o.a.a);
      expect(usePath(o, '["a"][`b`][0]').value).toBe(o.a.b[0]);
      expect(usePath(o, "a.b[1].c[a-b-c-d]").value).toBe(
        (o.a.b[1] as any).c["a-b-c-d"]
      );
    });

    test("invalid path parsing", () => {
      expect(usePath({}, "a[a]o[a]").value).toBeUndefined();
      expect(warnSpy).toHaveBeenNthCalledWith(
        1,
        `[usePath] invalid path "a[a]o[a]"`
      );
    });

    test("invalid array accessor", () => {
      expect(usePath({}, "aa]").value).toBeUndefined();
      expect(warnSpy).toHaveBeenNthCalledWith(
        1,
        `[usePath] invalid path provided "aa]"`
      );
    });
  });
});
