import { useValidation, NO_OP } from "../../src";
import { ref } from "../../src/api";
import { nextTick, createVue } from "../utils";

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

    expect(v.password.$args).toStrictEqual($args);
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

    expect(v.password.required.$error).toStrictEqual(error);
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

    v.password.$value;
    expect(v.password.required.$pending).toBe(true);
    expect(v.password.required.$message).toBe("Err");

    promiseResolve(true);
    await nextTick();

    expect(v.password.required.$pending).toBe(false);
    expect(v.password.required.$message).toBe("Err");
  });

  it("should test error ", async () => {
    const v = useValidation({
      input: {
        $value: "",

        required() {
          throw Error("error 1");
        },
        match() {
          throw Error("error 2");
        }
      }
    });
    v.input.$value = "1";
    await nextTick();

    expect(v.input.$errors).toStrictEqual([
      new Error("error 1"),
      new Error("error 2")
    ]);
  });

  describe("render", () => {
    it("should show error", async () => {
      const required = (x: any) => !!x;
      let form = useValidation({
        firstName: {
          $value: ref(""),
          required,
          otherRequired: {
            $validator: required,
            $message: ref("password is required")
          }
        }
      });

      const { mount } = createVue({
        template: `
        <div>
          <input name="firstName" v-model="form.firstName.$value" placeholder="firstName" />

          <p id="form-anyInvalid" v-if="form.$anyInvalid">Invalid</p>
          <p id="form-dirty-anyError" v-if="form.$anyDirty && form.$anyInvalid">Dirty & Invalid</p>
          <p id="firstname-error-required" v-if="form.firstName.$dirty && form.firstName.required.$invalid">
            Invalid
          </p>
          <p id="firstname-error" v-if="form.firstName.$dirty && form.firstName.otherRequired.$invalid">
            {{ form.firstName.otherRequired.$message }}
          </p>
        </div>
        `,
        setup() {
          return {
            form
          };
        }
      });

      const vm = mount();
      await nextTick();

      const input = document.getElementsByName("firstName")[0];

      const anyInvalid = () => document.getElementById("form-anyInvalid");
      const dirtyInvalid = () => document.getElementById("form-dirty-anyError");
      const nameRequired = () =>
        document.getElementById("firstname-error-required");
      const otherRequired = () => document.getElementById("firstname-error");

      vm.$el;

      expect(anyInvalid()).not.toBeNull();
      expect(dirtyInvalid()).toBeNull();
      expect(nameRequired()).toBeNull();
      expect(otherRequired()).toBeNull();

      expect((input as any).value).toBe(form.firstName.$value);

      (input as any).value = "hello world";
      input.dispatchEvent(new InputEvent("input"));
      await nextTick();

      expect(form.firstName.$value).toBe("hello world");

      expect(dirtyInvalid()).toBeNull();
      expect(nameRequired()).toBeNull();
      expect(otherRequired()).toBeNull();
      expect(anyInvalid()).toBeNull();

      (input as any).value = "";
      input.dispatchEvent(new InputEvent("input"));
      await nextTick();

      expect(dirtyInvalid()).not.toBeNull();
      expect(nameRequired()).not.toBeNull();
      expect(otherRequired()).not.toBeNull();
      expect(anyInvalid()).not.toBeNull();

      expect(otherRequired()!.textContent!.trim()).toBe(
        form.firstName.otherRequired.$message
      );
    });
  });
});
