import axios from "axios";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    config: useRuntimeConfig(),
    blogs: [],
    userBlogs: [],
  }),

  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get(
          `${this.config.public.baseURL}/blogs/all`
        );

        this.blogs = response.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },

    async fetchBlogsByUser(userId: number) {
      try {
        const res = await axios.get(
          `${this.config.public.baseURL}/blogs/user/${userId}`
        );
        this.userBlogs = res.data.data;
        console.log("User blogs", this.userBlogs);
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
