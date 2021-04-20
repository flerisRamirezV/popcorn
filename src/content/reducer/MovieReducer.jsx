import * as actionType from "../constants/actions";

const initialState = {
  movies: [],
  moviesRated: [],
  filterMovie: [],
  filterByMovie: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LIST_MOVIE: {
      return { ...state, movies: action.payload, filterMovie: action.payload };
    }
    case actionType.LIST_MOVIE_RAITED:
      return { ...state, moviesRated: action.payload };

    case actionType.SAVE_DATA_FILTER_MOVIE: {
      let list = state.movies;
      let listFiltered;
      if (action.payload.name.name !== "") {
        listFiltered = [
          ...action.payload.data.filter((movie) =>
            movie.title
              .toLowerCase()
              .includes(action.payload.name.name.toLowerCase())
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
