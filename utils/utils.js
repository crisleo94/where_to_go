
const URL = process.env.NEXT_PUBLIC_API_URL
const rapidApiKey = process.env.NEXT_PUBLIC_API_KEY
const rapidApiHost = process.env.NEXT_PUBLIC_API_HOST

export const fetcher = (...args) => {
  const [key, latitude, longitude ] = args
  console.log(key)
  console.log(latitude)
  console.log(longitude)
  fetch(`${URL}${key}`, {
    headers: {
      'x-rapidapi-host': rapidApiHost,
      'x-rapidapi-key': rapidApiKey,
    },
  }).then((res) => res.json())
}
