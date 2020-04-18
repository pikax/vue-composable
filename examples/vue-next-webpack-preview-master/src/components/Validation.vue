<template>
  <div class="about">
    <h1>Form validation</h1>
    <form @submit="onSubmit">
      <input v-model="form.firstName.$value.value" placeholder="firstName" />
      <input v-model="form.lastName.$value.value" placeholder="lastName" />
      <input v-model="form.password.$value.value" placeholder="password" />
      <input v-model="form.samePassword.$value.value" placeholder="password2" />
      <p
        v-if="
          form.samePassword.$dirty.value &&
            form.samePassword.match.$invalid.value
        "
      >
        {{ form.samePassword.match.$message.value }}
      </p>
    </form>
    <p>{{form.firstName.$value}}</p>
    {{ form }}
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { useValidation } from "vue-composable";

const required = x => !!x;

export default {
  setup() {
    const name = ref("pikax");
    const surname = ref("stuff");
    const password = ref("123456");

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
          $validator: required,
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

    const onSubmit = () => {
      alert("submit form");
    };

    return {
      onSubmit,
      form
    };
  }
};
</script>

<style scoped>
.invalid {
}

.dirty {
}

.valid {
}
</style>
