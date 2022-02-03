import { usePlace } from "../hooks/usePlace"
import { useEffect } from "react"

export default function PlaceDetails({ place }) {
  const {place: placeLocation} = usePlace()
  useEffect(() => {
    console.log(placeLocation)
  }, [])

  return <div>{place.name} - <b>{place.location}</b></div>
}
