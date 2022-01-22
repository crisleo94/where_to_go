import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import SearchIcon from '@material-ui/icons/Search'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar className={styles.toolbar}>
        <Typography variant='h5' className={styles.title}>
          Where to Go!
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={styles.title}>
            Explore new places
          </Typography>
          <Autocomplete>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' className={{ root: styles.inputRoot, input: styles.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
