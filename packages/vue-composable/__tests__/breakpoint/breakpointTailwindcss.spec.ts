jest.mock("../../src/api", () => ({
  //@ts-ignore
  ...(__VUE_2__
    ? jest.requireActual("../../src/api.2")
    : jest.requireActual("../../src/api.3")),
  provide: jest.fn(),
  inject: jest.fn().mockImplementation((k, defaultValue) => defaultValue)
}));

jest.mock("../../src/breakpoint/breakpoint");

import {
  isTailwind,
  isRawScreen,
  isRangeScreen,
  screenRangeToBreakpoint,
  screenToBreakpoint,
  setBreakpointTailwindCSS,
  useBreakpointTailwindCSS
} from "../../src/breakpoint/breakpointTailwind";

import { useBreakpoint } from "../../src/breakpoint/breakpoint";
import { provide, inject } from "../../src/api";

describe("breakpointTailwindcss", () => {
  describe("setBreakpoint", () => {
    test("tailwind config", () => {
      const bk = {
        a: 1
      };
      (useBreakpoint as jest.Mock).mockImplementationOnce(() => bk);

      expect(
        setBreakpointTailwindCSS({
          theme: {
            screens: {
              sm: 123
            }
          }
        })
      ).toBe(bk);

      expect(useBreakpoint).toHaveBeenCalledWith({ sm: 123 });
      expect(provide).toHaveBeenCalled();
    });

    it("should use default breakpoints", () => {
      const bk = {
        a: 1
      };
      (useBreakpoint as jest.Mock).mockImplementationOnce(() => bk);
      expect(
        setBreakpointTailwindCSS({
          sm: 123
        })
      ).toBe(bk);

      expect(useBreakpoint).toHaveBeenCalledWith({ sm: 123 });
      expect(provide).toHaveBeenCalled();
    });

    it("should inject", () => {
      const bk = {
        a: 1
      };
      (inject as jest.Mock).mockImplementationOnce(() => bk);

      expect(useBreakpointTailwindCSS()).toBe(bk);

      expect(inject).toHaveBeenCalled();
    });

    it("should set  tailwind default breakpoint", () => {
      useBreakpointTailwindCSS();
      expect(useBreakpoint).toHaveBeenCalledWith(expect.anything());
    });

    it("should setBreakpoint with config", () => {
      const bk = {
        a: 1
      };
      (useBreakpoint as jest.Mock).mockImplementationOnce(() => bk);

      expect(
        useBreakpointTailwindCSS({
          theme: {
            screens: {
              sm: 123
            }
          }
        })
      ).toBe(bk);

      expect(useBreakpoint).toHaveBeenCalledWith({ sm: 123 });
      expect(provide).toHaveBeenCalled();
    });
  });

  describe("helpers", () => {
    test("isTailwind", () => {
      expect(isTailwind({})).toBe(false);
      expect(isTailwind(undefined)).toBe(false);
      expect(isTailwind({ theme: {} })).toBe(false);
      expect(
        isTailwind({
          theme: {
            screens: {}
          }
        })
      ).toBe(true);
      expect(
        isTailwind({
          theme: {
            screens: {
              myScreen: "sadd"
            }
          }
        })
      ).toBe(true);
    });

    test("isRawScreen", () => {
      expect(isRawScreen(undefined)).toBe(false);
      expect(
        isRawScreen({
          raw: "ddd"
        })
      ).toBe(true);

      expect(
        isRawScreen({
          raw: {
            ss: "1"
          }
        })
      ).toBe(false);

      expect(isRawScreen("ddd")).toBe(false);
    });

    test("isRangeScreen", () => {
      expect(isRangeScreen({})).toBe(false);
      expect(isRangeScreen({ min: "dd" })).toBe(true);
      expect(isRangeScreen({ min: 222 })).toBe(true);
      expect(isRangeScreen({ min: { dd: 1 } })).toBe(false);

      expect(isRangeScreen({ max: "dd" })).toBe(true);
      expect(isRangeScreen({ max: 222 })).toBe(true);
      expect(isRangeScreen({ max: { a: "dd" } })).toBe(false);

      expect(isRangeScreen({ xx: 1 })).toBe(false);
    });

    test("screenRangeToBreakpoint", () => {
      expect(screenRangeToBreakpoint(undefined as any)).toBe("");

      expect(screenRangeToBreakpoint({ xx: "" } as any)).toBe("");

      expect(screenRangeToBreakpoint({ max: 12 })).toBe("(max-width: 12px)");
      expect(screenRangeToBreakpoint({ max: "12em" })).toBe(
        "(max-width: 12em)"
      );

      expect(screenRangeToBreakpoint({ min: "12em" })).toBe(
        "(min-width: 12em)"
      );

      expect(screenRangeToBreakpoint({ min: "1em", max: "2em" })).toBe(
        "(max-width: 2em and min-width: 1em)"
      );
    });

    test("screenToBreakpoint", () => {
      expect(screenToBreakpoint({})).toMatchObject([]);
      expect(screenToBreakpoint(undefined as any)).toMatchObject([]);

      expect(
        screenToBreakpoint([
          { max: "12px" },
          { min: "12px" },
          { max: "12px", min: "9em" }
        ])
      ).toMatchObject([
        "(max-width: 12px)",
        "(min-width: 12px)",
        "(max-width: 12px and min-width: 9em)"
      ]);

      const opts = [
        { raw: "raw stuff" },
        { max: "12px" },
        { min: "12px" },
        { max: "12px", min: "9em" }
      ];
      expect(screenToBreakpoint(opts[0])).toMatchObject([opts[0].raw]);
      expect(screenToBreakpoint(opts[1])).toMatchObject(["(max-width: 12px)"]);
      expect(screenToBreakpoint(opts[2])).toMatchObject(["(min-width: 12px)"]);
      expect(screenToBreakpoint(opts[3])).toMatchObject([
        "(max-width: 12px and min-width: 9em)"
      ]);

      expect(screenToBreakpoint(42)).toMatchObject(["(min-width: 42px)"]);
    });
  });
});
