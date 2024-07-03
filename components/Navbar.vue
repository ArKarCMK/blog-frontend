<template>
  <div class="container">
    <n-row gutter="12">
      <n-col :span="4">
        <div class="logo">Logo</div>
      </n-col>
      <n-col class="wrap-middle-column" :span="16">
        <div class="middle-column">
          <div>Home</div>
          <div>Blogs</div>
          <div>About</div>
        </div>
      </n-col>
      <n-col :span="4">
        <div class="auth-column">
          <div class="green">Sign In</div>
          <div class="green">Sign Up</div>
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  border-radius: 20px;
  border: 2px solid #000;
  height: 50px;
  margin: 20px;
  font-size: 20px;
  box-shadow: 0px 5px 20px 1px #d6d4d4;
  .logo {
    text-align: center;
    height: 50px;
    width: 50px;
    margin: 0 auto;
    background: teal;
  }
  .wrap-middle-column {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .middle-column {
      display: flex;
      justify-content: space-around;
      width: 350px;
    }
  }
  .auth-column {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
