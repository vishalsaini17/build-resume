import { resumeInfo } from "../../../mockData/vishalResumeData";
import ResumeBasic from "../../component/templates/ResumeBasic";

type props = {};

const Resume: React.FC<props> = () => {
  return (
    <>
      <ResumeBasic resumeDetails={resumeInfo} />
    </>
  );
};
export default Resume;
