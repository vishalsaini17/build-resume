import { Box } from "@mui/material"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import classes from "./portfolioBasic.module.scss"
type props = {}

const PortfolioBasic: React.FC<props> = () => {
  return (
    <Box className={classes.portfolioWrapper}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae quibusdam unde vitae necessitatibus sapiente debitis accusantium. Tempora earum sunt facere? Aut harum molestiae omnis consequatur, nisi quo hic aspernatur.
      <AboutMe />

      <ContactMe />
    </Box>
  )
}
export default PortfolioBasic