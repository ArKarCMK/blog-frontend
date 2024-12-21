import axios from "axios";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async fetchBlogs() {
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(`${config.public.baseURL}/blogs/all`);

        this.blogs = response.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },
    async fetchBlogsByCategory(categoryId: number) {
      try {
        const config = useRuntimeConfig();
        const res = await axios.get(
          `${config.public.baseURL}/blogs/category/${categoryId}`
        );
        this.blogs.length = 0;
        this.blogs = res.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },
  },
});
