<template>
  <div class="wrapper">
    <div class="container">
      <h2>{{ mode }} Blog</h2>
      <div class="title">
        <div class="title-label">Blog Title</div>
        <n-input
          v-model:value="form.title"
          type="text"
          placeholder="Basic Input"
        />
      </div>
      <div class="category">
        <div>Blog Category</div>
        <n-select
          v-model:value="selectedCategory"
          size="large"
          :options="formatedCategories"
          placeholder="Filter by category"
          @update:value="handleCategorySelect"
        />
      </div>
      <div class="content">
        <div class="content-label">Content</div>
        <div class="content-body">
          <Tiptap
            @update:content="updateContent"
            :originalContent="form.body"
          />
        </div>
      </div>
      <div class="wrap-btn">
        <div class="group-btn">
          <n-button type="default" class="cancel-btn" @click="handleCancel"
            >Cancel</n-button
          >
          <n-button tertiary class="add-btn" @click="handleSave">Save</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ForumRound } from "@vicons/material";

// const title = ref("");
// const content = ref("");

const selectedCategory = ref(null);
const show = ref("false");
const form = ref({
  user_id: "",
  title: "",
  slug: "",
  category_id: null,
  body: "",
});
const successMessage = ref("");

const { categories, fetchCategories } = useFetchCategories();
const router = useRouter();
const auth = useAuthStore();
const blogStore = useBlogStore();

onMounted(() => {
  fetchCategories();
});

const props = defineProps({
  originalBlog: Object,
  mode: String,
});

const emits = defineEmits(["handleDataSave"]);
watch(
  () => props.originalBlog,
  (newValue) => {
    form.value.title = newValue.title;
    selectedCategory.value = newValue.category_id;
    form.value.body = newValue.body;
  },
);

const formatedCategories = computed(() => {
  return categories.value.map((category) => ({
    ...category,
    label: category.name,
    value: category.id,
  }));
});

watch(
  () => form.value.title,
  (newVal) => {
    form.value.slug = newVal.replaceAll(" ", "-").toLowerCase();
  },
);

const updateContent = (newContent) => {
  form.value.body = newContent;
};

const handleCategorySelect = (value) => {
  form.value.category_id = value;
};
const handleCancel = () => {
  router.back();
};
const handleSave = async () => {
  emits("handleDataSave", form.value);
};
</script>

<style lang="scss" scoped>
.wrapper {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 300px);
    margin: 0 auto;
    .title {
      width: 100%;
      .title-label {
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .category {
      width: 100%;
      padding: 10px;
    }
    .content {
      width: 100%;
      .content-label {
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
      }
      .content-body {
      }
    }
    .wrap-btn {
      width: 100%;
      padding: 20px 10px 0;
      display: flex;
      justify-content: flex-end;
      .group-btn {
        .cancel-btn {
          margin-right: 10px;
          border: 1px solid #666;
          &:hover {
            border: none;
          }
          &:focus {
            border: none;
          }
        }
        .add-btn {
          background: $btn-bg;
          color: $btn-text;
        }
      }
    }
  }
  /* .message-wrapper {
    position: relative;
    .success-message {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  } */
}
</style>
