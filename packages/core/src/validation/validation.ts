import { UnwrapRef, isObject, isPromise, wrap, isBoolean } from "../utils";
import { ref, Ref, watch, computed, reactive } from "@vue/composition-api";

type ValidatorFunc<T, TContext = any> = (
  model: T,
  ctx: TContext
) => boolean | Promise<boolean>;

type ValidatorObject<TValidator extends ValidatorFunc<any>> = {
  $validator: TValidator;
  $message: string;
};

type Validator<T> = ValidatorFunc<T> | ValidatorObject<ValidatorFunc<T>>;

interface ValidationValue<T> {
  $value: UnwrapRef<T>;
  $dirty: boolean;
}

interface ValidatorResult {
  $error: any;
  $invalid: boolean;
}

interface ValidationGroupResult {
  $anyDirty: boolean;
  $errors: Array<any>;
  $anyInvalid: boolean;
}

interface ValidatorResultPromise {
  $pending: boolean;
  $promise: Promise<boolean> | null;
}

interface ValidatorResultMessage {
  $message: string;
}

/*  Input */
type ValidationInputType<T, TValue> = Record<
  Exclude<keyof T, "$value">,
  Validator<UnwrapRef<TValue>>
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

// TODO variables started with $ are not treated as validators, not
// sure how to do that on typescript :/
type ValidationOutput<T extends Record<string, any>> = T extends {
  $value: infer TValue;
}
  ? ValidationValue<T["$value"]> &
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

const buildValidationFunction = (
  r: Ref<any>,
  f: ValidatorFunc<any>,
  handlers: Array<Function>
) => {
  const $promise: Ref<Promise<boolean> | null> = ref(null);
  const $pending = ref(false);
  const $error = ref<Error>();
  const $invalid = ref(false);
  let context: any = undefined;

  const onChange = (r: any) => {
    const p = async () => {
      try {
        $pending.value = true;

        const result = f(r, context);
        if (isPromise(result)) {
          $invalid.value = !(await result);
        } else {
          $invalid.value = !result;
        }
      } catch (e) {
        $invalid.value = true;
        throw e;
      } finally {
        $pending.value = false;
      }
    };
    $promise.value = p().catch(x => {
      $error.value = x;
      $invalid.value = true;
      return x;
    });
  };

  handlers.push((ctx: any) => {
    context = ctx;
    watch(
      () => {
        try {
          // keep track on the external dependencies
          f(r.value, context);
        } catch (e) {
          // ignore error
        }
        return r.value;
      },
      onChange,
      { deep: true }
    );
  });

  return {
    $promise,
    $pending,
    $invalid,
    $error
  };
};

const buildValidationValue = (
  r: Ref<any>,
  v: Validator<any>,
  handlers: Array<Function>
): ValidatorResult & ValidatorResultPromise & ValidatorResultMessage => {
  const $validator: ValidatorFunc<any> = isValidatorObject(v)
    ? v.$validator
    : v;
  const $message = isValidatorObject(v) ? wrap(v.$message) : ref("");

  const { $pending, $promise, $invalid, $error } = buildValidationFunction(
    r,
    $validator,
    handlers
  );

  return {
    $pending,
    $error,
    $promise,
    $invalid,
    $message
  } as any;
};

const buildValidation = <T>(
  o: ValidationInput<T>,
  handlers: Array<Function>
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
        (o as Record<string, any>)[k],
        handlers
      );

      r[k] = {
        ...validation,
        $value
      } as any;
    } else {
      const validation = buildValidation(
        (o as Record<string, any>)[k],
        handlers
      );

      let $anyDirty: Ref<boolean> | undefined = undefined;
      let $errors: Ref<Array<any>>;
      let $anyInvalid: Ref<boolean>;

      if (isValidation(validation)) {
        const validations = Object.keys(validation)
          .filter(x => x[0] !== "$")
          .map(x => (validation[x] as any) as ValidatorResult);
        $errors = computed(() => {
          return validations.map(x => x.$error).filter(Boolean);
        }) as Ref<[]>;
        // $anyDirty = computed(() => validations.some(x => !!x));
        $anyInvalid = computed(() => validations.some(x => !!x.$invalid));
      } else {
        const validations = Object.keys(validation).map(
          x => (validation[x] as any) as ValidationGroupResult
        );
        $errors = computed(() => {
          return validations.map(x => x.$errors).filter(Boolean);
        }) as Ref<[]>;
        $anyDirty = computed(() =>
          validations.some(
            x =>
              (x.$anyDirty && x.$anyDirty) ||
              (isBoolean((x as any).$dirty && (x as any).$dirty) &&
                (x as any).$dirty)
          )
        );
        $anyInvalid = computed(() => validations.some(x => !!x.$anyInvalid));
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
  const handlers: Array<Function> = [];
  const validation = buildValidation({ input }, handlers);
  // convert to reactive, this will make it annoying to deconstruct, but
  // allows to use it directly on the render template without `.value`
  // https://github.com/vuejs/vue-next/pull/738
  const validationInput = reactive(validation.input);
  // set the context, this will allow to use this object as the second
  // argument when calling validators
  handlers.forEach(x => x(validationInput));
  
  return validationInput as any;
}
