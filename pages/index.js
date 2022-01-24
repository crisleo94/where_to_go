import { Grid } from "@material-ui/core"
import List from "../components/List"
import Map from "../components/Map"
import styles from "../styles/home.module.css"
import Header from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <title>WTG - Travel</title>
      </Header>
      <div className={styles.list}>
        <List />
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  )
}
