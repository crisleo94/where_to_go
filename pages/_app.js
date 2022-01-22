import '../styles/globals.css'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Component {...pageProps} />
      </Grid>
    </>
  )
}

export default MyApp
