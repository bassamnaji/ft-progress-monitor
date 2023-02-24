export async function useAuth (code: string) : Promise<any> {
  const { data, error } = await useFetch('http://api:8000/api/auth', {
    method: 'POST',
    body: {
      code: code
    }
  })
  console.log(data.value)
  return { data, error }
}