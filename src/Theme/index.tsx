import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { appDataSelector } from "../Redux/slices/appSlice";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

type props = {
  children: ReactNode
}

const Theme: React.FC<props> = ({ children }) => {
  const { themeMode } = useSelector(appDataSelector);


  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  );
}

export default Theme;