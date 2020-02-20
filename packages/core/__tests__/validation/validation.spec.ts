import { useValidation, NO_OP } from "../../src";
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

  it("should keep values with key starting `$`", () => {
    const $args = [1, 2];
    const v = useValidation({
      password: {
        $value: ref(""),
        $args
      }
    });

    expect(v.password.$args).toBe($args);
  });

  it("should store error if exception thrown ", async () => {
    const error = new Error("my error");
    const v = useValidation({
      password: {
        $value: ref(""),
        required() {
          throw error;
        }
      }
    });

    await nextTick();

    expect(v.password.required.$error).toBe(error);
    expect(v.password.$errors).toMatchObject([error]);
    expect(v.$errors).toMatchObject([[error]]);
  });

  it("should handle promise validator", async () => {
    let promiseResolve: Function = NO_OP;
    const promise = new Promise<boolean>(resolve => (promiseResolve = resolve));

    const v = useValidation({
      password: {
        $value: ref(""),
        required() {
          return promise;
        }
      }
    });

    expect(v.password.required.$pending).toBe(true);

    promiseResolve(true);
    await nextTick();

    expect(v.password.required.$pending).toBe(false);
  });

  it("should handle promise validator with objectValidator", async () => {
    let promiseResolve: Function = NO_OP;
    const promise = new Promise<boolean>(resolve => (promiseResolve = resolve));

    const v = useValidation({
      password: {
        $value: ref(""),
        required: {
          $validator() {
            return promise;
          },
          $message: ref("Err")
        }
      }
    });

    expect(v.password.required.$pending).toBe(true);
    expect(v.password.required.$message).toBe("Err");

    promiseResolve(true);
    await nextTick();

    expect(v.password.required.$pending).toBe(false);
    expect(v.password.required.$message).toBe("Err");
  });
});
