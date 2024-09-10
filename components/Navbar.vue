<template>
  <div class="container">
    <div class="logo">
      <div>
        <img widht="50" height="50" src="../assets/LOGO.png" />
      </div>
    </div>
    <div class="wrap-middle-column">
      <div class="middle-column">
        <nuxt-link class="link" to="/home">Home</nuxt-link>
        <nuxt-link class="link" to="/blogs">Blogs</nuxt-link>
        <nuxt-link class="link" to="/about">About</nuxt-link>
      </div>
    </div>
    <div class="auth-column" v-if="!auth.isLoggedIn">
      <n-button
        strong
        secondary
        class="login"
        @click="$router.push('/auth/login')"
      >
        Login
      </n-button>
      <n-button class="register" @click="$router.push('/auth/register')">
        Register
      </n-button>
    </div>
    <div class="auth-column" v-if="auth.isLoggedIn">
      <img
        src="https://randomuser.me/api/portraits/med/men/33.jpg"
        alt="profile"
        width="50"
        height="50"
        class="img"
      />

      <div class="name">
        {{ auth.user.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore();
</script>

<style lang="scss" scoped>
.container {
  border-radius: 20px;
  background-color: #dbe1e3;
  border: 2px solid #000;
  height: 60px;
  margin: 0 auto;
  margin-top: 10px;
  width: calc(100vw - 100px);
  font-size: 20px;
  box-shadow: 0px 5px 20px 1px #d6d4d4;
  display: flex;
  justify-content: space-between;
  .logo {
    height: 60px;
    display: flex;
    margin-top: 5px;
    justify-content: center;
    margin-left: 50px;
  }
  .wrap-middle-column {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .middle-column {
      display: flex;
      justify-content: space-around;
      width: 350px;
      .link {
        text-decoration: none;
        color: #000;
        transition: color 0.2s ease-out;
        &:hover {
          color: $link-hover;
        }

        &.router-link-active {
          color: $link-hover;
        }
      }
    }
  }
  .auth-column {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    .login {
      background: $btn-bg;
      color: $btn-text;
      margin-right: 10px;
    }
    .register {
      color: #2c2c2c;
      margin-right: 10px;
      border: 1px solid $btn-bg;
    }
    .img {
      font-size: 16px;
      border-radius: 25px;
    }
    .name {
      margin: 0 20px 0 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
