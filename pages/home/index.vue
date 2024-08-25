<template>
  <div class="container">
    <div class="cover-img">
      <HomeCoverImg />
    </div>
    <div class="popular-blogs">
      <HomePopular-Blogs />
    </div>
    <div class="blogs">
      <HomeBlogs />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style lang="scss" scoped>
.container {
  background: #f1f1f1;
  .cover-img {
    margin-top: 10px;
  }
  .popular-blogs {
  }
  .blogs {
    margin-top: 10px;
  }
}
</style>
