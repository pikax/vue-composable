import { buildI18n } from "../../src";
import { nextTick } from "../utils";
import { ref } from "@vue/composition-api";

describe("i18n", () => {
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
});
