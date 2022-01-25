export const fetcher = (...args) => {
  fetch(...args, {
    headers: {
      'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
    },
  }).then((res) => res.json())
}
