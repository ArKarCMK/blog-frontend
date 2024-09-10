import axios from "axios";
import { ref } from "vue";

export default function useFetchBlogs() {
  let blogs = ref([]);
  const config = useRuntimeConfig();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${config.public.baseURL}/blogs/all`);

      blogs.value = response.data;
    } catch (error) {
      console.log("Error in fetching blogs", error);
    }
  };

  return { blogs, fetchBlogs };
}
