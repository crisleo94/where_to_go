import { Grid } from "@material-ui/core"
import List from "../components/List"
import Map from "../components/Map"

export default function Home() {
  return (
    <>
      <Grid item xs={12} md={4}>
        <List />
      </Grid>
      <Grid item xs={12} md={4}>
        <Map />
      </Grid>
    </>
  )
}
