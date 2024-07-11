import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import Img from "../../component/Img";
import TitleH2 from "../../component/TitleH2";
import classes from "./portfolioBasic.module.scss";

type props = {};

const AboutMe: React.FC<props> = () => {
  return (
    <Paper className={classes.aboutMeWrapper} elevation={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProfileBasic />
          <Box>
            <TitleH2 underline={true}>About Me</TitleH2>

            <Typography>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              Nulla porttitor accumsan tincidunt.
            </Typography>
            <Typography>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
              volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
            </Typography>
            <Typography>
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
              porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>Skills</h3>
          <Box>
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
            <Skill value={80} label="HTML" showPercentage={true} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default AboutMe;

function ProfileBasic() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={"auto"}>
        <Img src="https://xsgamess.co/randomusers/avatar.php?g=male" />
      </Grid>
      <Grid item xs={12} sm>
        <table className={classes.infoTable}>
          <tr>
            <th>Name:</th>
            <td>Vishal Saini</td>
          </tr>
          <tr>
            <th>Profile:</th>
            <td>full stack developer</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>contact@example.com</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>8467849784</td>
          </tr>
        </table>
      </Grid>
    </Grid>
  );
}

type skillProps = {
  value: number;
  label?: string;
  showPercentage?: boolean;
};

function Skill({ value, label, showPercentage = false }: skillProps) {
  return (
    <Box sx={{ marginBottom: 1.5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {label && <Typography>{label}</Typography>}
        {showPercentage && <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>}
      </Box>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}
