import { defineStore } from "pinia";

export const useCommentStore = defineStore("commentStore", {
  state: () => ({
    config: useRuntimeConfig(),
    comments: [] as Comment[],
  }),
  actions: {
    async fetchComments(blogId: number) {
      try {
        const res = await useApiFetch<ApiResponse<Comment[]>>(
          `/api/comments/${blogId}`,
          {
            method: "GET",
          }
        );
        if (res.data.value) {
          this.comments = res.data.value.data;
        }
      } catch (error) {
        console.log("Error in fetching comments: ", error);
      }
    },
    async addComment(comment: Comment) {
      try {
        const res = await useApiFetch(`/api/comments/store`, {
          method: "POST",
          body: comment,
        });

        return res;
      } catch (error) {
        console.log("Error in comment store: ", error);
      }
    },
  },
});
