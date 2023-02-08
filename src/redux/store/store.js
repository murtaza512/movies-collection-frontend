import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movieSlice";

const store = configureStore({
  reducer: {
    movie: moviesReducer
  }
});

export default store;
