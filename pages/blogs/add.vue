<template>
  <div class="container">
    <h2>Add Blog</h2>
    <div class="title">
      <div class="title-label">Blog Title</div>
      <n-input v-model:value="title" type="text" placeholder="Basic Input" />
    </div>
    <div class="content">
      <div class="content-label">Content</div>
      <div class="content-body">
        <Tiptap />
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref("");
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 500px;
    .title-label {
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .content {
    width: 500px;
    .content-label {
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
    }
    .content-body {
    }
  }
}
</style>
