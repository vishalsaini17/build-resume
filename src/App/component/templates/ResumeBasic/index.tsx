import { Grid, Typography } from "@mui/material";
import { resumeData } from "../../../../mockData/resumeType";
import SectionResumeBasic from "../../organisms/SectionResumeBasic";

type props = {
  resumeDetails: resumeData;
};

const ResumeBasic: React.FC<props> = ({ resumeDetails }) => {
  return (
    <>
      <header>
        <h1>
          {resumeDetails.name}
        </h1>
        <Typography variant="subtitle1" component={"h3"}>
          {resumeDetails.designation}
        </Typography>
        <Typography variant="subtitle2" component={"h3"}>
          {resumeDetails.address} | {resumeDetails.mobileNo} | {resumeDetails.email}
        </Typography>
      </header>
      <SectionResumeBasic title={resumeDetails.userBio.title}>
        <Typography>{resumeDetails.userBio.description}</Typography>
      </SectionResumeBasic>
      <SectionResumeBasic title="Skills & abilities">
        <Grid container>
          {resumeDetails.skilSet.map((skill) => {
            return (
              <Grid item xs={12} sm={6} key={skill.name}>
                {skill.name}
              </Grid>
            );
          })}
        </Grid>
      </SectionResumeBasic>
      <SectionResumeBasic title="Experience">
        {resumeDetails.experience.map((company) => {
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
      </SectionResumeBasic>

      <SectionResumeBasic title="Educations">
        {resumeDetails.educations.map((education) => {
          return (
            <div>
              <Typography variant="h6">
                {education.instituteName}, {education.courseName}
              </Typography>
            </div>
          );
        })}
      </SectionResumeBasic>
    </>
  )
}
export default ResumeBasic