export const useCheckSession = () => {
  return useCookie('access_token').value
}