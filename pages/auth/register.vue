<template>
  <div class="wrapper">
    <div v-if="Object.keys(errorMessages).length > 0" class="error-wrapper">
      <div v-for="(messages, field) in errorMessages" :key="field">
        <div v-for="(message, index) in messages" :key="index">
          <n-alert class="error-message" type="error" closable>
            {{ message }}
          </n-alert>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="sub-container">
        <div class="login">Register</div>

        <div class="title">Name</div>
        <n-input v-model:value="form.name" type="text" placeholder="Name" />

        <div class="title">Email</div>
        <n-input v-model:value="form.email" type="text" placeholder="Email" />

        <div class="title">Password</div>
        <n-input
          v-model:value="form.password"
          type="password"
          show-password-on="click"
          placeholder="Password"
        >
          <template #password-visible-icon>
            <n-icon :size="24" :component="GlassesOutline" />
          </template>
          <template #password-invisible-icon>
            <n-icon
              :size="24"
              :component="Glasses"
              :style="{ color: 'green' }"
            />
          </template>
        </n-input>

        <div class="title">Please Enter Your Password Again</div>
        <n-input
          v-model:value="form.password_confirmation"
          type="password"
          show-password-on="click"
          placeholder="Password"
        >
          <template #password-visible-icon>
            <n-icon :size="24" :component="GlassesOutline" />
          </template>
          <template #password-invisible-icon>
            <n-icon
              :size="24"
              :component="Glasses"
              :style="{ color: 'green' }"
            />
          </template>
        </n-input>

        <div class="title">Please upload your profile picture</div>
        <n-upload
          :file="form.profile_picture"
          list-type="image-card"
          @change="handleImageUpload"
          :max="1"
        />

        <div class="wrap-button">
          <n-button
            @click="handleClick"
            class="registerBtn"
            type="primary"
            tertiary
          >
            Register
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from "axios";
import {
  ArchiveOutline as ArchiveIcon,
  GlassesOutline,
  Glasses,
} from "@vicons/ionicons5";
import { routerKey } from "vue-router";

definePageMeta({
  middleware: "guest",
});
const auth = useAuthStore();
const router = useRouter();
const errorMessages = ref({});

const form = ref({
  email: "",
  password: "",
  name: "",
  password_confirmation: "",
  profile_picture: null,
});

const handleImageUpload = (file) => {
  const img = file.file.file;
  form.value.profile_picture = img;
};

const handleClick = async () => {
  errorMessages.value = {};
  console.log("Error Message clear:", errorMessages.value);
  try {
    const formData = new FormData();

    formData.append("name", form.value.name);
    formData.append("email", form.value.email);
    formData.append("password", form.value.password);
    formData.append("password_confirmation", form.value.password_confirmation);

    if (form.value.profile_picture) {
      formData.append("profile_picture", form.value.profile_picture);
    }

    const res = await auth.register(formData);
    // console.log("es", res);
    // console.log("Error Response", res.error.value.data.errors);
    errorMessages.value = res.error.value.data.errors;

    console.log("Error Messages", errorMessages.value);

    if (res.error.value) {
      console.log("Error during registration", res.error.value);
      return;
    } else {
      await router.push("/auth/login");
    }
  } catch (error) {
    console.log("Error during registration", error);
  }
};
</script>

<style lang="scss">
.wrapper {
  .error-wrapper {
    position: relative;
    .error-message {
      position: absolute;
      // top: 20px;
      // right: 20px;
    }
  }

  .container {
    width: 100%;
    height: 100vh;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    .sub-container {
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .login {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
      .title {
        padding: 10px 0;
      }
      .upload {
        padding: 10px 0;
      }
      .wrap-button {
        padding-top: 10px;
        // background: green;
        display: flex;
        justify-content: center;
        .registerBtn {
          margin-top: 20px;
          width: 200px;
          background: green;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
}
</style>
