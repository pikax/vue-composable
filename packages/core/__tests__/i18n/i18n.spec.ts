import { buildI18n } from "../../src";
import { nextTick } from "../utils";

describe("i18n", () => {
  it("should work", async () => {
    const x = buildI18n({
      locale: "en",
      fallback: "en",
      messages: {
        en: {
          hello: "hello world",
          helloName: "Hello {name}",
          version: "My version is"
        },
        pt: {
          hello: "Olá mundo",
          helloName: "Olá {name}"
        }
      }
    });

    expect(x.i18n.value).toMatchObject({
      hello: "hello world",
      helloName: "Hello {name}",
      version: "My version is"
    });

    expect(x.$t("hello").value).toBe("hello world");
    expect(x.$tc("helloName", { name: "pikax" }).value).toBe("Hello pikax");

    expect(x.i18n.value.hello).toBe("hello world");
    expect(x.i18n.value.helloName).toBe("Hello {name}");
    expect(x.i18n.value.version).toBe("My version is");

    x.locale.value = "pt";
    await nextTick();

    expect(x.i18n.value).toMatchObject({
      hello: "Olá mundo",
      helloName: "Olá {name}",
      version: "My version is"
    });

    expect(x.$t("hello").value).toBe("Olá mundo");
    expect(x.$tc("helloName", { name: "pikax" }).value).toBe("Olá pikax");
  });
});
