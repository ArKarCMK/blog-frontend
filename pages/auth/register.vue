<template>
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
        type="text"
        placeholder="Password"
      />

      <div class="title">Please Enter Your Password Again</div>
      <n-input
        v-model:value="form.password_confirmation"
        type="text"
        placeholder="Password"
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
</template>

<script setup>
// import axios from "axios";

const form = ref({
  email: "",
  password: "",
  name: "",
  password_confirmation: "",
});
const auth = useAuthStore();

// const handleClick = async () => {
//   if (auth.isLoggedIn) {
//     return navigateTo("/");
//   }
//   const { error } = await auth.register(form.value);
//   console.log("success");
//   if (!error) {
//     return navigateTo("/");
//   }
//   console.log("err", error);
// };
</script>

<style lang="scss">
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
</style>
