import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProductsReducer: (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setProductsReducer } = AppSlice.actions;

export default AppSlice.reducer;
