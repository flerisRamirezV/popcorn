import { put, takeLatest, all, select } from "redux-saga/effects";

import * as actionTypes from "../../constants/actions";
import {
  saveMovieFavorite,
  deleteMovie,
  addMovieFavorite,
  arrayFavorite,
} from "../../actions/favorite";

function* saveFavoriteMovie(data) {
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}

function* deleteMovieFavorite(data) {
  try {
    yield put(deleteMovie(data.id));
  } catch (error) {
    console.log(error);
  }
}

function* addMoviesFavorite(movie) {
  try {
    const favorite = (movies) => movies.movieFavorites.favorite;
    const items = yield select(favorite);
    const res = yield arrayFavorite(movie, items);
    if (!res) {
      yield put(addMovieFavorite(movie.data));
    }
  } catch (error) {
    console.log("ERROR", error)
  }
}

export function* movieFavoriteWatcher() {
  yield all([
    yield takeLatest(actionTypes.SAVE_FAVORITE_MOVIE, saveFavoriteMovie),
    yield takeLatest(actionTypes.DELETE_MOVIE, deleteMovieFavorite),
    yield takeLatest(actionTypes.ADD_MOVIE_FAVORITE, addMoviesFavorite),
  ]);
}
