<template>
  <div class="container">
    <SuccessMessage :message="successMessage" />
    <div class="wrap-bar">
      <div class="title">
        <n-button @click="$router.push('/blogs')" quaternary circle type="info">
          <template #icon>
            <n-icon size="30" color="#000">
              <CaretBackOutline />
            </n-icon>
          </template>
        </n-button>
      </div>

      <div class="user" v-if="auth.isLoggedIn">
        <div class="image">
          <img
            :src="auth.user.profile_picture"
            alt="profile"
            width="50"
            height="50"
            style="border-radius: 50px; margin-right: 10px"
          />
        </div>

        <div>{{ auth.user.name }}</div>
      </div>
      <div class="user" v-if="!auth.isLoggedIn">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
          alt="profile"
          width="50"
          height="50"
        />
        <div>"Guest User"</div>
      </div>
    </div>
    <div class="blog">
      <template v-if="deviceWidth >= 1300">
        <n-grid cols="10">
          <n-grid-item span="1.5">
            <BlogOwner :blog="blog" />
          </n-grid-item>
          <n-grid-item span="5.5" class="content" >
            <BlogContent :blog="blog" />
          </n-grid-item>
          <n-grid-item span="3">
            <BlogComment :blog="blog" />
          </n-grid-item>
        </n-grid>
      </template>

      <template v-else>
        <n-grid cols="10">
          <n-grid-item span="3">
            <BlogOwner :blog="blog" />
          </n-grid-item>
          <n-grid-item span="7" class="sm-content">
            <BlogContent :blog="blog" />
          </n-grid-item>
        </n-grid>
        <div class="sm-comment">
          <BlogComment :blog="blog" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { CaretBackOutline } from "@vicons/ionicons5";
import useFetchBlog from "@/composables/useFetchBlog";

const route = useRoute();
const { blog, fetchBlog } = useFetchBlog(route.params.blog);
const auth = useAuthStore();
const successMessage = ref(route.query.successMessage || "");
const deviceWidth = ref(window.innerWidth);

function updateDeviceWidth() {

  deviceWidth.value = window.innerWidth;

  console.log("Device Width: ", window.innerWidth)
}

onMounted(async () => {
  await fetchBlog();
  window.addEventListener("resize", updateDeviceWidth);
});

;

console.log(route);
</script>

<style lang="scss" scoped>
.container {
  .wrap-bar {
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 40px;
    .title {
      display: flex;
      align-items: center;
    }
    .user {
      display: flex;
      align-items: center;
    }
  }
  .blog{
    .content {
      margin: 0 auto;
    }
    .sm-content {
      margin: 0 auto;
    }
    .sm-comment {
      display: flex; 
      justify-content: 
      flex-end; width: 100vw;
    }
  }

}

</style>
