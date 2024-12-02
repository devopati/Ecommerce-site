import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  sideBarCollapse: boolean;
}

const initialState: InitialStateType = {
  sideBarCollapse: false,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.sideBarCollapse = !state.sideBarCollapse;
    },
  },
});

export const { toggleSideBar } = DashboardSlice.actions;

export default DashboardSlice.reducer;
