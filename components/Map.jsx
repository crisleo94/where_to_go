import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import styles from '../styles/map.module.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3Jpc2xlbzk0IiwiYSI6ImNrMm9pcDU1ZjBic3kzbHM3bmdzaXZhNWwifQ.bEIQoEJFg30p0vJ26O7eog'

export default function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(33.4)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if(map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom
    })
  });

  useEffect(() => {
    if(!map.current) return
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  });
  

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  )
}
