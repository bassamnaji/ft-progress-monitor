export async function useFetchMe (code: string) : Promise<any> {
  const { data, error } = await useFetch('http://api:8000/api/users/all', {
    headers: {
      'Authorization': `Bearer ${code}`
    }
  })
  console.log(`data: ${data.value}`)
  return { data, error }
}