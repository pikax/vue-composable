import { ref } from "../../src/api";
import { useSync, wrap } from "../../src";
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

    const o2 = { c: 1 };
    list.value[0].value = o2 as any;
    await nextTick();

    expect(list.value).toMatchObject([
      { value: o2 },
      { value: o2 },
      { value: o2 }
    ]);
    expect(main.value).toMatchObject(o2);

    const newValue = ref(1);
    list.value.push(newValue as any);
    await nextTick();
    expect(newValue.value).toMatchObject(o2);
  });

  it("should receive ref<Array>", () => {
    const main = ref({ a: 1 });

    const others = [{ a: 2 }, { a: 10 }, { a: 1 }];

    const list = useSync(main, ref(others.map(x => wrap(x))));

    expect(list.value).toMatchObject([
      { value: main.value },
      { value: main.value },
      { value: main.value }
    ]);
  });

  it("should receive one element", () => {
    const main = ref({ a: 1 });

    const other = { a: 2 };

    const list = useSync(main, other);

    expect(list.value).toMatchObject([{ value: main.value }]);
  });
});
