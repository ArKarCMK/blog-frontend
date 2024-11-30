import axios from "axios";
import { ref } from "vue";

export default function useFetchComments() {
  let comments = ref([]);
  const config = useRuntimeConfig();

  const fetchComments = async (id: Number) => {
    try {
      const response = await axios.get(
        `${config.public.baseURL}/comments/${id}`
      );

      comments.value = response.data;
    } catch (error) {
      console.log("Error in fetching blogs", error);
    }
  };

  return { comments, fetchComments };
}
