export default defineNuxtRouteMiddleware(async (to, from) => {

  if (from.query.code) {
    try {
      const { data , error } = await useAuth(from.query.code.toString())
      console.log(`access_token: ${data.value.access_token}`)
      if (data.value.access_token) {
        const tok = useCookie('access_token')
        tok.value = data.value.access_token
        return navigateTo('/')
      }
      else {
        throw Error('Unauthorized')
      }
    } catch (error) {
      console.log(error)
    }
  }
})



