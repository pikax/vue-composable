import { useIntlNumberFormat } from "../../src";
import { ref } from "../../src/api";
import { nextTick } from "../utils";

describe("intl numberFormat", () => {
  const spy = jest.fn();
  const formatSpy = jest.fn();

  class Test {
    constructor(...args: any[]) {
      spy(...args);
    }

    format = formatSpy;
  }

  Object.defineProperty(window, "Intl", {
    writable: true,
    configurable: true,
    value: {
      NumberFormat: Test
    }
  });

  Object.defineProperty(global, "Intl", {
    writable: true,
    configurable: true,
    value: {
      NumberFormat: Test
    }
  });

  beforeEach(() => {
    spy.mockReset();
    formatSpy.mockReset();
  });

  it("should call new Intl.NumberFormat with the write options", async () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.NumberFormatOptions = {};
    const { formatter } = useIntlNumberFormat(locales, options);

    expect(formatter.value).toBeDefined();
    expect(spy).toHaveBeenLastCalledWith(locales, options);
  });

  it("should pass arguments", async () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.NumberFormatOptions = {};

    useIntlNumberFormat().formatter.value;
    expect(spy).toHaveBeenLastCalledWith(undefined, undefined);

    useIntlNumberFormat(locales).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(locales, undefined);

    useIntlNumberFormat(options).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(undefined, options);

    useIntlNumberFormat(locales, options).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(locales, options);

    // reactive
    spy.mockClear();
    const l = ref("en-GB");
    const o = ref<Intl.NumberFormatOptions>();
    const { formatter } = useIntlNumberFormat(l, o);
    formatter.value;
    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);

    l.value = "pt-PT";
    await nextTick();
    formatter.value;

    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);

    o.value = { currencyDisplay: "symbol" };
    await nextTick();
    formatter.value;
    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);
  });

  it("should call formatter.formatString", () => {
    const { formatString, formatter } = useIntlNumberFormat();
    formatter.value;
    expect(spy).toHaveBeenCalled();

    formatString(111);
    expect(spy).toHaveBeenCalledTimes(1);

    let overrideOpts = { currency: "GBP" };
    formatString(111, overrideOpts);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(undefined, overrideOpts);

    formatString(111, undefined, "pt-PT");
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith("pt-PT", {});
  });

  test("format()", () => {
    formatSpy.mockReturnValueOnce("test");
    const { format } = useIntlNumberFormat();

    expect(format(111)).toMatchObject({
      value: "test"
    });
  });
});
