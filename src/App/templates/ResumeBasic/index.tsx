import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { resumeData } from "../../../mockData/resumeType";
import Editor from "../../component/Editor";
import SectionResumeBasic from "../../sections/SectionResumeBasic";
import styles from "../ResumeBasic/resumeBasic.module.scss";

type props = {
  resumeDetails: resumeData;
};

const ResumeBasic: React.FC<props> = ({ resumeDetails }) => {
  return (
    <div className={styles.resumeBasic}>
      <header>
        <h1 style={{margin:"0.5em 0 0.25em"}}>{resumeDetails.name}</h1>
        <Typography variant="subtitle1" component={"h3"}>
          {resumeDetails.designation}
        </Typography>
        <Typography variant="subtitle2" component={"h3"}>
          {resumeDetails.address} | <a style={{textDecoration:"none" , color:"rgb(13, 110, 253)"}} href={`tel:${resumeDetails.mobileNo}`}> {resumeDetails.mobileNo} </a> | <a  style={{textDecoration:"none" ,  color:"rgb(13, 110, 253)"}} href={`mailto:${resumeDetails.email}`}> {resumeDetails.email} </a> 
           | <a target="_blank" style={{textDecoration:"none" , color:"rgb(13, 110, 253)"}} href={resumeDetails.website.name} rel="noreferrer"> {resumeDetails.website.url} </a>
        
        </Typography>
      
      </header>
      <SectionResumeBasic title={resumeDetails.userBio.title}>
        <Editor value={resumeDetails.userBio.description} contentOnly />
      </SectionResumeBasic>
      <SectionResumeBasic title="Skills & abilities">
        <Grid container columnSpacing={3} rowSpacing={1}>
          {resumeDetails.skilSet.map((skill) => {
            return (
              <Grid item xs={12} sm={6} key={skill.name}>
                <Grid container spacing={2}>
                  <Grid item>{skill.name}</Grid>
                  <Grid item xs>
                    <Box sx={{ borderBottom: "2px dotted", paddingTop: "1rem" }} />
                  </Grid>
                  <Grid item>{skill.ratingOutOf10}</Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </SectionResumeBasic>
      <SectionResumeBasic title="Experience">
        {resumeDetails.experience.map((company) => {
          return (
            <div>
              <Typography variant="subtitle2" component={"h2"} sx={{fontSize:"16px" , fontWeight:"700" , padding:"10px 0"}}>
                {company.name} | {company.jobTitle} | <span style={{fontWeight:"400" , fontSize:"0.9em" , fontStyle:"italic"}}> {company.startAt}-{company.endAt}  </span> 
              </Typography>
              <Editor value={company.summary} contentOnly />
              {company.workInfo && (
                <div>
                  <Typography sx={{ fontWeight: "500", fontStyle: 'italic' }} variant="subtitle1" component={"h4"}>
                    {company.workInfo.title}
                  </Typography>
                  <div style={{paddingInline: '1rem'}}>
                    <Editor value={company.workInfo.description} contentOnly />
                  </div>
                </div>
              )}
              {company.achievements && (
                <div>
                  <Typography sx={{fontSize:"16px" , fontWeight:"700"}}  variant="subtitle1" component={"h4"}>
                    {company.achievements.achievementsTitle}
                  </Typography>
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
              )}
            </div>
          );
        })}
      </SectionResumeBasic>

      <SectionResumeBasic title="Educations">
        {resumeDetails.educations.map((education, i) => {
          return (
            <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography variant="h6" sx={{fontSize:"16px" , fontWeight:"500"}}>
                  {education.instituteName}
                </Typography>
                <Box sx={{ fontSize: "14px" }}> {education.courseName}</Box>
              </Grid>
              <Grid item xs>
                <Box sx={{ borderBottom: "2px dotted", paddingTop: "1rem" }} />
              </Grid>
              <Grid item sx={{ textAlign: "right" }}>
                <Box>
                  {education.startAt} - {education.endAt}
                </Box>
                <Box sx={{ fontSize: "14px" }}> {education.location} </Box>
              </Grid>
            </Grid>
          );
        })}
      </SectionResumeBasic>
    </div>
  );
};
export default ResumeBasic;
