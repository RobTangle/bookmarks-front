import { createSlice } from "@reduxjs/toolkit";

export const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    allResources: [],
    resourceDetails: {},
  },
  reducers: {
    setAllResources: (state, action) => {
      state.allResources = action.payload;
    },
  },
});

export const { setAllResources } = resourceSlice.actions;

export default resourceSlice.reducer;
