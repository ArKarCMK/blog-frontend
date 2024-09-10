<template>
  <div class="container">
    <div class="cover-img">
      <HomeCoverImg />
    </div>
    <div class="popular-blogs">
      <HomePopular-Blogs />
    </div>
    <div class="blogs">
      <HomeBlogs :limit="6" />
    </div>
    <div class="show-all">
      <n-button @click="$router.push('/blogs')" class="btn" size="large">
        See All Blogs ....
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
definePageMeta({
  layout: "custom",
  middleware: "guest",
});
</script>

<style lang="scss" scoped>
.container {
  .cover-img {
    margin-top: 10px;
  }
  .blogs {
    margin-top: 10px;
  }
  .show-all {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .btn {
      border: 1px solid $btn-bg;
      &:hover {
        border: none;
      }
      &:focus {
        border: none;
      }
    }
  }
}
</style>
