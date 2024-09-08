export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn && to.path !== "/auth/login") {
    return navigateTo("/auth/login", { replace: true });
  }
});
