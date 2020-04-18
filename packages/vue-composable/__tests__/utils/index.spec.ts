import {
  wrap,
  unwrap,
  isArray,
  isString,
  isSymbol,
  isDate,
  isObject,
  isElement,
  isPromise,
  isNumber,
  promisedTimeout,
  minMax
} from "../../src";
import { ref } from "../../src/api";
import { isFunction } from "util";

describe("utils", () => {
  describe("wrap", () => {
    it("should wrap if is not a ref", () => {
      const v = { a: 1 };
      expect(wrap(v)).toMatchObject(ref(v));
    });

    it("should return the same object if ref", () => {
      const r = ref({ a: 1 });
      expect(wrap(r)).toBe(r);
    });
  });

  describe("unwrap", () => {
    it("should unwrap if is a ref", () => {
      const v = { a: 1 };
      const r = ref(v);
      expect(unwrap(r)).toStrictEqual(v);
    });

    it("should return the same object if ref", () => {
      const v = { a: 1 };
      expect(unwrap(v)).toBe(v);
    });
  });

  describe("isArray", () => {
    it("should return true if array", () => {
      expect(isArray([])).toBe(true);
    });
    it("should return false if not array", () => {
      expect(isArray(() => true)).toBe(false);
    });
  });

  describe("isFunction", () => {
    it("should return true if Function", () => {
      expect(isFunction(() => false)).toBe(true);
    });
    it("should return false if not Function", () => {
      expect(isFunction(1)).toBe(false);
    });
  });

  describe("isString", () => {
    it("should return true if String", () => {
      expect(isString("test")).toBe(true);
    });
    it("should return false if not String", () => {
      expect(isString(1234)).toBe(false);
    });
  });

  describe("isSymbol", () => {
    it("should return true if Symbol", () => {
      expect(isSymbol(Symbol("test"))).toBe(true);
    });
    it("should return false if not Symbol", () => {
      expect(isSymbol("test")).toBe(false);
    });
  });

  describe("isDate", () => {
    it("should return true if Date", () => {
      expect(isDate(new Date())).toBe(true);
    });
    it("should return false if not Date", () => {
      expect(isDate(1234)).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true if Number", () => {
      expect(isNumber(1254)).toBe(true);
    });
    it("should return false if not Number", () => {
      expect(isNumber("1234")).toBe(false);
    });
  });

  describe("isObject", () => {
    it("should return true if Object", () => {
      expect(isObject({})).toBe(true);
    });
    it("should return false if not Object", () => {
      expect(isObject(() => 1234)).toBe(false);
    });
  });

  describe("isElement", () => {
    it("should return true if Element", () => {
      expect(isElement(document.createElement("div"))).toBe(true);
    });
    it("should return false if not Element", () => {
      expect(isElement({ xx: 123 })).toBe(false);
    });
  });

  describe("isPromise", () => {
    it("should return true if Promise", () => {
      expect(isPromise(Promise.resolve(1))).toBe(true);
    });
    it("should return false if not Promise", () => {
      expect(isPromise({ a: 1 })).toBe(false);
    });
  });

  describe("promisedTimeout", () => {
    it("should call after timeout", async () => {
      const start = Date.now();
      const ms = 50;
      const elip = ms * 0.15; // make sure we give enough room to the CPU do it's thing
      await promisedTimeout(ms);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(ms - elip);
      expect(end - start).toBeLessThanOrEqual(ms + elip);
    });
  });

  describe("minMax", () => {
    it("should get value if is in boundaries", () => {
      expect(minMax(10, 0, 20)).toBe(10);
    });
    it("should get min if the value is lower", () => {
      expect(minMax(1, 10, 20)).toBe(10);
    });

    it("should get min if the value is higher", () => {
      expect(minMax(100, 0, 10)).toBe(10);
    });
  });
});
