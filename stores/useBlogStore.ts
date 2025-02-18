import axios from "axios";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    config: useRuntimeConfig(),
    blogsWithPage: {} as any,
    blogs: [] as Blog[],
    userBlogs: [] as Blog[],
    blog: {} as Blog,
    popularBlog: {} as Blog,
  }),

  actions: {
    async fetchBlogs(page: number, search: string, category: number) {
      try {
        const params: any = {page};
        if(search && search.trim() !== ""){
          params.search = search;
        }
        if(category && category != null) {
          params.category = category
        }
        
        const  response = await axios.get<any>(
          `${this.config.public.baseURL}/blogs/all`, {params}
        );
        this.blogsWithPage = [];
        this.blogsWithPage = response.data;
        this.blogs = response.data.data;
      } catch (error) {
        console.log("Error in fetching blogs", error);
      }
    },

    async fetchBlog(blogId: number) {
      try {
        const res = await axios.get(
          `${this.config.public.baseURL}/blogs/${blogId}`,
        );
        this.blog = res.data;
      } catch (error) {
        console.log("Error in fetching blog: ", error);
      }
    },

    async fetchPopularBlog() {
      try {
        const res = await axios.get(
          `${this.config.public.baseURL}/blogs/popular`,
        );
        this.popularBlog = res.data;
      } catch (error) {
        console.log("Error in fetching popular blog: ", error);
      }
    },

    async fetchBlogsByUser(userId: number) {
      const res = await useApiFetch<ApiResponse<Blog[]>>(
        `/api/blogs/user/${userId}`,
        {
          method: "GET",
        },
      );

      if (res.error?.value) {
        console.error("Error in fetching user blogs:", res.error.value);
        return;
      }

      if (res.data.value) {
        this.userBlogs = res.data.value.data;
      } else {
        console.error("No user blogs found");
      }
    },

    async addBlog(blog: any) {
      const res = await useApiFetch(`/api/blogs/store`, {
        method: "POST",
        body: blog,
      });

      if (res.error?.value) {
        console.error("Error in adding blog:", res.error.value);
        return;
      }

      return res;
    },

    async editBlog(blogId: number, blog: Blog) {
      const res = await useApiFetch(`/api/blogs/${blogId}/edit`, {
        method: "PUT",
        body: blog,
      });

      if (res.error?.value) {
        console.error("Error in editing blog:", res.error.value);
        return;
      }

      return res;
    },

    async deleteBlog(blogId: number) {
      const res = await useApiFetch(`/api/blogs/${blogId}/delete`, {
        method: "DELETE",
      });

      return res;
    },

    async toggleSubscribe(blogId: number) {
      const res = await useApiFetch(`/api/blogs/${blogId}/subscription`, {
        method: "POST",
      });
    
      return res;
    }
  },
});
