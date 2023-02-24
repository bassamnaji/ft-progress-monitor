export default defineNuxtRouteMiddleware((to, from) => {

  if (from.query.code) {
    try {
      const access_token: string = useAuth(from.query.code.toString())

      if (access_token) {
        const tok = useCookie('access_token')
        tok.value = access_token
        return navigateTo('/profile')
      }
      else {
        throw Error('Unauthorized')
      }
    } catch (error) {
      console.log(error)
    }
  }
})
