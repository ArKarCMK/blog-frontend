<template>
  <div class="wrap-container">
    <div class="container">
      <h4>Comments</h4>
      <div class="comment-box">
        <n-card
          class="card"
          v-for="comment in commentStore.comments"
          :key="comment.id"
        >
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

      <div class="comment-input-wrapper">
        <div class="comment-profile">
          <img
            :src="auth.user.profile_picture"
            width="40"
            height="40"
            alt="profile"
            class="img"
          />
        </div>
        <n-input
          class="comment-input"
          v-model:value="commentInput"
          type="textarea"
          placeholder="Type your comment..."
          @keyup.enter="
            (event) => {
              if (!event.shiftKey) handleComment();
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from "date-fns";

const props = defineProps({
  blog: Object,
});

const commentInput = ref("");
const auth = useAuthStore();
const createdComment = ref("");
const blogId = ref(null);
const commentStore = useCommentStore();
const commentForm = ref({
  body: "",
  blog_id: null,
});

watch(
  () => props.blog,
  (newBlog) => {
    if (newBlog) {
      commentStore.fetchComments(newBlog.id);
      blogId.value = newBlog.id;
    }
  }
);

watch(
  () => createdComment.value,
  (newComment) => {
    commentStore.fetchComments(blogId.value);
  }
);

const formatTimeAgo = (dateString) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};

const handleComment = async () => {
  commentForm.value.blog_id = props.blog.id;
  commentForm.value.body = commentInput.value;

  const res = await commentStore.addComment(commentForm.value);
  if (res.data.value) {
    createdComment.value = res.data.value.data.body;
  }

  commentInput.value = "";
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
  margin-right: 20px;
  .comment-box {
    height: 500px;
    overflow: auto;
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
  .comment-input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: teal; */
    .comment-profile {
      margin-right: 10px;
      display: flex;
      align-items: center;
      .img {
        border-radius: 50%;
      }
    }
  }
}
@media screen and (max-width: 1350px) {
  .wrap-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .container {
      position: static;
      margin-bottom: 40px;
    }
  }
}
</style>
