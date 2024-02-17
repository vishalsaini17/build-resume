import { Grid, Typography } from "@mui/material";
import { resumeData } from "../../../../mockData/resumeType";
import Editor from "../../molecule/Editor";
import SectionResumeATS from "../../organisms/SectionResumeATS ";
import style from "./resumeAts.module.scss";

type props = {
  resumeDetails: resumeData;
};

const ResumeATS: React.FC<props> = ({ resumeDetails }) => {
  return (
    <div className={style.mainWrapper}>
      <header>
        <Typography variant={"h3"} component={"h1"}>
          {resumeDetails.name}
        </Typography>
        <Typography variant="subtitle1" component={"h3"}>
          {resumeDetails.designation}
        </Typography>
        <Typography variant="subtitle2" component={"h3"}>
          {resumeDetails.address} | {resumeDetails.mobileNo} | {resumeDetails.email}
        </Typography>
      </header>

      <SectionResumeATS title= {resumeDetails.userBio.title}>
      <Editor value={resumeDetails.userBio.description} contentOnly />
      </SectionResumeATS>
    
      <SectionResumeATS title="Skills & abilities">
        {/* <Typography variant="h6" component={"h2"}>
          Skills & abilities
        </Typography> */}
        <Grid container>
          {resumeDetails.skilSet.map((skill) => {
            return (
              <Grid item xs={12} sm={6} key={skill.name}>
                {skill.name}
              </Grid>
            );
          })}
        </Grid>
      </SectionResumeATS>
      <SectionResumeATS title=" Experience">
        {/* <Typography variant="h6" component={"h2"}>
          Experience
        </Typography> */}
        {resumeDetails.experience.map((company) => {
          return (
            <div>
              <Typography variant="subtitle2" component={"h2"}>
                {company.name} | {company.jobTitle} | {company.startAt}-{company.endAt}
              </Typography>
              {/* <Typography>
                {company.summary}</Typography> */}
                <Editor value={company.summary} contentOnly />
              {company.workInfo && (
                <div>
                  <Typography variant="subtitle1" component={"h4"}>
                    {company.workInfo.title}
                  </Typography>
                  {/* <Typography>{company.workInfo.description}</Typography> */}
                  <Editor value={company.workInfo.description} contentOnly />
                </div>
              )}
              {company.achievements && (
                <div>
                  {/* <Typography variant="subtitle1" component={"h4"}>
                    {company.achievements.achievementsTitle}
                  </Typography> */}
                  {company.achievements.list.map((achievement) => {
                    return (
                      <Grid container>
                        <Grid item xs="auto">
                          <Typography component={"strong"}>{achievement.title} :</Typography>
                        </Grid>
                        <Grid item xs>
                          {/* <Typography>{achievement.description}</Typography> */}
                          <Editor value={achievement.description} contentOnly />
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </SectionResumeATS>

      <SectionResumeATS title="Educations">
        {/* <Typography variant="h6" component={"h2"}>
          Educations
        </Typography> */}
        {resumeDetails.educations.map((education) => {
          return (
            <div>
              <Typography variant="h6">
                {education.instituteName}, {education.courseName}
              </Typography>
            </div>
          );
        })}
      </SectionResumeATS>
    </div>
  );
};
export default ResumeATS;
