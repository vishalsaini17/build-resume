import { Container, Grid, Typography } from "@mui/material"
import styles from "./HeroBanner.module.scss"

type props = {}

const HeroBanner: React.FC<props> = () => {
  return (
    <header className={styles.mainBanner}>
      <Container>
        <Grid container justifyContent={`space-between`}>
          <Grid item sm={5}>
            <Typography component={`h1`} variant={`h2`} fontWeight="900">Vishal <br />Saini<span>.</span></Typography>
            <Typography component={`h2`} variant={`h3`} fontWeight="900">Frontend Developer</Typography>
          </Grid>
          <Grid item sm={7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae enim ad accusantium numquam illum. Unde tempore ratione deserunt perferendis et ea est, neque veritatis voluptate aliquam quis officiis maxime.
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
export default HeroBanner