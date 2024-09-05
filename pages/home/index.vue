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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
definePageMeta({
  layout: "custom",
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
}
</style>
