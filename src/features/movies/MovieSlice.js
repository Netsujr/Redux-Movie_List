import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/api/movieAPI";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${term}&type=movie`)
      .catch(error => {
        console.log(error);
      });
      console.log(response.data);
    return response.data;
  });

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",
  async (term) => {
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${term}&type=series`)
      .catch(error => {
        console.log(error);
      });
    console.log(response.data);
    return response.data;
  });

export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncShowOrDetail",
  async (id) => {
    const response = await movieAPI
      .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}&Plot=full`)
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
    removePreviousMedia: (state) => {
      state.selectedMovieOrShow = {};
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
    },

    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetching Shows Success");
      return { ...state, selectedMovieOrShow: payload };
    },

  }
});

export const { removePreviousMedia } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
