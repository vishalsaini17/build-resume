import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../AppContext";

type props = {};

const Home: React.FC<props> = () => {
  const { appState, appDispatch } = useAppContext();

  return (
    <>
      <h1>{appState.themeMode}</h1>
      <Button
        variant="contained"
        onClick={() => appDispatch({ type: "themeMode", payload: appState.themeMode === "dark" ? "light" : "dark" })}
      >
        change theme
      </Button>

      <Button variant="outlined" color="secondary">
        <Link to={"/resume"}>Go to Resume</Link>
      </Button>
    </>
  );
};
export default Home;