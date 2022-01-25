import useSWR from 'swr'
import { fetcher } from '../utils/utils.js'
import { useLocation } from '../hooks/useLocation.js'

const URL = process.env.NEXT_PUBLIC_API_URL

export function usePlace() {
  const { latitude, longitude, errorLocation } = useLocation()
  const { data, error } = useSWR(`${URL}/restaurants/list-in-boundary`, fetcher)
  return {
    place: data,
    isLoading: !error && !data,
    isError: error
  }
}