import * as actionType from "../constants/actions";

const initialState = {
  movies: [],
  moviesRated: [],
  filterMovie: [],
  filterByMovie: "",
  
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIES:
      return { ...state, movies: action.payload, filterMovie: action.payload };
    case actionType.GET_MOVIES_RATED: {
      return { ...state, moviesRated: action.payload };
    }

    case actionType.FILTER_MOVIE: {
      let list = state.movies;
      let listFiltered;
      if (action.payload !== "") {
        listFiltered = [
          ...list.filter((movie) =>
            movie.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        ];
      } else {
        listFiltered = [...list];
      }
      return { ...state, filterMovie: listFiltered, movies: list };
    }
    default:
      return state;
  }
};
