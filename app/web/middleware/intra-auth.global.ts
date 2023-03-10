export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticatedOnIntra = useCheckSession()
  
  if (!isAuthenticatedOnIntra && to.path !== '/login' && from.path !== '/login') {
    return navigateTo('/login')
  }
  else if (to.path === '/')
    return navigateTo('/profile')
})