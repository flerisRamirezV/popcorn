import * as actionType from "../constants/actions";

const initialState = {
  movies: [],
  moviesRated: [],
  filterMovie:[],
  filterByMovie: '',
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIES:
     
      return { ...state, movies: action.payload };
    case actionType.GET_MOVIES_RATED: {
      return { ...state, moviesRated: action.payload };
    }
   
     
    
    
    default:
      return state;
  }
};
