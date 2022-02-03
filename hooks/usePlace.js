import useSWR from 'swr'
import { fetcher } from '../utils/utils.js'
import { useLocation } from '../hooks/useLocation.js'

export function usePlace() {
  const { latitude, longitude, errorLocation } = useLocation()
  const { data, error } = useSWR([`/restaurants/list-in-boundary`, latitude, longitude], fetcher)
  return {
    place: data,
    isLoading: !error && !data,
    isError: error
  }
}