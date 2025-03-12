<template>
  <div class="container">
    <div class="body">
      <ProfileUser />
      <ProfileBlogs />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth"
});
</script>

<style lang="scss" scoped>
.container {
  .button{
    margin: 10px 0 0 10px;
  }
  .body{
    display: flex;
    padding: 20px;
  }
  
}
</style>
