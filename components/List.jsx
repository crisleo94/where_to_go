import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useState } from 'react'
import styles from '../styles/list.module.css'

export default function List() {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

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
          <InputLabel id=''>Type</InputLabel>
          <Select
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
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'above3'}>All above 3.0</MenuItem>
            <MenuItem value={'above4'}>All above 4.0</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}
