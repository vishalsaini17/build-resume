import { Email, LocationOn, Phone } from "@mui/icons-material"
import { Box, Grid, Paper, Typography } from "@mui/material"

type props = {}

const ContactMe: React.FC<props> = () => {
  return (
    <>
      <Paper sx={{padding: 2, mb: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <LocationOn />
              </Box>
              <Box>
                <Typography component={"h6"} variant="h6">Address</Typography>
                <Typography>A108 Adam Street, New York, NY 535022</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Phone />
              </Box>
              <Box>
                <Typography component={"h6"} variant="h6">Contact No.</Typography>
                <Typography>+1 5589 55488 55</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Email />
              </Box>
              <Box>
                <Typography component={"h6"} variant="h6">Email</Typography>
                <Typography>info@example.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{padding: 2}}>
        
      </Paper>
    </>
  )
}
export default ContactMe