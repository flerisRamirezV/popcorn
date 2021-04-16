import * as actionType from "../constants/actions";

const initialState = {
  favorite: [],
  noFavorite: [],
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
    default:
      return state;
  }
};
