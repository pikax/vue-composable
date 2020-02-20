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
      $anyDirty: false,
      $anyInvalid: true,

      test: {
        $dirty: false,
        $value: $value.value,
        required: {
          $invalid: true
        }
      },
      test1: {
        $dirty: false,
        $value: $value1.value,
        required: {
          $invalid: true
        }
      }
    });

    $value.value = "hello";

    await nextTick();

    expect(validation.test.$value).toBe($value.value);
    expect(validation).toMatchObject({
      $anyDirty: true,
      $anyInvalid: true,

      test: {
        $dirty: true,
        $value: $value.value,
        required: {
          $invalid: false
        }
      },
      test1: {
        $dirty: false,
        $value: $value1.value,
        required: {
          $invalid: true
        }
      }
    });
  });

  it("validator should run if dependent of other ref", async () => {
    const password = ref("");
    const form = useValidation({
      password: {
        $value: password
      },
      password2: {
        $value: ref(""),
        samePassword(r: string, ctx: any) {
          return r === ctx.password.$value;
        }
      }
    });

    expect(form.password2.samePassword.$invalid).toBe(false);

    form.password.$value = "test";
    await nextTick();

    expect(form.password2.samePassword.$invalid).toBe(true);
  });
});
