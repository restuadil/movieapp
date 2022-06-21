import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/data";

/**
 * buat slice : untuk generate action dan reducer
 * menerima param object : name, initialState, reducers
 */

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            //add movie to movies
            state.movies.push(action.payload )
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        }
    }
});

//generate action dan reducer
const moviesReducer = movieSlice.reducer;
const { addMovie, updateMovies } = movieSlice.actions;

//export
export default moviesReducer;
export{ addMovie,updateMovies };