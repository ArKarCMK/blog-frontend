<template>
  <div class="container">
    <BlogForm :mode="modeAdd" @handleDataSave="handleSave" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth"
})
const router = useRouter();
const modeAdd = "Add";
const blogStore = useBlogStore();
const handleSave = async (form) => {
  const formData = new FormData()
  formData.append("user_id", form.user_id);
  formData.append("title", form.title);
  formData.append("body", form.body);
  formData.append("category_id", form.category_id);
  formData.append("image", form.image);
  
  const res = await blogStore.addBlog(formData);
  if (res.data.value.message) {
    router.push({
      path: `/blogs/${res.data.value.blog_id}`,
    });
  }
};
</script>
