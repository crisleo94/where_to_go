import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { Autocomplete } from '@material-ui/lab'
import styles from '../styles/header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.container}>
        <h5 className={styles.title}>
          <Link href="/">
            <a>Where to Go!</a>
          </Link>
        </h5>
        <div className={styles.searchContainer}>
          <h6 className={styles.subtitle}>
            Explore new places
          </h6>
          {/* <Autocomplete> */}
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <input
                type='text'
                placeholder='Search...'
                className={styles.input}
              />
            </div>
          {/* </Autocomplete> */}
        </div>
    </div>
  )
}
