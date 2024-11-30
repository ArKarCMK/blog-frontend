<template>
  <div class="container">
    <h4>Comments</h4>
    <n-card class="card" v-for="comment in comments" :key="comment.id">
      <div class="first-row">
        <div class="user">
          <img
            src="https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width="50"
            height="50"
            class="profile"
          />
          <div class="name">{{ comment.user.name }}</div>
        </div>
        <div class="time">{{ formatTimeAgo(comment.created_at) }}</div>
      </div>
      <div class="second-row">
        <div>{{ comment.body }}</div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from "date-fns";

const props = defineProps({
  blog: Object,
});

const { comments, fetchComments } = useFetchComments(props.blog.id);
watch(
  () => props.blog,
  (newBlog) => {
    if (newBlog) {
      fetchComments(newBlog.id);
    }
  }
);

onMounted(async () => {
  await fetchComments();
});

const formatTimeAgo = (dateString) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};
</script>

<style lang="scss" scoped>
.container {
  width: 450px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  .card {
    margin-bottom: 5px;
    .first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .user {
        display: flex;
        align-items: center;
        .profile {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
