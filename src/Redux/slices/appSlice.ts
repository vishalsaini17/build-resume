import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootStateProps } from "..";

type initialStateProps = {
  themeMode: "light" | "dark";
}

const initialState: initialStateProps = {
  themeMode: "light",
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeMode = action.payload;
    }
  },
});

export const { changeTheme } = appSlice.actions;

const rootState = (state: RootStateProps) => state;

export const appDataSelector = createSelector(rootState, (state) => state.app);

export default appSlice.reducer;
