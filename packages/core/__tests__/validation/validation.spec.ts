import { useValidation } from "../../src";
import { ref } from "@vue/composition-api";

describe("validation", () => {
  it("validation", () => {
    const $value = ref("");

    const validation = useValidation({
      test: {
        $value,
        required(x: string) {
          return !!x;
        }
      }
    });

    expect(validation).toMatchObject({
      test: {
        $value,
        required: {}
      }
    });
  });
});
