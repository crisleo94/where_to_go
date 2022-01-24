import '../styles/globals.css'
import { Grid } from '@material-ui/core'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='main-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='children-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
