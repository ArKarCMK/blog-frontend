<template>
  <div class="container">
    <n-card title="Popular Blogs" size="medium">
      <div class="blog-container">
        <n-card size="medium">
          <div class="blogs">
            <div class="img">
              <n-carousel>
                <img
                  heigh="150"
                  width="150"
                  class="blog-img"
                  src="~/assets/image.png"
                />
              </n-carousel>
            </div>
            <div class="body">
              <n-h2>{{ fixedBlog.title }}</n-h2>
              <n-p>{{ fixedBlog.fixedBody }}</n-p>
            </div>
            <div class="btn">
              <n-button @click="$router.push(`/blogs/${fixedBlog.id}`)">
                <n-icon size="30" color="#000">
                  <CaretForwardOutline />
                </n-icon>
              </n-button>
            </div>
          </div>
        </n-card>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import axios from "axios";
import { CaretForwardOutline } from "@vicons/ionicons5";

const config = useRuntimeConfig();
const blogStore = useBlogStore();

const blog = ref({});

onMounted(async () => {
  await blogStore.fetchPopularBlog();
});

const fixedBlog = computed(() => {
  const blogBody = blogStore.popularBlog.body || "";
  const cleanBlog =  blogBody.replace(/<[^>]+>/g, "").trim()
  return {
    ...blogStore.popularBlog,
    fixedBody:
      cleanBlog.length > 300 ? cleanBlog.substring(0, 300) + " ...." : cleanBlog,
  };
});

</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 100px);
  margin: 0 auto;
  .blog-container {
    .blogs {
      display: flex;
      justify-content: space-around;
      .img {
        width: 150px;
        height: 150px;
      }
      .body {
        width: 80%;
        padding: 0 40px;
      }
      .btn {
        height: 150px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
