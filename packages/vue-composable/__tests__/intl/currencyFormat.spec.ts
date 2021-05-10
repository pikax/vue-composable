jest.mock("../../src/intl/numberFormat", () => ({
  useIntlNumberFormat: jest.fn(),
}));

import { useIntlNumberFormat } from "../../src/intl/numberFormat";
import { IntlNumberFormatOptions, useCurrencyFormat } from "../../src";
import { computed } from "../../src/api";

describe("currencyFormat", () => {
  const mock: jest.Mock<any, any> = useIntlNumberFormat as any;

  it("should call useIntlNumberFormat", () => {
    useCurrencyFormat("GBP");

    expect(mock).toHaveBeenCalledWith(undefined);
  });

  it("should pass arguments", () => {
    const r = { a: 1 };
    const expected = {
      formatString: expect.any(Function),
      format: expect.any(Function),
    };
    mock.mockReturnValue(r);

    // no arguments
    expect(useCurrencyFormat()).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // currency
    expect(useCurrencyFormat("GBP")).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // Ref<currency>
    expect(useCurrencyFormat(computed(() => "GBP"))).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // currency + locales
    expect(useCurrencyFormat("GBP", "en-GB")).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(
      expect.objectContaining({ value: "en-GB" }),
    );

    // currency + locales + options
    expect(
      useCurrencyFormat("GBP", "pt-PT", { currencyDisplay: "symbol" }),
    ).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(
      expect.objectContaining({ value: "pt-PT" }),
    );

    // currency + options
    expect(
      useCurrencyFormat("GBP", { currencyDisplay: "symbol" }),
    ).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // currency + options
    expect(
      useCurrencyFormat("GBP", { currencyDisplay: "symbol" }),
    ).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // options
    expect(useCurrencyFormat({ currencyDisplay: "symbol" })).toMatchObject(
      expected,
    );
    expect(mock).toHaveBeenLastCalledWith(undefined);

    // options + locales
    expect(
      useCurrencyFormat({ currencyDisplay: "symbol" }, "pt-PT"),
    ).toMatchObject(expected);
    expect(mock).toHaveBeenLastCalledWith(
      expect.objectContaining({ value: "pt-PT" }),
    );
  });

  it("should numberFormat.formatString", () => {
    const formatStringMock = jest.fn().mockReturnValue("test");
    mock.mockReturnValue({
      formatString: formatStringMock,
    });

    let format = useCurrencyFormat("GBP");

    const amount = 1115;
    expect(format.formatString(amount)).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "GBP",
      }),
      undefined,
    );

    // pass currency
    expect(format.formatString(amount, "EUR")).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "EUR",
      }),
      undefined,
    );

    // pass currency + display
    expect(format.formatString(amount, "USD", "code")).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "USD",
        currencyDisplay: "code",
      }),
      undefined,
    );
    // pass currency + display + opts
    expect(
      format.formatString(amount, undefined, undefined, {
        minimumIntegerDigits: 1,
      }),
    ).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "GBP",
        currencyDisplay: undefined,
        minimumIntegerDigits: 1,
      }),
      undefined,
    );

    // pass currency + display + opts + locales
    expect(
      format.formatString(amount, undefined, undefined, undefined, "pt-PT"),
    ).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "GBP",
        currencyDisplay: undefined,
      }),
      "pt-PT",
    );

    // with currency and options
    const defaultOptions: IntlNumberFormatOptions = {
      maximumFractionDigits: 1,
      maximumSignificantDigits: 1,
      currency: "JPY",
    };
    format = useCurrencyFormat("GBP", defaultOptions);

    expect(format.formatString(amount)).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        ...defaultOptions,
        style: "currency",
        currency: "GBP",
      }),
      undefined,
    );

    // with default options
    format = useCurrencyFormat(defaultOptions);

    expect(format.formatString(amount)).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        ...defaultOptions,
        style: "currency",
      }),
      undefined,
    );

    // pass currency
    expect(format.formatString(amount, "EUR")).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        ...defaultOptions,
        style: "currency",
        currency: "EUR",
      }),
      undefined,
    );

    // pass currency + display
    expect(format.formatString(amount, "USD", "code")).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        ...defaultOptions,
        style: "currency",
        currency: "USD",
        currencyDisplay: "code",
      }),
      undefined,
    );
    // pass currency + display + opts
    expect(
      format.formatString(amount, undefined, undefined, {
        minimumIntegerDigits: 1,
      }),
    ).toBe("test");
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        ...defaultOptions,
        style: "currency",
        currencyDisplay: undefined,
        minimumIntegerDigits: 1,
      }),
      undefined,
    );
  });

  it("should call format", () => {
    const formatStringMock = jest.fn().mockReturnValue("test");
    mock.mockReturnValue({
      formatString: formatStringMock,
    });

    const format = useCurrencyFormat("GBP");

    const amount = 1115;
    expect(
      format.format(amount, undefined, undefined, undefined, "pt-PT"),
    ).toMatchObject({ value: "test" });
    expect(formatStringMock).toHaveBeenLastCalledWith(
      amount,
      expect.objectContaining({
        style: "currency",
        currency: "GBP",
        currencyDisplay: undefined,
      }),
      "pt-PT",
    );
  });

  it("should error if currency not provided", () => {
    const errorSpy = jest.spyOn(console, "error");

    useCurrencyFormat({
      currencyDisplay: "code",
    }).formatString(1);

    expect(errorSpy).toHaveBeenLastCalledWith(
      "[useCurrencyFormat] No currency provided.",
    );
  });

  it("should warn if style is passed and not currency", () => {
    const warnSpy = jest.spyOn(console, "warn");

    useCurrencyFormat({
      currency: "JPY",
      style: "percent",
    }).formatString(1);
    expect(warnSpy).toHaveBeenLastCalledWith(
      "[useCurrencyFormat] invalid style passed in options, please leave it undefined.",
    );
  });
});
