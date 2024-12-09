<template>
  <div class="container">
    <div class="wrap-bar">
      <div class="title">
        <n-button @click="$router.back()" quaternary circle type="info">
          <template #icon>
            <n-icon size="30" color="#000">
              <CaretBackOutline />
            </n-icon>
          </template>
        </n-button>
      </div>

      <div class="user" v-if="auth.isLoggedIn">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
          alt="profile"
          width="50"
          height="50"
        />
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
      <div>
        <BlogOwner :blog="blog" />
      </div>
      <div>
        <BlogContent :blog="blog" />
      </div>
      <div>
        <BlogComment :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CaretBackOutline } from "@vicons/ionicons5";
import useFetchBlog from "@/composables/useFetchBlog";

const route = useRoute();
const { blog, fetchBlog } = useFetchBlog(route.params.blog);
const auth = useAuthStore();
console.log("Auth Store Data: ", auth.user);

onMounted(async () => {
  await fetchBlog();
});
</script>

<style lang="scss" scoped>
.container {
  .wrap-bar {
    display: flex;
    justify-content: space-between;
    // background: teal;
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
  .blog {
    display: flex;
  }
}
@media screen and (max-width: 1300px) {
  .blog {
    flex-direction: column;
  }
}
</style>
