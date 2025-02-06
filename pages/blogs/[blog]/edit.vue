<template>
  <div class="container">
    <BlogForm
      :mode="editMode"
      :originalBlog="blog"
      @handleDataSave="handleSave"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const editMode = "Edit";
const blogStore = useBlogStore();
const blog = ref({});
let blogId = route.params.blog;

onMounted(async () => {
  await blogStore.fetchBlog(blogId);

  blog.value = blogStore.blog;
});
const handleSave = async (form) => {
  const res = await blogStore.editBlog(blogId, form);
  console.log("Return Value:", res);
};
</script>
