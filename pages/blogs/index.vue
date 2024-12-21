<template>
  <div class="container">
    <div class="search-container">
      <div class="search">
        <n-input
          class="input"
          type="text"
          size="large"
          placeholder="Search Blog"
        />
        <n-button tertiary size="large" class="btn">search</n-button>
      </div>
      <div class="filter">
        <n-select
          v-model:value="selectedCategory"
          size="large"
          :options="formatedCategories"
          placeholder="Filter by category"
          @update:value="handleCategorySelect"
        />
      </div>
    </div>
    <HomeBlogs />
    <div class="pagination">
      <n-pagination v-model:page="page" :page-count="100" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const page = ref(1);
const totalPages = ref(100);
const selectedCategory = ref(null);

const { categories, fetchCategories } = useFetchCategories();
const blogStore = useBlogStore();

onMounted(async () => {
  await fetchCategories();
});
const formatedCategories = computed(() => {
  return categories.value.map((category) => ({
    ...category,
    label: category.name,
    value: category.id,
  }));
});

const handleCategorySelect = (value) => {
  blogStore.fetchBlogsByCategory(value);
};
</script>

<style lang="scss" scoped>
.container {
  .search-container {
    display: flex;
    justify-content: space-between;
    .search {
      // width: 300px;
      .input {
        width: 300px;
        margin: 30px 5px 20px 50px;
      }
      .btn {
        background-color: $btn-bg;
        color: $btn-text;
      }
    }
    .filter {
      width: 300px;
      margin: 30px 50px 20px 0px;
    }
  }
  .pagination {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
