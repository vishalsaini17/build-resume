import { Grid, Typography } from "@mui/material";
import { resumeData } from "../../../../mockData/resumeType";

type props = {
  data: resumeData;
};

const ResumeATS: React.FC<props> = ({ data }) => {
  return (
    <div>
      <header>
        <Typography variant={"h3"} component={"h1"}>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" component={"h3"}>
          {data.designation}
        </Typography>
        <Typography variant="subtitle2" component={"h3"}>
          {data.address} | {data.mobileNo} | {data.email}
        </Typography>
      </header>
      <section>
        <Typography variant="h6" component={"h2"}>
          {data.userBio.title}
        </Typography>
        <Typography>{data.userBio.description}</Typography>
      </section>
      <section>
        <Typography variant="h6" component={"h2"}>
          Skills & abilities
        </Typography>
        <Grid container>
          {data.skilSet.map((skill) => {
            return (
              <Grid item xs={12} sm={6} key={skill.name}>
                {skill.name}
              </Grid>
            );
          })}
        </Grid>
      </section>
      <section>
        <Typography variant="h6" component={"h2"}>
          Experience
        </Typography>
        {data.experience.map((company) => {
          return (
            <div>
              <Typography variant="subtitle2" component={"h2"}>
                {company.name} | {company.jobTitle} | {company.startAt}-{company.endAt}
              </Typography>
              <Typography>{company.summary}</Typography>
              {company.workInfo && (
                <div>
                  <Typography variant="subtitle1" component={"h4"}>
                    {company.workInfo.title}
                  </Typography>
                  <Typography>{company.workInfo.description}</Typography>
                </div>
              )}
              {company.achievements && (
                <div>
                  <Typography variant="subtitle1" component={"h4"}>
                    {company.achievements.achievementsTitle}
                  </Typography>
                  {company.achievements.list.map((achievement) => {
                    return (
                      <Grid container>
                        <Grid item xs="auto">
                          <Typography component={"strong"}>{achievement.title} :</Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography>{achievement.description}</Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section>
        <Typography variant="h6" component={"h2"}>
          Educations
        </Typography>
        {data.educations.map((education) => {
          return (
            <div>
              <Typography variant="h6">
                {education.instituteName}, {education.courseName}
              </Typography>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default ResumeATS;
