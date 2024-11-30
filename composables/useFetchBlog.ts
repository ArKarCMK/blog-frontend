import axios from "axios";
import { ref } from "vue";

export default function useFetchBlog(id: number) {
  let blog = ref({});
  const config = useRuntimeConfig();

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${config.public.baseURL}/blogs/${id}`);

      blog.value = response.data;
    } catch (error) {
      console.log("Error in fetching blogs", error);
    }
  };

  return { blog, fetchBlog };
}
