import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shows: [],
};

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    addShow: (state, { payload }) => {
      state.shows = payload;
      // uses Immer library to add new show to state
      // we dont have to destructure the state
    }
  }
});

export const { addShow } = showSlice.actions;
export const getAllShows = (state) => state.shows.shows;
export default showSlice.reducer;
