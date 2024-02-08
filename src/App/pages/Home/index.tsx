import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../AppContext";
import Link from "../../component/atoms/Link";
import Editor from "../../component/molecule/Editor";

type props = {};

const Home: React.FC<props> = () => {
  const { appState, appDispatch } = useAppContext();
  const [editorText, setEditorText] = useState("lorem ipsum dummy.")

  useEffect(()=>{
    console.log("editorText", editorText);
  }, [editorText])
  return (
    <>
      <h1>{appState.themeMode}</h1>
      <Button
        variant="contained"
        onClick={() => appDispatch({ type: "themeMode", payload: appState.themeMode === "dark" ? "light" : "dark" })}
      >
        change theme
      </Button>

      <Link href="/resume" variant="button" underline="hover">Check Resume </Link>
      <br />
      <br />

      <Editor value={editorText} onChange={(a)=>{setEditorText(a)}} />
    </>
  );
};
export default Home;
