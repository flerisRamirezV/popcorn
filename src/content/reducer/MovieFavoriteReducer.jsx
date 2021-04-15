import * as actionType from "../constants/actions";

const initialState = {
 favorite:[],
};

export const  movieFavorites = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FAVORITE_MOVIE:
      
      return { ...state, favorite:[...state.favorite,action.payload], };
    
    default:
      return state;
  }
};



