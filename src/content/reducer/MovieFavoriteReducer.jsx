import * as actionType from "../constants/actions";

const initialState = {
  favorite: [],
  noFavorite: [],
  saveFavorite:null,
};

export const movieFavorites = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FAVORITE_MOVIE:
      return { ...state, favorite: [...state.favorite, action.payload] };
    case actionType.DELETE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((fav) => fav.id !== action.payload),
      };
    case actionType.SAVE_MOVIE:
      
        return{...state, saveFavorite: action.payload}
    default:
      return state;
  }
};
