import { Container, Grid } from "@mui/material"
import styles from "./navbar.module.scss"

type props = {}

const Navbar: React.FC<props> = () => {
  return (
    <div className={styles.mainNavbar}>
      <Container>
        <Grid container justifyContent={`space-between`}>
          <Grid item xs={'auto'}>
            V.S.
          </Grid>
          <Grid item xs={'auto'}>
            About
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Navbar