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
              <n-h2>{{ blog.title }}</n-h2>
              <n-p>{{ fixedBlog.fixedBody }}</n-p>
            </div>
            <div class="btn">
              <n-button>
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

const blog = ref({});

onMounted(async () => {
  await fetchBlog();
});

const fixedBlog = computed(() => {
  const blogBody = blog.value.body || "";
  return {
    ...blog.value,
    fixedBody:
      blogBody.length > 300 ? blogBody.substring(0, 300) + " ...." : blogBody,
  };
});

const fetchBlog = async () => {
  try {
    const response = await axios.get(`${config.public.baseURL}/blogs/popular`);
    blog.value = response.data;
  } catch (error) {
    console.log("Error in the popular blogs", error);
  }
};
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
