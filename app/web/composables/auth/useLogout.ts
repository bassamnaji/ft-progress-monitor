export const useLogout = () => {
  useCookie('access_token').value = null
}
