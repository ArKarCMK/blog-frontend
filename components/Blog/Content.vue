<template>
  <div class="container">
    <div class="img">
      <img src="~/assets/image.png" width="600px" height="400" alt="" />
    </div>
    <div class="content">
      <h2>{{ blog.title }}</h2>
      <h1>{{ blog.user_id }}</h1>
      <p class="body">{{ blog.body }}</p>
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
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100vh;
  margin-left: 300px;

  //   background: teal;
  .content {
    .body {
      font-size: 16px;
    }
  }
}
</style>
