import { ref } from "../../src/api";
import { useSync } from "../../src";
import { nextTick } from "../utils";

describe("sync", () => {
  it("should work", async () => {
    const main = ref({ a: 1 });

    const others = [{ a: 2 }, { a: 10 }, { a: 1 }];

    const list = useSync(main, ...others);

    expect(list.value).toMatchObject([
      { value: main.value },
      { value: main.value },
      { value: main.value }
    ]);

    // main updates
    main.value.a = 42;
    expect(list.value).toMatchObject([
      { value: main.value },
      { value: main.value },
      { value: main.value }
    ]);

    // any other updates
    list.value[1].value.a = 55;
    await nextTick();

    expect(list.value).toMatchObject([
      { value: { a: 55 } },
      { value: { a: 55 } },
      { value: { a: 55 } }
    ]);
    expect(main.value.a).toBe(55);

    const o = { b: 1 };
    main.value = o as any;

    expect(list.value).toMatchObject([
      { value: o },
      { value: o },
      { value: o }
    ]);
  });
});
