import React from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions/index";

const MovieList = (movies) => {
	movies.map((movie) => {
		return (
			<div>
				<span>{movie.title}</span>
				<button onClick={() => selectMovie}> Details </button>
			</div>
		);
	});

	// return (
	//     <div className='list-conatiner'>
	//         <h2>Movie List</h2>
	//         <ul>
	//             {list}
	//         </ul>

	//     </div>
	// )
};

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
	};
};

const mapDispatchToProps = {
	selectMovie: selectMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
