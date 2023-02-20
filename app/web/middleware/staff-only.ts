export default defineNuxtRouteMiddleware((to, from) => {
  const isStaff = useStaff()
  if (isStaff === false) {
    return navigateTo('/login')
  }
})