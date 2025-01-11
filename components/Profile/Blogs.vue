<template>
  <div class="blog-container" v-if="auth.isLoggedIn">
    <n-card title="My Blogs" size="medium">
      <!-- <n-grid cols="1 s:3 m:3" responsive="screen" x-gap="12">
        <n-grid-item v-for="blog in fixedBlogs" :key="blog.id"> -->
      <n-grid :cols="cols" responsive="screen" x-gap="12">
        <n-grid-item v-for="blog in fixedBlogs" :key="blog.id">
          <n-card style="margin-bottom: 10px" hoverable>
            <div class="blog">
              <div class="image">
                <img
                  src="../../assets/image.png"
                  width="300"
                  height="200"
                  alt=""
                />
              </div>
              <div class="body">
                <h2>{{ blog.title }}</h2>
                <p>
                  {{ blog.limtedBody }}
                </p>
              </div>
              <div class="button">
                <n-button
                  @click="$router.push(`/blogs/${blog.id}`)"
                  tertiary
                  class="btn"
                  >Read More</n-button
                >
              </div>
            </div>
          </n-card>
          <!-- </div> -->
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";

const blogStore = useBlogStore();
const auth = useAuthStore();
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
const cols = ref(3);

const updateCols = () => {
  cols.value = window.innerWidth < 1440 ? 2 : 3;
};
onMounted(async () => {
  updateCols();

  window.addEventListener("resize", updateCols);
  await blogStore.fetchBlogsByUser(auth.user.id);
});

const fixedBlogs = computed(() => {
  return blogStore.userBlogs
    .map((blog) => {
      return {
        ...blog,
        limtedBody:
          blog.body.length > 100
            ? blog.body.substring(0, 100) + " ..."
            : blog.body,
      };
    })
    .slice(0, props.limit ? props.limit : blogStore.userBlogs.length);
});
</script>

<style lang="scss" scoped>
.blog-container {
  width: calc(100% - 320px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .blog {
    width: 330px;
    height: 400px;
    .image {
      display: flex;
      justify-content: center;
    }
    .body {
      padding: 0 4px;
    }
    .button {
      display: flex;
      justify-content: space-between;
      display: flex;
      position: absolute;
      bottom: 0;
      margin: 0 0 5px 10px;

      .btn {
        background: $btn-bg;
        color: $btn-text;
      }
    }
  }

  .side-bar {
    height: 399px;
    width: 400px;
    background: #fff;
  }
}
</style>
