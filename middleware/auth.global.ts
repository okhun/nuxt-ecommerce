export default defineNuxtRouteMiddleware((to, from) => {
  const publicPages = ["/auth/login", "/auth/register"];
  const isGuest = publicPages.includes(to.path);

  if (getItem("Authorization") && isGuest) {
    return navigateTo("/");
  }
});
