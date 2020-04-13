import { useIntlNumberFormat } from "../../src";

describe("intl numberFormat", () => {
  const spy = jest.fn();

  class Test {
    constructor(...args: any[]) {
      spy(...args);
    }
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

  it("should call new Intl.NumberFormat with the write options", async () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.DateTimeFormatOptions = {};
    const { formatter } = useIntlNumberFormat(locales, options);

    expect(formatter.value).toBeDefined();
    // expect(Intl.NumberFormat).toHaveBeenCalled();
    expect(spy).toHaveBeenLastCalledWith(locales, options);
  });
});
