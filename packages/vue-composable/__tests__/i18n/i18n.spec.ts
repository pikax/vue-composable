const provideSpy = jest.fn();
const injectSpy = jest.fn();
// const buildI18nSpy = jest
//   .fn()
//   .mockImplementation(jest.requireActual("../../src").buildI18n);

jest.mock("../../src/api", () => ({
  //@ts-ignore
  ...(__VUE_2__
    ? jest.requireActual("../../src/api.2")
    : jest.requireActual("../../src/api.3")),
  provide: provideSpy,
  inject: injectSpy
}));

// import Vue from "vue";
import { buildI18n, promisedTimeout, setI18n, useI18n } from "../../src";
import { nextTick } from "../utils";
import { ref } from "../../src/api";

describe("i18n", () => {
  const warnSpy = jest.spyOn(console, "warn");
  const errorSpy = jest.spyOn(console, "error");
  beforeEach(() => {
    warnSpy.mockReset();
    errorSpy.mockReset();
  });

  it("should work", async () => {
    const x = buildI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: {
          hello: "hello world",
          helloName: "Hello {name}",
          version: "My version is",
          ref: ref("Hey")
        },
        pt: {
          hello: "Olá mundo",
          helloName: "Olá {name}",
          ref: ref("Boas")
        }
      }
    });

    expect(x.i18n.value).toMatchObject({
      hello: "hello world",
      helloName: "Hello {name}",
      version: "My version is",
      ref: "Hey"
    });

    expect(x.$t("hello").value).toBe("hello world");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Hello pikax");

    expect(x.i18n.value.hello).toBe("hello world");
    expect(x.i18n.value.helloName).toBe("Hello {name}");
    expect(x.i18n.value.version).toBe("My version is");

    x.locale.value = "pt";
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "Olá mundo",
      helloName: "Olá {name}",
      version: "My version is",
      ref: "Boas"
    });

    expect(x.$t("hello").value).toBe("Olá mundo");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Olá pikax");

    x.locale.value = "en";
    await nextTick();
    x.locale.value = "pt";
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "Olá mundo",
      helloName: "Olá {name}",
      version: "My version is",
      ref: "Boas"
    });

    expect(x.$t("hello").value).toBe("Olá mundo");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Olá pikax");
  });

  describe("fallback", () => {
    it("should return full path if not found", () => {
      const x = buildI18n({
        locale: "en",
        messages: {
          en: {
            hello: "hello world"
          }
        }
      });

      const path = "hello.moto.how.are.you";
      expect(x.$t(path).value).toBe(path);
      expect(x.$ts(path)).toBe(path);
    });

    it("should not fallback if no fallback is present", () => {
      const x = buildI18n({
        locale: "pt",
        messages: {
          en: {
            hello: "hello world"
          },
          pt: {
            helloName: "Olá {name}"
          }
        }
      });

      expect((x.i18n.value as any).hello).toBeUndefined();
    });

    it("should not fallback notFoundFallback is false", () => {
      const x = buildI18n({
        locale: "pt",
        fallback: "en",
        notFoundFallback: false,
        messages: {
          en: {
            hello: "hello world"
          },
          pt: {
            helloName: "Olá {name}"
          }
        }
      });

      expect((x.i18n.value as any).hello).toBeUndefined();
    });
  });

  it("should fallback if the locale is different than fallback locale", async () => {
    const x = buildI18n({
      locale: "jp",
      fallback: "en",
      messages: {
        en: { hello: "Hello" },
        jp: {}
      }
    });

    await nextTick();

    expect((x.i18n.value as any).hello).toBe("Hello");
  });
  it("should resolve promise based", async () => {
    const x = buildI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: () =>
          Promise.resolve({
            hello: "hello world",
            helloName: "Hello {name}",
            version: "My version is",
            ref: ref("Hey")
          }),
        pt: () => ({
          hello: "Olá mundo",
          helloName: "Olá {name}",
          ref: ref("Boas")
        })
      }
    });

    await promisedTimeout(10);

    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "hello world",
      helloName: "Hello {name}",
      version: "My version is",
      ref: "Hey"
    });

    expect(x.$t("hello").value).toBe("hello world");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Hello pikax");

    expect(x.i18n.value.hello).toBe("hello world");
    expect(x.i18n.value.helloName).toBe("Hello {name}");
    expect(x.i18n.value.version).toBe("My version is");

    x.locale.value = "pt";
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "Olá mundo",
      helloName: "Olá {name}",
      version: "My version is",
      ref: "Boas"
    });

    expect(x.$t("hello").value).toBe("Olá mundo");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Olá pikax");

    x.locale.value = "en";
    await nextTick();
    x.locale.value = "pt";
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "Olá mundo",
      helloName: "Olá {name}",
      version: "My version is",
      ref: "Boas"
    });

    expect(x.$t("hello").value).toBe("Olá mundo");
    expect(x.$t("helloName", { name: "pikax" }).value).toBe("Olá pikax");

    x.locale.value = "empty" as any;
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "hello world",
      helloName: "Hello {name}",
      version: "My version is",
      ref: "Hey"
    });
  });

  it("should use provided resolve", () => {
    const resolveMock = jest
      .fn()
      .mockImplementation((i18n, path, args) => `hello ${path} ${args.a}`);
    const { $t } = buildI18n({
      locale: "en",
      fallback: "en",
      resolve: resolveMock as any,
      messages: {
        en: {
          hello: "hello world",
          helloName: "Hello {name}",
          version: "My version is",
          ref: ref("Hey")
        },
        pt: {
          hello: "Olá mundo",
          helloName: "Olá {name}",
          ref: ref("Boas")
        }
      }
    });

    expect($t("x", { a: 1 }).value).toBe("hello x 1");
    expect(resolveMock).toHaveBeenCalled();
  });

  it("should add/remove locales", async () => {
    const pt = {
      hello: "Olá mundo",
      helloName: "Olá {name}"
    };
    const x = buildI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: {
          hello: "hello world",
          helloName: "Hello {name}"
        }
      }
    });

    x.removeLocale("pt" as any);
    expect(warnSpy).toHaveBeenLastCalledWith(
      `[useI18n] Locale "pt" doesn't exist`
    );

    x.locale.value = "pt" as any;

    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "hello world",
      helloName: "Hello {name}"
    });

    x.addLocale("pt", pt);
    expect(x.locales.value).toContain("pt");

    await nextTick();

    expect(x.i18n.value).toMatchObject(pt);

    const overridePT = {
      hello: "Oi",
      helloName: "Oi {name}"
    };

    x.addLocale("pt", overridePT);
    expect(warnSpy).toHaveBeenLastCalledWith(
      `[useI18n] Locale "pt" already exists, overriding it...`
    );

    expect(x.locales.value).toHaveLength(2);
    expect(x.locales.value).toContain("pt");

    await nextTick();
    expect(x.i18n.value).toMatchObject(overridePT);

    // if the current locale is removed it should go to fallback

    x.removeLocale("pt" as any);
    expect(warnSpy).toHaveBeenLastCalledWith(
      `[useI18n] removing current locale "pt", setting current locale to "en"`
    );

    await nextTick();
    expect(x.locale.value).toBe("en");

    x.addLocale("pt", pt);
    await nextTick();
    // removing simple
    x.removeLocale("pt" as any);
    await nextTick();

    x.addLocale("pt", pt);
    await nextTick();

    warnSpy.mockReset();

    x.removeLocale("en");
    await nextTick();

    expect(warnSpy).toHaveBeenCalledTimes(2);
    expect(warnSpy).toHaveBeenNthCalledWith(
      1,
      '[useI18n] removing default fallback locale "en"'
    );

    expect(warnSpy).toHaveBeenNthCalledWith(
      2,
      '[useI18n] removing current locale "en", setting current locale to "pt"'
    );

    expect(x.locale.value).toBe("pt");
    expect(x.locales.value).toHaveLength(1);

    x.removeLocale("pt" as any);
    await nextTick();
    expect(x.locales.value).toHaveLength(0);

    expect(errorSpy).toHaveBeenCalledWith(
      `[useI18n] No locales available to use`
    );

    expect(Object.keys(x.i18n.value)).toHaveLength(0);
  });

  describe("injection", () => {
    beforeEach(() => {
      provideSpy.mockClear();
      injectSpy.mockClear();
    });

    it("should build i18n and provide it", () => {
      const i18n: any = {
        locale: "en",
        fallback: "en",
        messages: {
          en: {
            hello: "hello world",
            helloName: "Hello {name}",
            version: "My version is",
            ref: ref("Hey")
          }
        }
      };
      const x = setI18n(i18n);

      expect(x.i18n.value).toMatchObject({
        hello: "hello world",
        helloName: "Hello {name}",
        version: "My version is",
        ref: "Hey"
      });
      expect(provideSpy).toHaveBeenCalledWith(expect.anything(), x);
    });

    it("should return definition if passed", () => {
      const x = useI18n({
        locale: "en",
        fallback: "en",
        messages: {
          en: {
            hello: "hello world",
            helloName: "Hello {name}",
            version: "My version is",
            ref: ref("Hey")
          }
        }
      });

      expect(x.i18n.value).toMatchObject({
        hello: "hello world",
        helloName: "Hello {name}",
        version: "My version is",
        ref: "Hey"
      });
      expect(injectSpy).not.toHaveBeenCalled();
    });

    it("should inject if no definition passed", () => {
      useI18n();
      expect(injectSpy).toHaveBeenCalled();
    });
  });
});
