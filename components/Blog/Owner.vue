<template>
  <div class="container">
    <div class="writer">
      <img
        src="https://is.mediadelivery.fi/img/468/21543edab1b2496e9f0c0f612b4076c3.jpg"
        width="50"
        height="50"
        alt="profile"
        class="img"
      />
      <h3 v-if="blog.user" class="name">{{ blog.user.name }}</h3>
    </div>
    <div>
      <span v-if="blog.category" class="category">
        {{ blog.category.name }}
      </span>
    </div>
    <div class="created-at">
      <div class="title">Published on</div>
      <div v-if="blog.created_at" class="date">
        {{ formatTime }}
      </div>
    </div>
    <div class="social">
      <div class="caption">Share this post</div>
      <div class="platform">
        <n-image-group>
          <n-space>
            <img src="../../assets/YouTube.jpg" width="36" height="36" />
            <img
              src="../../assets/Facebook.jpg"
              width="36"
              height="36"
              alt=""
            />
            <img src="../../assets/Twitter.jpg" width="36" height="36" />
          </n-space>
        </n-image-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from "date-fns";

const props = defineProps({
  blog: {
    type: Object,
  },
});
if (props.blog) {
  console.log("Props value from the owner component", props.blog);
}
const formatTimeAgo = (dateString) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};

const formatTime = computed(() => {
  return formatDistanceToNow(new Date(props.blog.created_at), {
    addSuffix: true,
  });
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  width: 300px;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  .writer {
    display: flex;
    .img {
      border-radius: 25px;
      margin: 5px 10px 20px 5px;
    }
  }
  .category {
    border: 1px solid rgb(41, 37, 36);
    border-radius: 25px;
    padding: 5px 10px;
  }
  .created-at {
    margin-top: 20px;
    .title {
      font-weight: bold;
    }
  }
  .social {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    .caption {
      text-align: center;
      padding: 20px;
    }
    .platform {
      height: 100%;
      flex-direction: column;
    }
  }
}
</style>
