import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/api/movieAPI";

const initialState = {
  movies: {},
  shows: {},
};

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
  async () => {
    const movieSearch = 'Harry';
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${movieSearch}&type=movie`)
      .catch(error => {
        console.log(error);
      });
      console.log(response.data);
    return response.data;
  });

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",
  async () => {
    const seriesSearch = 'Friends';
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${seriesSearch}&type=series`)
      .catch(error => {
        console.log(error);
      });
    console.log(response.data);
    return response.data;
  });

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  },

  extraReducers: {

    [fetchAsyncMovies.pending]: () => {
      console.log("Fetching Movies Pending");
      // While the thunk is pending, we can dispatch additional actions
      // but the state won't be affected until the thunk resolves.
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetching Movies Success");
      return { ...state, movies: payload };
      // when the thunk is fulfilled, we update the state
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetching Movies Rejected");
    },

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetching Shows Success");
      return { ...state, shows: payload };
      // when the thunk is fulfilled, we update the state
    },

  }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
