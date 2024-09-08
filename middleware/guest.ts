export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  if (auth.isLoggedIn && to.path !== "/home") {
    return navigateTo("/home", { replace: true });
  }
});
