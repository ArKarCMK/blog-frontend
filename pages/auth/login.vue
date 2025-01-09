<template>
  <div class="wrapper">
    <div v-if="errorMessage !== ''" class="error-wrapper">
      <n-alert class="error-message" type="error" closable>
        {{ errorMessage }}
      </n-alert>
    </div>
    <div class="container">
      <div class="sub-container">
        <div class="login">Login</div>
        <div class="email">Email</div>
        <n-input v-model:value="form.email" type="text" placeholder="Email" />
        <div class="password">Password</div>
        <n-input
          v-model:value="form.password"
          type="password"
          show-password-on="click"
          placeholder="Password"
          @keyup.enter="handleClick"
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
        <div class="wrap-button">
          <n-button
            @click="handleClick"
            class="loginBtn"
            type="primary"
            tertiary
          >
            Login
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/useAuthStore";
import { GlassesOutline, Glasses } from "@vicons/ionicons5";

const errorMessage = ref("");
definePageMeta({
  middleware: "guest",
});
const form = ref({
  email: "",
  password: "",
});

const auth = useAuthStore();
const router = useRouter();

const handleClick = async () => {
  try {
    errorMessage.value = "";
    const res = await auth.login(form.value);

    if (res.error.value) {
      console.log("Status Code: ", res.error.value.statusCode);
      if (res.error.value.statusCode == 422) {
        errorMessage.value = "Username or password is incorrect";
      }
      if (res.error.value.statusCode == 500) {
        errorMessage.value = "Server Error";
      }
    }

    console.log("Error Message: ", errorMessage.value);

    if (auth.isLoggedIn) {
      window.location.href = "/home";
    }
  } catch (error) {
    console.log("Error during login:", error);
  }
};
</script>

<style lang="scss">
.wrapper {
  .error-wrapper {
    position: relative;
    .error-message {
      position: absolute;
      top: 20px;
      right: 20px;
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
      .email {
        padding-bottom: 10px;
      }
      .password {
        padding: 10px 0;
      }
      .wrap-button {
        padding-top: 10px;
        // background: green;
        display: flex;
        justify-content: center;
        .loginBtn {
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
