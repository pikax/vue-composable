import { useValidation } from "../../src";
import { ref } from "@vue/composition-api";
import { nextTick } from "../utils";

describe("validation", () => {
  it("validation", async () => {
    const $value = ref("");

    const validation = useValidation({
      test: {
        $value,
        required(x: string) {
          return !x;
        }
      }
    });

    expect(validation).toMatchObject({
      test: {
        $dirty: { value: false },
        $value,
        required: {
          $invalid: { value: true }
        }
      }
    });

    $value.value = "hello";

    await nextTick();

    expect(validation.test.$value).toBe($value);
    expect(validation).toMatchObject({
      test: {
        $dirty: { value: true },
        $value,
        required: {
          $invalid: { value: false }
        }
      }
    });
  });
});
