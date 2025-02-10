<template>
  <div class="container">
    <div class="img">
      <img src="~/assets/image.png" width="600px" height="400" alt="" />
    </div>
    <div class="content">
      <h2>{{ blog.title }}</h2>
      <div v-html="blog.body" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    title: String,
    body: String,
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
}
</style>
