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
    const formData = new FormData();
  formData.append("user_id", form.user_id);
  formData.append("title", form.title);
  formData.append("body", form.body);
  formData.append("category_id", form.category_id);
  formData.append("image", form.image);
  formData.append('_method', 'PUT');
  for (let pair of formData.entries()) {
  console.log(pair[0] + ': ' + pair[1]);
}

  console.log("Main Edit ", formData)
  console.log("small form", form);
  const res = await blogStore.editBlog(blogId, formData);
  console.log("Return Value:", res);
};
</script>
