import { defineStore } from "pinia";
import { ref } from "vue";
// import { useApiFetch } from "../composables/useApiFetch";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isLoggedIn = computed(() => !!user.value);

  const fetchUser = async () => {
    const { data, error } = await useApiFetch("/api/user");
    // console.log(data.value);
    user.value = data.value;
  };

  const login = async (credentials) => {
    await useApiFetch("/sanctum/csrf-cookie");
    await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  };

  // const register = async (credentials) => {
  //   await useApiFetch("/sanctum/csrf-cookie");
  //   await useApiFetch("/register", {
  //     method: "POST",
  //     body: credentials,
  //   });

  //   await fetchUser();

  //   return register;
  // };
  return { user, isLoggedIn, fetchUser, login };
});
