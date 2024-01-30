import { resumeInfo } from "../../../mockData/vishalResumeData";
import ResumeATS from "../../component/templates/ResumeATS";

type props = {};

const Resume: React.FC<props> = () => {
  return (
    <>
      <ResumeATS data={resumeInfo} />
    </>
  );
};
export default Resume;
