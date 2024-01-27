import { ReactNode } from "react";
import { themeModeProps } from "../Theme/type";

export type appStateProps = {
  themeMode: themeModeProps;
}

export type actionProps = {
  type: 'themeMode',
  payload: themeModeProps
}


export type appContextProviderProps = {
  children: ReactNode
}

export type appContextProps = {
  appState: appStateProps;
  appDispatch: (action: actionProps) => void
}
