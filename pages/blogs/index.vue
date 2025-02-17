<template>
  <div class="container">
    <div class="search-container">
      <div class="search">
        <n-input
          class="input"
          type="text"
          size="large"
          placeholder="Search Blog"
          v-model:value="search"
        >
          <template v-if="isShowClearIcon"  #suffix>
            <n-icon @click="handleClear"  class="close" :component="Close" />
          </template>
        </n-input>
        <n-button @click="handleSearch" tertiary size="large" class="btn">search</n-button>
      </div>
      <div class="wrap-add-btn">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-button
              @click="handleAddBlog"
              class="add-btn"
              strong
              primary
              circle
              size="large"
            >
              <template #icon>
                <n-icon><AddOutline /></n-icon>
              </template>
            </n-button>
          </template>
          Add Blog
        </n-tooltip>
      </div>
      <div class="filter">
        <n-select
          v-model:value="selectedCategory"
          size="large"
          :options="formatedCategories"
          placeholder="Filter by category"
          @update:value="handleCategorySelect"
          clearable

        />
      </div>
    </div>
    <HomeBlogs :page="page" />
    <div class="pagination">
      <n-pagination
        v-model:page="page"
        :page-count="pageCount"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import {
  AddOutline,
  CashOutline as CashIcon,
  Close
} from "@vicons/ionicons5";
import Blogs from "~/components/Home/Blogs.vue";

definePageMeta({
  layout: "custom",
});

const page = ref(1);

const pageCount = ref(100);
const selectedCategory = ref(null);
const blogWithPages = ref({});
const search = ref("");
const isShowClearIcon = ref(false)

const router = useRouter();
const { categories, fetchCategories } = useFetchCategories();
const blogStore = useBlogStore();

onMounted(async () => {
  await fetchCategories();
  blogWithPages.value = blogStore.blogsWithPage;
  handlePageCount();
});

const formatedCategories = computed(() => {
  return categories.value.map((category) => ({
    ...category,
    label: category.name,
    value: category.id,
  }));
});

const handlePageCount = () => {
  if (blogWithPages.value) {
    const pages = Math.ceil(
      blogWithPages.value.total / blogWithPages.value.per_page
    );
    pageCount.value = pages;
  }
};

const handleSearch = () => {
  blogStore.fetchBlogs(page.value, search.value)
  isShowClearIcon.value = true;
}

const handleClear = () => {
  search.value = ""
  blogStore.fetchBlogs(page.value)
  isShowClearIcon.value = false;
} 

const handleAddBlog = () => {
  router.push("/blogs/add");
};

const handlePageChange = () => {};

const handleCategorySelect = (value) => {
 
  if(value && value != "") {
    blogStore.fetchBlogsByCategory(value);
  } else {
    blogStore.fetchBlogs(page)
  }
};
</script>

<style lang="scss" scoped>
.container {
  .search-container {
    display: flex;
    justify-content: space-between;
    .search {
      .input {
        width: 300px;
        margin: 30px 5px 20px 50px;
        .close{
          cursor: pointer;

        }
      }
      .btn {
        background-color: $btn-bg;
        color: $btn-text;
      }
    }
    .wrap-add-btn {
      .add-btn {
        background: $link-hover;
        color: #fff;
        margin: 30px 0 20px 0;
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
