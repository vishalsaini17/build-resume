import { useParams } from "react-router-dom";
import { useAppContext } from "../../../AppContext";
import { resumeInfo2 } from "../../../mockData/vershaResumeData";
import { resumeInfo } from "../../../mockData/vishalResumeData";
import ResumeATS from "../../component/templates/ResumeATS";
import ResumeBasic from "../../component/templates/ResumeBasic";

type props = {};

const Resume: React.FC<props> = () => {
  const { username } = useParams<{ username: string }>();
  const selectedResume = username === "vishal" ? resumeInfo : resumeInfo2;
  const { appState } = useAppContext();
  console.log(appState, "appstate");

  return (
    <>
      {appState.resumeTemplate === "simple" ? (
        <ResumeBasic resumeDetails={selectedResume} />
      ) : (
        <ResumeATS resumeDetails={selectedResume} />
      )}
    </>
  );
};
export default Resume;
