import { intlDateFormatExtractArguments } from "../../src/intl/_helper";
import { Ref, ref } from "../../src/api";

describe("intl_helper", () => {
  describe("intlDateFormatExtractArguments", () => {
    it("non ref locale and options", () => {
      let locale: string | string[] | undefined = "";
      let options: Intl.NumberFormatOptions | undefined = {};
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        { value: locale },
        { value: options },
      ]);
      locale = ["a", "b"];
      options = {
        currency: "dd",
      };

      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        { value: locale },
        { value: options },
      ]);

      locale = undefined;
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        undefined,
        { value: options },
      ]);

      locale = "c";
      options = undefined;
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        { value: locale },
        undefined,
      ]);

      options = { currencyDisplay: "ss" };

      expect(intlDateFormatExtractArguments(options)).toMatchObject([
        undefined,
        { value: options },
      ]);
    });

    it("ref locale and options", () => {
      let locale: Ref<any> = ref("");
      let options: Ref<Intl.NumberFormatOptions> | undefined = ref({});
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        locale,
        options,
      ]);
      locale = ref(["a", "n"]);
      options = ref({
        currency: "dd",
      });

      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        locale,
        options,
      ]);

      locale = ref(undefined);
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        undefined,
        options,
      ]);

      locale = ref("x");
      options = undefined;
      expect(intlDateFormatExtractArguments(locale, options)).toMatchObject([
        locale,
        options,
      ]);

      options = ref({ currencyDisplay: "ss" });

      expect(intlDateFormatExtractArguments(options)).toMatchObject([
        undefined,
        options,
      ]);
    });

    it("should work", () => {
      expect(
        intlDateFormatExtractArguments(undefined, undefined),
      ).toMatchObject([undefined, undefined]);
    });
  });
});
