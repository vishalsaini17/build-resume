import { Email, LocationOn, Phone } from "@mui/icons-material"
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import Input from "../../component/Input"

type props = {}

const ContactMe: React.FC<props> = () => {

  const formSubmit = (event: React.FormEvent<HTMLFormElement>, additionalData?: any) => {
    console.log("event : ", event);
    console.log("additionalData : ", additionalData);

    debugger
  }

  return (
    <>
      <Paper sx={{ padding: 2, mb: 3 }}>
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

      <Paper sx={{ padding: 2 }}>
        <form onSubmit={formSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Input type="text" label={`Your Name`} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input type="email" label={`Your Email`} />
            </Grid>
            <Grid item xs={12}>
              <Input type="text" label={`Subject`} />
            </Grid>
            <Grid item xs={12}>
              <Input type="" label={`Message`} />
            </Grid>
          </Grid>
          <Grid item>
            <Button type="submit">
              Send Message
            </Button>
          </Grid>
        </form>
      </Paper>
    </>
  )
}
export default ContactMe