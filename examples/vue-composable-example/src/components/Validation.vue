<template>
  <div class="about">
    <h1>Form validation</h1>
    <form @submit="onSubmit">
      <input v-model="form.firstName.$value" placeholder="firstName" />
      <input v-model="form.lastName.$value" placeholder="lastName" />
      <input v-model="form.password.$value" placeholder="password" />
      <input v-model="form.samePassword.$value" placeholder="password2" />
      <p
        v-if="
          form.samePassword.$dirty &&
            form.samePassword.match.$invalid
        "
      >
        {{ form.samePassword.match.$message }}
      </p>
    </form>
    {{ form }}
  </div>
</template>

<script>
import { createComponent, ref, reactive } from "@vue/composition-api";
import { useValidation } from "vue-composable";

const required = x => !!x;

export default createComponent({
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
      form: ref(form)
    };
  }
});
</script>

<style scoped>
.invalid {
}

.dirty {
}

.valid {
}
</style>
