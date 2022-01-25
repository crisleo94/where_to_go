import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useState } from 'react'
import PlaceDetails from './PlaceDetails'
import styles from '../styles/list.module.css'

export default function List() {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    {
      id: 1,
      name: 'Leenti',
      location: 'Putina',
    },
    {
      id: 2,
      name: 'Flashdog',
      location: 'Rääkkylä',
    },
    {
      id: 3,
      name: 'Skynoodle',
      location: 'Banaba',
    },
    {
      id: 4,
      name: 'Pixoboo',
      location: 'Marang',
    },
    {
      id: 5,
      name: 'Skimia',
      location: 'Kafr ad Dawwār',
    },
    {
      id: 6,
      name: 'Oodoo',
      location: 'Lahad Datu',
    },
    {
      id: 7,
      name: 'Zoombox',
      location: 'Quipot',
    },
    {
      id: 8,
      name: 'Edgeblab',
      location: 'Yuncheng',
    },
    {
      id: 9,
      name: 'Zoombox',
      location: 'Třešť',
    },
    {
      id: 10,
      name: 'Snaptags',
      location: 'Nanfeng',
    },
  ]

  const handleChangeType = (e) => {
    console.log(e.target)
    setType(e.target.value)
  }

  const handleChangeRate = (e) => {
    console.log(e.target)
    setRating(e.target.value)
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>Food & Dining around you</p>
      <div className={styles.selectContainer}>
        <FormControl fullWidth>
          <InputLabel id='type-search-label'>Type</InputLabel>
          <Select
            labelId='type-search-label'
            id='type-search'
            value={type}
            label='Type'
            onChange={handleChangeType}
          >
            <MenuItem value={'restaurants'}>Restaurants</MenuItem>
            <MenuItem value={'hotels'}>Hotels</MenuItem>
            <MenuItem value={'attractions'}>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id=''>Rating</InputLabel>
          <Select
            id='rating-search'
            value={rating}
            label='Rating'
            onChange={handleChangeRate}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>All above 3.0</MenuItem>
            <MenuItem value={4}>All above 4.0</MenuItem>
            <MenuItem value={4.5}>All above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.items}>
        {places.map((place) => (
          <div className={styles.item} key={place.id}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  )
}
