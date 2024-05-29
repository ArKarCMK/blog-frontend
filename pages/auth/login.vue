<template>
  <div class="container">
    <div class="sub-container">
      <div class="login">Login</div>
      <div class="email">Email</div>
      <n-input v-model:value="email" type="text" placeholder="Email" />
      <div class="password">Password</div>
      <n-input v-model:value="value" type="text" placeholder="Password" />
      <div class="wrap-button">
        <n-button @click="handleClick" class="loginBtn" type="primary" tertiary>
          Login
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");

const handleClick = () => {
  console.log("login.value", email);
};
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
</style>
