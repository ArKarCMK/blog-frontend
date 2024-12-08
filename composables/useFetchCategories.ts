import axios from "axios";

export default function useFetchCategories() {
  let categories = ref([]);
  const config = useRuntimeConfig();

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${config.public.baseURL}/categories/all`);

      categories.value = res.data;
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  };
  return { categories, fetchCategories };
}
