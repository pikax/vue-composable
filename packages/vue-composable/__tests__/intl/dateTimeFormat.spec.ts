import { useIntlDateTimeFormat } from "../../src";
import { ref } from "../../src/api";
import { nextTick } from "../utils";

describe("intl dateTimeFormat", () => {
  const spy = jest.fn();
  const formatSpy = jest.fn();

  class Test {
    constructor(...args: any[]) {
      spy(...args);
    }

    format = formatSpy;
  }
  Intl.DateTimeFormat;

  Object.defineProperty(window, "Intl", {
    writable: true,
    configurable: true,
    value: {
      DateTimeFormat: Test
    }
  });

  Object.defineProperty(global, "Intl", {
    writable: true,
    configurable: true,
    value: {
      DateTimeFormat: Test
    }
  });

  beforeEach(() => {
    spy.mockReset();
    formatSpy.mockReset();
  });

  it("should call new Intl.NumberFormat with the right options", async () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.DateTimeFormatOptions = {};
    const { formatter } = useIntlDateTimeFormat(locales, options);

    expect(formatter.value).toBeDefined();
    expect(spy).toHaveBeenLastCalledWith(locales, options);
  });

  it("should pass arguments", async () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.DateTimeFormatOptions = {};

    useIntlDateTimeFormat().formatter.value;
    expect(spy).toHaveBeenLastCalledWith(undefined, undefined);

    useIntlDateTimeFormat(locales).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(locales, undefined);

    useIntlDateTimeFormat(options).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(undefined, options);

    useIntlDateTimeFormat(locales, options).formatter.value;
    expect(spy).toHaveBeenLastCalledWith(locales, options);

    // reactive
    spy.mockClear();
    const l = ref("en-GB");
    const o = ref<Intl.DateTimeFormatOptions>();
    const { formatter } = useIntlDateTimeFormat(l, o);
    formatter.value;
    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);

    l.value = "pt-PT";
    await nextTick();
    formatter.value;

    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);

    o.value = { year: "2-digits" };
    await nextTick();
    formatter.value;
    expect(spy).toHaveBeenLastCalledWith(l.value, o.value);
  });

  it("should call formatter.formatString", () => {
    const { formatString, formatter } = useIntlDateTimeFormat();
    formatter.value;
    expect(spy).toHaveBeenCalled();

    formatString(111);
    expect(spy).toHaveBeenCalledTimes(1);

    let overrideOpts = { year: "2-digits" };
    formatString(111, overrideOpts);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(undefined, overrideOpts);

    formatString(111, undefined, "pt-PT");
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith("pt-PT", {});
  });

  test("format()", () => {
    formatSpy.mockReturnValueOnce("test");
    const { format } = useIntlDateTimeFormat();

    expect(format(111)).toMatchObject({
      value: "test"
    });
  });

  it("should format strings", () => {
    const { formatString } = useIntlDateTimeFormat();
    formatString("2020-01-01");
    expect(formatSpy).toHaveBeenLastCalledWith(new Date("2020-01-01"));
  });
});
