<template>
  <div class="blog-container">
    <n-card title="Blogs" size="medium">
      <n-grid cols="1 s:2 m:3" responsive="screen" x-gap="12">
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
                <n-button tertiary class="btn">Read More</n-button>
              </div>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, computed } from "vue";

const config = useRuntimeConfig();
const blogs = ref([]);

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
onMounted(async () => {
  await fetchBlogs();
});

const fixedBlogs = computed(() => {
  return blogs.value
    .map((blog) => {
      return {
        ...blog,
        limtedBody:
          blog.body.length > 100
            ? blog.body.substring(0, 100) + " ..."
            : blog.body,
      };
    })
    .slice(0, props.limit ? props.limit : blogs.value.length);
});

const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${config.public.baseURL}/blogs/all`);

    blogs.value = response.data;
  } catch (error) {
    console.log("Error in fetching blogs", error);
  }
};
</script>

<style lang="scss" scoped>
.blog-container {
  width: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .blog {
    position: relative;
    width: 400px;

    height: 400px;
    flex-direction: column;
    .image {
      display: flex;
      justify-content: center;
    }
    .body {
      padding: 0 10px;
    }
    .button {
      background: red;
      display: flex;
      justify-content: space-between;
      display: flex;
      position: absolute;
      bottom: 0;
      margin: 0 0 5px 10px;

      background: red;
      .btn {
        background: #2c2c2c;
        color: #fff;
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
