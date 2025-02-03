<template>
  <div class="container">
    <BlogForm :mode="modeAdd" @handleDataSave="handleSave" />
  </div>
</template>

<script setup>
const router = useRouter();
const modeAdd = "Add";
const blogStore = useBlogStore();
const handleSave = async (form) => {
  const res = await blogStore.addBlog(form);
  if (res.data.value.message) {
    router.push({
      path: `/blogs/${res.data.value.blog_id}`,
      query: { successMessage: res.data.value.message },
    });
  }
};
</script>
