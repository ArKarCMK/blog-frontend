<template>
  <div class="container">
    <div class="writer">
      <div v-if="blog?.user?.profile_picture">
        <img
          :src="blog.user.profile_picture"
          width="50"
          height="50"
          alt="profile"
          class="img"
        />
      </div>
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
    <div v-if="blog.user?.id === auth.user?.id">
        <div class="edit-and-del">
          <n-button
            quaternary
            circle
            type="success"
            size="large"
            @click="$router.push(`/blogs/${blog.id}/edit`)"
          >
            <template #icon>
              <n-icon><EditFilled /></n-icon>
            </template>
          </n-button>
          <n-button
            quaternary
            circle
            type="error"
            size="large"
            @click="handleDelete(blog.id)"
          >
            <template #icon>
              <n-icon><DeleteForeverRound /></n-icon>
            </template>
          </n-button>
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
import { EditFilled, DeleteForeverRound } from "@vicons/material";
import { Router } from "@vicons/tabler";
const auth = useAuthStore()
const blogStore = useBlogStore()
const router = useRouter()
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

const handleDelete = async (blogId) => {
  const res = await blogStore.deleteBlog(blogId);

  if (!res.error.value) {
    router.back()
    
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  width: 300px;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
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
