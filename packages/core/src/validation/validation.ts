import {
  UnwrapType,
  RefTyped,
  isObject,
  isPromise,
  wrap,
  isBoolean
} from "../utils";
import { ref, Ref, watch, computed } from "@vue/composition-api";

type ValidatorFunc<T> = (model: T) => boolean | Promise<boolean>;

type ValidatorObject<TValidator extends ValidatorFunc<any>> = {
  $validator: TValidator;
  $message: RefTyped<string>;
};

type Validator<T> = ValidatorFunc<T> | ValidatorObject<ValidatorFunc<T>>;

interface ValidationValue<T> {
  $value: Ref<T>;
  $dirty: Ref<boolean>;
}

interface ValidatorResult {
  $error: Ref<any>;
  $invalid: Ref<boolean>;
}

interface ValidationGroupResult {
  $anyDirty: Ref<boolean>;
  $errors: Ref<Array<any>>;
  $anyInvalid: Ref<boolean>;
}

interface ValidatorResultPromise {
  $pending: Ref<boolean>;
  $promise: Ref<Promise<boolean> | null>;
}

interface ValidatorResultMessage {
  $message: Ref<string>;
}

/*  Input */
type ValidationInputType<T, TValue> = Record<
  Exclude<keyof T, "$value">,
  Validator<UnwrapType<TValue>>
> & { $value: TValue };

type ValidationInput<T> = T extends { $value: infer TValue }
  ? ValidationInputType<T, TValue>
  : { [K in keyof T]: ValidationInput<T[K]> };

type UseValidation<T> = { [K in keyof T]: ValidationInput<T[K]> };

/* /Input */

/* Output */

type ValidatorOutputFunc<T extends ValidatorFunc<T>> = ReturnType<
  T
> extends Promise<boolean>
  ? ValidatorResult & ValidatorResultPromise
  : ValidatorResult;

type ValidatorOutput<T extends Validator<E>, E = any> = T extends ValidatorFunc<
  any
>
  ? ValidatorOutputFunc<T>
  : T extends ValidatorObject<any>
  ? ValidatorOutputFunc<T["$validator"]> & ValidatorResultMessage
  : never;

type ValidationOutput<T extends Record<string, any>> = T extends {
  $value: infer TValue;
}
  ? ValidationValue<T> &
      {
        [K in Exclude<keyof T, "$value">]: T[K] extends Validator<infer V>
          ? ValidatorOutput<T[K], V>
          : never;
      }
  : { [K in keyof T]: ValidationOutput<T[K]> & ValidationGroupResult };

/* /Output */

function isValidation(v: any): v is ValidationInputType<any, any> {
  return typeof v.$value !== "undefined";
}

function isValidatorObject(v: any): v is ValidatorObject<any> {
  return isObject(v);
}

const buildValidationFunction = (r: Ref<any>, f: ValidatorFunc<any>) => {
  const $promise: Ref<Promise<boolean> | null> = ref(null);
  const $pending = ref(false);
  const $error = ref<Error>();
  const $invalid = ref(false);

  watch(
    r,
    r => {
      const p = async () => {
        try {
          $pending.value = true;

          const result = f(r);
          if (isPromise(result)) {
            $invalid.value = !(await result);
          } else {
            $invalid.value = !result;
          }
        } finally {
          $pending.value = false;
        }
      };
      $promise.value = p().catch(x => ($error.value = x));
    },
    { deep: true }
  );

  return {
    $promise,
    $pending,
    $invalid,
    $error
  };
};

const buildValidationValue = (
  r: Ref<any>,
  v: Validator<any>
): ValidatorResult & ValidatorResultPromise & ValidatorResultMessage => {
  const $validator: ValidatorFunc<any> = isValidatorObject(v)
    ? v.$validator
    : v;
  const $message = isValidatorObject(v) ? wrap(v.$message) : ref("");

  const { $pending, $promise, $invalid, $error } = buildValidationFunction(
    r,
    $validator
  );

  return {
    $pending,
    $error,
    $promise,
    $invalid,
    $message
  };
};

const buildValidation = <T>(
  o: ValidationInput<T>
): Record<string, ValidationOutput<any>> => {
  const r: Record<string, ValidationOutput<any>> = {};
  const $value = isValidation(o) ? o.$value : undefined;
  for (const k of Object.keys(o)) {
    if (k[0] === "$") {
      if (k === "$value") {
        r[k] = $value;
        const $dirty = ref(false);
        const dirtyWatch = watch(
          $value,
          () => {
            $dirty.value = true;
            dirtyWatch();
          },
          { lazy: true, deep: true }
        );

        (r as any)["$dirty"] = $dirty;
        continue;
      } else {
        r[k] = (o as any)[k];
        continue;
      }
    }

    if ($value) {
      const validation = buildValidationValue(
        $value,
        (o as Record<string, any>)[k]
      );

      r[k] = {
        ...validation,
        $value
      } as any;
    } else {
      const validation = buildValidation((o as Record<string, any>)[k]);

      let $anyDirty: Ref<boolean> | undefined = undefined;
      let $errors: Ref<Array<any>>;
      let $anyInvalid: Ref<boolean>;

      if (isValidation(validation)) {
        const validations = Object.keys(validation)
          .filter(x => x[0] !== "$")
          .map(x => (validation[x] as any) as ValidatorResult);
        $errors = computed(() => {
          return validations.map(x => x.$error.value).filter(Boolean);
        }) as Ref<[]>;
        // $anyDirty = computed(() => validations.some(x => !!x));
        $anyInvalid = computed(() => validations.some(x => !!x.$invalid.value));
      } else {
        const validations = Object.keys(validation).map(
          x => (validation[x] as any) as ValidationGroupResult
        );
        $errors = computed(() => {
          return validations.map(x => x.$errors.value).filter(Boolean);
        }) as Ref<[]>;
        $anyDirty = computed(() =>
          validations.some(
            x =>
              (x.$anyDirty && x.$anyDirty.value) ||
              (isBoolean((x as any).$dirty && (x as any).$dirty.value) &&
                (x as any).$dirty.value)
          )
        );
        $anyInvalid = computed(() =>
          validations.some(x => !!x.$anyInvalid.value)
        );
      }

      r[k] = {
        ...validation,
        $errors,
        $anyInvalid
      } as any;

      if ($anyDirty) {
        (r[k] as any).$anyDirty = $anyDirty;
      }
    }
  }
  return r;
};

export function useValidation<T extends UseValidation<E>, E = any>(
  input: E
): ValidationOutput<E> & ValidationGroupResult {
  return buildValidation({ input }).input as any;
}

// const required: Validator<number> = x => true;

// const c = useValidation({
//   name: {
//     $value: ref(1),
//     required
//   },
//   form: {
//     input: {
//       $value: 1,
//       required: async (x: number) => {
//         return true;
//       }
//     },
//     input2: {
//       $value: 2,
//       required: {
//         $validator(e: number) {
//           return false;
//         },
//         $message: ref("test")
//       }
//     }
//   }
// });

// c.name.required.$dirty;
// c.form.input.required.$promise;
// c.form.input.required;
// c.form.input2.required.$message;
