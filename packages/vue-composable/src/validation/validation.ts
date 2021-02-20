import {
  isObject,
  isPromise,
  isBoolean,
  RefTyped,
  wrap,
  unwrap,
  NO_OP,
} from "../utils";
import { ref, Ref, watch, computed, reactive, UnwrapRef } from "../api";

type ValidatorFunc<T, TContext = any> = (
  model: T,
  ctx: TContext
) => boolean | Promise<boolean>;

type ValidatorObject<TValidator extends ValidatorFunc<any>> = {
  $validator: TValidator;
  $message: RefTyped<string>;
};

type Validator<T> = ValidatorFunc<T> | ValidatorObject<ValidatorFunc<T>>;

interface ValidationValue<T> {
  $value: UnwrapRef<T>;
  $dirty: boolean;
  $errors: Array<any>;
  $anyInvalid: boolean;

  // $touch(): void;
  // $reset(): void;
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

type ValidatorOutput<T, TValue> = T extends (
  value?: TValue,
  ctx?: any
) => boolean
  ? ReturnType<T> extends Promise<boolean>
    ? ValidatorResultPromise & ValidatorResult
    : ValidatorResult
  : T extends { $validator: Function }
  ? ValidatorOutput<T["$validator"], TValue> &
      (T extends { $message: infer TM } ? { $message: TM } : {})
  : T extends (...args: any) => infer TReturn
  ? TReturn extends Promise<any>
    ? ValidatorResultPromise & ValidatorResult
    : ValidatorResult
  : never;

type NonDollarSign<T> = T extends `$${infer _}` ? never : T;

type ToObjectOutput<T extends Record<string, any>> = T extends {
  $value: infer V;
}
  ? UnwrapRef<V>
  : {
      [K in NonDollarSign<keyof T>]: ToObjectOutput<T[K]>;
    };

type Validation<T extends Record<string, any>> = T extends {
  $value: infer TV;
}
  ? {
      [K in keyof Omit<T, "$value">]: K extends `$${infer _}`
        ? UnwrapRef<T[K]>
        : ValidatorOutput<T[K], TV>;
    } & {
      $value: UnwrapRef<TV>;
    } & {
      toObject(): UnwrapRef<TV>;
    } & ValidationValue<TV> & { b: 1 }
  : {
      [K in keyof T]: K extends `$${infer _}`
        ? UnwrapRef<T[K]>
        : Validation<T[K]>;
    } &
      (NonDollarSign<keyof T> extends string
        ? ValidationGroupResult & { toObject(): ToObjectOutput<T> }
        : {});

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
  m: Ref<string | undefined>,
  handlers: Array<Function>
) => {
  const $promise: Ref<Promise<boolean> | null> = ref(null);
  const $pending = ref(false);
  const $error = ref<Error | string>();
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
        $error.value = $invalid.value ? m.value : undefined;
      } catch (e) {
        $invalid.value = true;
        throw e;
      } finally {
        $pending.value = false;
      }
    };
    $promise.value = p().catch((x) => {
      $error.value = unwrap(x);
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
      { deep: true, immediate: true }
    );
  });

  return {
    $promise,
    $pending,
    $invalid,
    $error,
  };
};

const buildValidationValue = (
  r: Ref<any>,
  v: Validator<any>,
  handlers: Array<Function>
): ValidatorResult & ValidatorResultPromise & ValidatorResultMessage => {
  const { $message, $validator, ...$rest } = isValidatorObject(v)
    ? v
    : { $validator: v, $message: undefined };

  const { $pending, $promise, $invalid, $error } = buildValidationFunction(
    r,
    $validator,
    ref($message),
    handlers
  );

  return {
    $pending,
    $error,
    $promise,
    $invalid,
    $message,
    ...$rest,
  } as any;
};

const buildValidation = <T>(
  o: ValidationInput<T>,
  handlers: Array<Function>
): Record<string, Validation<any>> => {
  const r: Record<string, Validation<any>> = {};
  const $value: any | undefined = isValidation(o) ? wrap(o.$value) : undefined;
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
          { immediate: false, deep: true }
        );

        (r as any)["$dirty"] = $dirty;

        // @ts-ignore
        r.toObject = () => unwrap($value);
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
        $value,
        toObject() {
          return unwrap($value);
        },
      } as any;
    } else {
      const validation = buildValidation(
        (o as Record<string, any>)[k],
        handlers
      );

      let $anyDirty: Ref<boolean> | undefined = undefined;
      let $errors: Readonly<Ref<Readonly<Array<any>>>>;
      let $anyInvalid: Ref<boolean>;

      let toObject: () => Record<string, any> = NO_OP as any;

      if (isValidation(validation)) {
        const validations = Object.keys(validation)
          .filter((x) => x[0] !== "$")
          .map((x) => (validation[x] as any) as ValidatorResult);

        $errors = computed(() =>
          validations
            .map((x) => x.$error)
            .map((x) => unwrap(x))
            .filter(Boolean)
        );
        // $anyDirty = computed(() => validations.some(x => !!x));
        $anyInvalid = computed(() =>
          validations.some((x) => {
            return !!unwrap(x.$invalid);
          })
        );

        toObject = () => {
          return Object.keys(validation)
            .filter((x) => x[0] !== "$")
            .reduce((p, c) => {
              debugger;
              //@ts-ignore
              p[c] = validation[c].toObject();
              return p;
            }, {});
        };
      } else {
        const validations = Object.keys(validation).map(
          (x) => (validation[x] as any) as ValidationGroupResult
        );
        $errors = computed(() => {
          return validations
            .map((x) => unwrap(x.$errors))
            .filter(Boolean)
            .filter((x) => {
              return x.some(Boolean);
            });
        });
        $anyDirty = computed(() => {
          return validations.some((x) => {
            return (
              x.$anyDirty ||
              (isBoolean(unwrap((x as any).$dirty)) &&
                unwrap((x as any).$dirty))
            );
          });
        });
        $anyInvalid = computed(() =>
          validations.some((x) => {
            return !!unwrap(x.$anyInvalid);
          })
        );

        toObject = () => {
          return Object.keys(validation)
            .filter((x) => x[0] !== "$")
            .reduce((p, c) => {
              //@ts-ignore
              p[c] = validation[c].toObject();
              return p;
            }, {});
        };
      }

      r[k] = {
        toObject,
        ...validation,
        $errors,
        $anyInvalid,
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
): Validation<E> & ValidationGroupResult & { toObject(): ToObjectOutput<E> } {
  const handlers: Array<Function> = [];
  const validation = buildValidation({ input }, handlers);
  // convert to reactive, this will make it annoying to deconstruct, but
  // allows to use it directly on the render template without `.value`
  // https://github.com/vuejs/vue-next/pull/738

  // @ts-expect-error TODO check this error
  const validationInput = reactive(validation.input);
  // set the context, this will allow to use this object as the second
  // argument when calling validators
  handlers.forEach((x) => x(validationInput));

  return validationInput as any;
}
