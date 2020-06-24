import { combineReducers } from "redux";

const movieReducer = () => {
	return [
		{ title: "Spider-Man", releaseDate: "08-09-2019", rating: "8.1" },
		{ title: "Spider-Man", releaseDate: "08-09-2019", rating: "8.1" },
	];
};

const selectedMovieReducer = (state = "null", action) => {
	switch (action.type) {
		case "MOVIE_SELECTED":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	movies: movieReducer,
	selectedMovie: selectedMovieReducer,
});
