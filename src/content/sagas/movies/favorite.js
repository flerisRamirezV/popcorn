import { put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../../constants/actions";
import { saveMovieFavorite } from "../../actions/favorite";

function* saveFavoriteMovie(data) {
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}

export function* saveMovieWatcher() {
  yield takeLatest(actionTypes.SAVE_FAVORITE_MOVIE, saveFavoriteMovie);
}
