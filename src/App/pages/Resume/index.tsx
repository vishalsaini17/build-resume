import { useParams } from "react-router-dom";
import { resumeInfo2 } from "../../../mockData/vershaResumeData";
import { resumeInfo } from "../../../mockData/vishalResumeData";
import ResumeATS from "../../templates/ResumeATS";
import ResumeBasic from "../../templates/ResumeBasic";

type props = {};

const Resume: React.FC<props> = () => {
  const { username } = useParams<{ username: string }>();
  const selectedResume = username === "vishal" ? resumeInfo : resumeInfo2;

  return (
    <>
      {"simple" === "simple" ? (
        <ResumeBasic resumeDetails={selectedResume} />
      ) : (
        <ResumeATS resumeDetails={selectedResume} />
      )}
    </>
  );
};
export default Resume;
