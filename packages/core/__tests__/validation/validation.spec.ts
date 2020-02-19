import { useValidation } from "../../src";
import { ref } from "@vue/composition-api";
import { nextTick } from "../utils";

describe("validation", () => {
  it("validation", async () => {
    const $value = ref("");
    const $value1 = ref("");

    const validation = useValidation({
      test: {
        $value,
        required(x: string) {
          return !!x;
        }
      },
      test1: {
        $value: $value1,
        required(x: string) {
          return !!x;
        }
      }
    });

    expect(validation).toMatchObject({
      $anyDirty: { value: false },
      $anyInvalid: { value: true },

      test: {
        $dirty: { value: false },
        $value,
        required: {
          $invalid: { value: true }
        }
      },
      test1: {
        $dirty: { value: false },
        $value: $value1,
        required: {
          $invalid: { value: true }
        }
      }
    });

    $value.value = "hello";

    await nextTick();

    expect(validation.test.$value).toBe($value);
    expect(validation).toMatchObject({
      $anyDirty: { value: true },
      $anyInvalid: { value: true },

      test: {
        $dirty: { value: true },
        $value,
        required: {
          $invalid: { value: false }
        }
      },
      test1: {
        $dirty: { value: false },
        $value: $value1,
        required: {
          $invalid: { value: true }
        }
      }
    });
  });

  it("validator should run if dependent of other ref", async () => {
    const password = ref('');
    const form = useValidation({
      password: {
        $value: password
      },
      password2: {
        $value: ref(""),
        samePassword(r: string, ctx: any) {
          return r === ctx.password.$value.value;
        }
      }
    });

    expect(form.password2.samePassword.$invalid.value).toBe(false);

    form.password.$value.value = 'test';
    await nextTick();

    expect(form.password2.samePassword.$invalid.value).toBe(true);
  });
});
