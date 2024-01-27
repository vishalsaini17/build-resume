import { ThemeProvider } from "@emotion/react";
import { createContext, useContext, useMemo, useReducer } from "react";
import { darkTheme, lightTheme } from "../Theme";
import { actionProps, appContextProps, appContextProviderProps, appStateProps } from "./type";

const defaultData: appStateProps = {
  themeMode: 'light'
}


const AppContext = createContext<appContextProps | undefined>(undefined);

// hook for getting context state and function
export const useAppContext = (): appContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("CustomerProfile must be used within a AppDataProvider");
  }
  return context;
};

function appReducer(state: appStateProps, action: actionProps): appStateProps {
  switch (action.type) {
    case 'themeMode':
      return { ...state, themeMode: action.payload };
    default:
      throw new Error();
  }
}

const AppContextProvider: React.FC<appContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultData);
  const theme = useMemo(() => {
    return state.themeMode === 'dark' ? darkTheme : lightTheme;
  }, [state])

  return (
    <AppContext.Provider value={{
      appState: state,
      appDispatch: dispatch
    }} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
export default AppContextProvider