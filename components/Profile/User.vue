<template>
  <div class="container" v-if="auth.isLoggedIn">
    <n-card>
      <div class="card-container">
        <div>
          <div class="user-image">
            <img
              :src="auth.user.profile_picture"
              alt="profile"
              width="150"
              height="150"
              class="img"
            />
            <div class="user">{{ auth.user.name }}</div>
          </div>
          <div class="mail-wrapper">
            <MailOutline class="icon" />
            <div class="mail">
              {{ auth.user.email }}
            </div>
          </div>
        </div>
        <div class="logout">
          <n-button
            tertiary
            style="background: #2c2c2c; color: #fff"
            icon-placement="right"
            @click="handleLogout"
          >
            <template #icon>
              <n-icon>
                <LogOutOutline />
              </n-icon>
            </template>
            Logout
          </n-button>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { MailOutline, LogOutOutline } from "@vicons/ionicons5";
import { useRouter } from "vue-router";
const router = useRouter();

const auth = useAuthStore();
const handleLogout = async () => {
  try {
    const res = await auth.logout();

    console.log("Navigating to login page...", res);
    await router.push("/auth/login");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-right: 10px;
  .n-card {
    max-width: 360px;
    height: calc(100vh - 200px);

    .card-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      height: calc(100vh - 200px);
      .user-image {
        display: flex;
        align-items: center;
        .img {
          border-radius: 5px;
        }
        .user {
          font-size: 18px;
          font-weight: bold;
          padding: 20px;
        }
      }
      .mail-wrapper {
        display: flex;
        padding-top: 20px;
        .icon {
          width: 25px;
        }
        .mail {
          font-size: 16px;
          font-weight: bold;
          padding-left: 10px;
        }
      }
      .logout {
        margin: 60px auto;
        background-color: red;
      }
    }
  }
}
</style>
