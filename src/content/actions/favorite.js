import * as actionTypes from "../constants/actions";

export const addFavorite = (data) => (dispatch, getState) => {
  let favorite = [...getState().movieFavorites.favorite];
  for (const iterator of favorite) {
    if (iterator.id == data.id) {
      return;
    }
  }
  dispatch({
    type: actionTypes.FAVORITE_MOVIE,
    payload: data,
  });
};

export const deleteMovie = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_FAVORITE,
    payload: id,
  });
};

export const deleteMovieFavorite = (id) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id,
  };
};

export const saveMovieFavorite = (movie) => (dispatch) => {
  dispatch({
    type: actionTypes.SAVE_MOVIE,
    payload: movie,
  });
};

export const movieFavorite = (mov) => {
  return {
    type: actionTypes.SAVE_FAVORITE_MOVIE,
    mov,
  };
};
