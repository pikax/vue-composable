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
          error: form.$errors.length > 0,
        }"
      />
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "@vue/composition-api";
import { useValidation } from "vue-composable";

const required = (x) => !!x;

export default defineComponent({
  setup() {
    const name = ref("");
    const surname = ref("");
    const password = ref("");

    const form = useValidation({
      firstName: {
        $value: name,
        required,
      },
      lastName: {
        $value: surname,
        required,
      },
      password: {
        $value: password,
        required: {
          $validator: required,
          $message: ref("password is required"),
        },
      },
      samePassword: {
        $value: ref(""),

        match: {
          $validator(x) {
            return x === password.value;
          },
          $message: "Password don't match",
        },
      },
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

    const onSubmit = (e) => {
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
      form,
    };
  },
});
</script>

<style scoped>
.invalid {
  color: #e0e0e0;
  background: #282c34;
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 0.3rem;
  margin: 0.5rem auto;
}

.dirty {
  color: #ffff92;
  background: #282c34;
  border: none;
  padding: 0.3rem;
  border-radius: 3px;
  margin: 0.5rem auto;
  outline: none;
}

.error {
  color: #fb686c;
  background: #282c34;
  padding: 0.3rem;
  margin: 0.5rem auto;
  border: none;
  outline: none;
  border-radius: 3px;
}
</style>
