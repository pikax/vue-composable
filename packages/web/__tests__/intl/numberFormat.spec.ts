import { useIntlNumberFormat } from "../../src";

describe("intl numberFormat", () => {
  const spy = jest.fn();

  class Test {
    constructor(...args: any[]) {
      debugger;
      console.log("arg", args);
      spy(...args);
    }
  }

  // // https://formatjs.io/guides/runtime-environments/#server
  // if (global.Intl) {
  //   // @ts-ignore
  //   Intl.NumberFormat = Test;
  // } else {
  //   window.Intl = global.Intl = {
  //     NumberFormat: Test
  //   } as any;
  // }
  // Object.defineProperty(window.Intl, "NumberFormat", {
  //   writable: true,
  //   configurable: true,
  //   value: Test
  // });

  // Object.defineProperty(global.Intl, "NumberFormat", {
  //   writable: true,
  //   configurable: true,
  //   value: Test
  // });

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

  it("should call new Intl.NumberFormat with the write options", () => {
    let locales: string | string[] | undefined = "en-GB";
    let options: Intl.DateTimeFormatOptions = {};
    const { formatter } = useIntlNumberFormat(locales, options);

    expect(formatter.value).toBeDefined();
    // expect(Intl.NumberFormat).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(locales, options);
  });
});
