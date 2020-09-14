# Validation

> `validation` composable inspired by [vuelidate](https://github.com/vuelidate/vuelidate)

::: warning
Currently there's no exported `validators`.
:::

## Parameters

```js
import { useValidation } from "vue-composable";

const form = useValidation(options);
```

| Parameters | Type     | Required | Default | Description             |
| ---------- | -------- | -------- | ------- | ----------------------- |
| options    | `Object` | `true`   |         | Validation input object |

## State

The `useValidation` function exposes the following reactive state:

```js
import { useValidation } from "vue-composable";

const form = useValidation(options);
```

| State | Type                                     | Description                         |
| ----- | ---------------------------------------- | ----------------------------------- |
| form  | `Reactive<Options & Validation<Object>>` | **Reactive** form validation object |

::: warning
The returned value is an `reactive()` object, **do not** deconstruct it.
:::

## Input

The input object can be an [ValidationObject](#validationobject) or a [nested dictionary of ValidationObject](#nestedvalidationobject).

### ValidationObject

ValidationObject is composed by `$value`(`ref<any>|any`) and `validators`(`(o: ref<any>|any, ctx: object)=>Promise<boolean>|boolean`).

```ts
// function validator
type ValidatorFunction<T, TContext = any> = (
  model: T,
  ctx: TContext
) => boolean | Promise<boolean>;

// validator object with message
type ValidatorObject<T> = {
  $validator: ValidatorFunction<T>;
  $message: RefTyped<string>;
};

// typed validationObject
type ValidationObject<T> = {
  $value: T | Ref<T>;
} & Record<string, ValidatorFunction<T> | ValidatorObject<T>>;

const validationUsername = useValidation({
  $value: ref(""),

  // required validator, the first argument, is `$value` unwrapped
  // second argument is the context, equivalent to `validationUsername`
  required(v, context) {
    return !!v;
    // or
    return !!context.$value;
  },

  // canBeTaken validator, returns a promise
  canBeTaken(v) {
    return api.get("username/check/" + v); // Promise
  },

  containsInvalidWords: {
    $validator(v) {
      return api.get("username/invalid/" + v);
    },
    $message: `This username contains improper words`,

    // custom properties
    $customProp: "custom"
  },

  // custom properties
  $placeholder: "Username" // it will be unchanged, because it starts with `$`
});
```

::: tip
You can store any value you want, by using `$` as the first letter of the property name.

```js
{
  $value: ref(''),
  $myBag: { awesome: 'property'},
  required, // validator
}
```

:::

#### Return

It will return an reactive object.

```ts
interface ValidationValue<T> {
  $value: T;
  $dirty: boolean; // dirty is set to true when `$value` changes for the first time

  $anyInvalid: boolean; // any validation invalid
  $errors: any[]; // array of errors
}

// validator

interface ValidatorResult {
  $error: any;
  $invalid: boolean;
}

interface ValidatorResultPromise {
  $pending: boolean;
  $promise: Promise<boolean> | null;
}

interface ValidatorResultMessage {
  $message: string;
}
```

On the [example above](#validationobject), the result will be:

```ts
validationUsername.$value; // access to value,
validationUsername.$dirty; // was it modified

// validators
// common
validationUsername.required.$error;
validationUsername.required.$invalid; // true if the return from the validator is false

// promise
validationUsername.canBeTaken.$pending; // is promise still executing
validationUsername.canBeTaken.$promise; // access to the internal promise

// validator object
// contains the same properties has the previous and adds $message
validationUsername.containsInvalidWords.$message; // message

validationUsername.containsInvalidWords.$customProp; //custom prop

// custom properties
validationUsername.$placeholder; // custom prop
```

### NestedValidationObject

The validation composable allows you to have as many nested objects as you want, the only requirement is it ends on a [ValidationObject](#validationobject);

```ts
interface ValidationGroupResult {
  $anyDirty: boolean;
  $errors: Array<any>;
  $anyInvalid: boolean;
}

const form = useValidation({
  settings: {
    email: {
      $value: ref("")
    }
    // ...etc
  },
  personal: {
    name: {
      first: {
        $value: ref("")
        // validators...
      },
      last: {
        $value: ref("")
        // validators...
      }
    }
    // ...etc
  }
});

form.$anyDirty;
form.$anyInvalid;
form.$errors;

form.settings.$anyDirty;
form.settings.$anyInvalid;
form.settings.$errors;

form.personal.$anyDirty;
form.personal.$anyInvalid;
form.personal.$errors;
```

```ts
interface ValidationGroupResult {
  $anyDirty: boolean;
  $errors: Array<any>;
  $anyInvalid: boolean;
}
```

## Example

<validation-example/>

### Code

```vue
<template>
  <div class="about">
    <h1>Form validation</h1>
    <form @submit="onSubmit">
      <input v-model="form.firstName.$value" placeholder="firstName" />
      <input v-model="form.lastName.$value" placeholder="lastName" />
      <input v-model="form.password.$value" placeholder="password" />
      <input v-model="form.samePassword.$value" placeholder="password2" />
      <p v-if="form.samePassword.$dirty && form.samePassword.match.$invalid">
        {{ form.samePassword.match.$message }}
      </p>

      <br />
      <input
        type="submit"
        v-model="submitText"
        :class="{
          invalid: form.$anyDirty && form.$anyInvalid,
          dirty: form.$anyDirty && !form.$anyInvalid,
          error: form.$errors.length > 0
        }"
      />
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "@vue/composition-api";
import { required } from '@vuelidate/validators'
import { useValidation } from "vue-composable";

const required = x => !!x;

export default defineComponent({
  setup() {
    const name = ref("");
    const surname = ref("");
    const password = ref("");

    const form = useValidation({
      firstName: {
        $value: name,
        required
      },
      lastName: {
        $value: surname,
        required
      },
      password: {
        $value: password,
        required: {
          $validator: required.$validator,
          $message: ref("password is required")
        }
      },
      samePassword: {
        $value: ref(""),

        match: {
          $validator(x) {
            return x === password.value;
          },
          $message: "Password don't match"
        }
      }
    });

    const submitText = computed(() => {
      if (form.$anyDirty && form.$anyInvalid) {
        return "Invalid form";
      }
      if (!form.$anyDirty) {
        return "Please populate the form";
      }
      if (form.$errors.length > 0) {
        console.log(form.$errors);
        return "Error";
      }

      return "Submit";
    });

    const onSubmit = e => {
      e.preventDefault();
      if (form.$anyInvalid) {
        alert("invalid form");
      } else {
        alert("submit form");
      }
    };

    return {
      onSubmit,
      submitText,
      form
    };
  }
});
</script>

<style scoped>
.invalid {
  color: #aa2233;
  background: grey;
}

.dirty {
  color: yellow;
  background: grey;
}

.error {
  color: red;
  background: grey;
}
</style>
```
