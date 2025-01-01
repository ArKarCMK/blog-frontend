import { defineStore } from "pinia";
import { ref } from "vue";
// import { useApiFetch } from "../composables/useApiFetch";

interface User {
  id?: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface Credentials {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  const fetchUser = async () => {
    const { data, error } = await useApiFetch("/api/user", {
      method: "GET",
    });
    // console.log(data.value);
    user.value = data.value;
  };

  const login = async (credentials: Credentials) => {
    await useApiFetch("/sanctum/csrf-cookie", {
      method: "GET",
    });
    await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  };

  const register = async (credentials: Credentials) => {
    await useApiFetch("/sanctum/csrf-cookie", {
      method: "GET",
    });
    const response = await useApiFetch("/register", {
      method: "POST",
      body: credentials,
    });

    return response;
  };

  const logout = async () => {
    try {
      await useApiFetch("/logout", {
        method: "POST",
      });
      user.value = null;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { user, isLoggedIn, fetchUser, login, register, logout };
});
