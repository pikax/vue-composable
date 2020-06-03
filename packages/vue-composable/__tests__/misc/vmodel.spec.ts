import { useVModel } from "../../src";
import { nextTick, createVue } from "../utils";
import { onMounted, ref } from "../../src/api";

describe("vmodel", () => {
  if (__VUE_2__) {
    it("should return undefined", () => {
      expect(useVModel({ a: 1 }, "a")).toBeUndefined();
    });
    return;
  }
  // VUE 3
  it("should work", async () => {
    const comp1 = {
      props: {
        test: String
      },
      setup(props: { test: string }) {
        const testModel = useVModel(props, "test");

        onMounted(() => {
          testModel.value = "mounted";
        });

        return {
          testModel
        };
      },
      template: `<p>{{testModel}}</p>`
    };

    const test = ref("propTest");

    const vm = createVue({
      components: {
        comp1
      },
      template: `<comp1 v-model:test="test" />`,
      setup() {
        return {
          test
        };
      }
    });

    expect(test.value).toBe("propTest");
    vm.mount();
    await nextTick();

    expect(test.value).toBe("mounted");
  });

  it("should replace prop", async () => {
    const comp1 = {
      props: {
        test: String
      },
      setup(props: { test: string }) {
        const test = useVModel(props, "test");

        onMounted(() => {
          test.value = "mounted";
        });

        return {
          test
        };
      },
      template: `<p>{{test}}</p>`
    };

    const test = ref("propTest");

    const vm = createVue({
      components: {
        comp1
      },
      template: `<comp1 v-model:test="test" />`,
      setup() {
        return {
          test
        };
      }
    });

    expect(test.value).toBe("propTest");
    vm.mount();
    await nextTick();

    expect(test.value).toBe("mounted");
  });

  it("should return empty ref if called outside setup", () => {
    const r = useVModel({ a: 10 }, "a");
    expect(r.value).toBeUndefined();
  });
});
