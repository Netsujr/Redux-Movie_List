import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './shows/ShowSlice';

export const store = configureStore({
  reducer: showsReducer,
});
