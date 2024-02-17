import { ReactNode } from "react";
import { resumeTemplateProps } from "../App/layouts/ResumeLayout";
import { themeModeProps } from "../Theme/type";

export type appStateProps = {
  themeMode: themeModeProps;
  resumeTemplate: resumeTemplateProps;
};
type themeModeActionProps = {
  type: "themeMode";
  payload: themeModeProps;
};
type changeTemplateActionProps = {
  type: "changeTemplate";
  payload: resumeTemplateProps;
};
export type actionProps = themeModeActionProps | changeTemplateActionProps;

export type appContextProviderProps = {
  children: ReactNode;
};

export type appContextProps = {
  appState: appStateProps;
  appDispatch: (action: actionProps) => void;
};
