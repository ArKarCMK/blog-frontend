import axios from "axios";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    config: useRuntimeConfig(),
    blogsWithPage: {},
    blogs: [],
    userBlogs: [],
  }),

  actions: {
    async fetchBlogs(page: number) {
      try {
        const response = await axios.get(
          `${this.config.public.baseURL}/blogs/all?page=${page}`
        );
        this.blogsWithPage = response.data;
        this.blogs = response.data.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },

    async fetchBlogsByUser(userId: number) {
      try {
        const res = await useApiFetch(`/api/blogs/user/${userId}`, {
          method: "GET",
        });
        if (res.data.value) {
          this.userBlogs = res.data.value.data;
        } else {
          console.error("No user blogs found");
        }
      } catch (error) {
        console.log("Error in fetcing user blogs", error);
      }
    },

    async fetchBlogsByCategory(categoryId: number) {
      try {
        const res = await axios.get(
          `${this.config.public.baseURL}/blogs/category/${categoryId}`
        );
        this.blogs.length = 0;
        this.blogs = res.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },
  },
});
