import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { resumeData } from "../../../../mockData/resumeType";
import Editor from "../../molecule/Editor";
import SectionResumeATS from "../../organisms/SectionResumeATS";
import style from "./resumeAts.module.scss";

type props = {
  resumeDetails: resumeData;
}

const ResumeATS: React.FC<props> = ({ resumeDetails  }) => {
  return (
    <div className={style.mainWrapper}>
      <header>
        <Typography className={style.name} variant={"h3"} component={"h1"}>
          {resumeDetails.name}
        </Typography>
        <Typography variant="subtitle1" component={"h3"}>
          {resumeDetails.designation}
        </Typography>
        <Typography variant="subtitle2" component={"h3"}>
          {resumeDetails.address} |
           <a style={{textDecoration:"none" , color:"rgb(13, 110, 253)"}} href={`tel:${resumeDetails.mobileNo}`}> {resumeDetails.mobileNo} </a> | <a  style={{textDecoration:"none" ,  color:"rgb(13, 110, 253)"}} href={`mailto:${resumeDetails.email}`}> {resumeDetails.email} </a> 
           | <a target="_blank" style={{textDecoration:"none" , color:"rgb(13, 110, 253)"}} href={resumeDetails.website.name} rel="noreferrer"> {resumeDetails.website.url} </a>
        </Typography>
      </header>

      <SectionResumeATS  title= {resumeDetails.userBio.title}>
      <Editor value={resumeDetails.userBio.description} contentOnly />
      </SectionResumeATS>
    
      <SectionResumeATS   title="Skills & abilities">
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
              <Typography className={style.companyInfo} variant="subtitle2" component={"h2"}>
                {company.name} | {company.jobTitle} | <em> {company.startAt}-{company.endAt}</em> 
              </Typography>
              {/* <Typography>
                {company.summary}</Typography> */}
                <div className={style.summaryInfo}>
                <Editor  value={company.summary} contentOnly />
                </div>
              {company.workInfo && (
                <div>
                  <em className={`${style.companyInfo} ${style.workInfo}`}>
                    {company.workInfo.title}
                  </em>
                  {/* <Typography>{company.workInfo.description}</Typography> */}
                  <Editor value={company.workInfo.description} contentOnly />
                </div>
              )}
              {company.achievements && (
                <div>
                  {/* <Typography variant="subtitle1" component={"h4"}>
                    {company.achievements.achievementsTitle}
                  </Typography> */}
                      <div>
                       <TableContainer component={Paper} sx={{ padding: "0", boxShadow: "none" }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                          <TableBody>
                            {company.achievements?.list.map((achievement) => (
                              <TableRow key={achievement.title} sx={{ "&:last-child td, &:last-child th": {border:0 } }}>
                                <TableCell
                                  component="th"
                                  scope="achievement"
                                  sx={{ fontWeight: "500", verticalAlign: "top" , paddingBottom:"0" , borderBottom:"0"}}
                                >
                                  {achievement.title}
                                </TableCell>
                                <TableCell align="right">
                                  <Editor value={achievement.description} contentOnly />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer> 
                    </div>
                  
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
              <Typography className={style.companyInfo} variant="h6">
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
