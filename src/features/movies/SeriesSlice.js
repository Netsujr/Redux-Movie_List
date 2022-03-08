import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/api/movieAPI";

const initialState = {
  series: {},
};

export const fetchAsyncSeries = createAsyncThunk("series/fetchAsyncSeries",
  async () => {
    const seriesSearch = 'Friends';
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${seriesSearch}&type=series`)
      .catch(error => {
        console.log(error);
      });
    return response.data;
  });

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.series = payload;
    }
  },

  extraReducers: {

    [fetchAsyncSeries.pending]: () => {
      console.log("Fetching Series Pending");
      // While the thunk is pending, we can dispatch additional actions
      // but the state won't be affected until the thunk resolves.
    },

    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetching Series Success");
      return { ...state, series: payload };
      // when the thunk is fulfilled, we update the state
    },

    [fetchAsyncSeries.rejected]: () => {
      console.log("Fetching Series Rejected");
    }

  }
});

export const { addSeries } = seriesSlice.actions;
export const getAllSeries = (state) => state.series.series;
export default seriesSlice.reducer;
