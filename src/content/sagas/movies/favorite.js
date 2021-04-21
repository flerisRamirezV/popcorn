import { put, takeLatest, all } from "redux-saga/effects";

import * as actionTypes from "../../constants/actions";
import { saveMovieFavorite,deleteMovie } from "../../actions/favorite";

function* saveFavoriteMovie(data) {
  try {
    yield put(saveMovieFavorite(data));
  } catch (error) {
    console.log(error);
  }
}

function* deleteMovieFavorite(data){
   
    try {
        yield put(deleteMovie(data.id))
    } catch (error) {
        console.log(error)
    }
}

export function* movieFavoriteWatcher() {
   
    yield all([
        yield takeLatest(actionTypes.SAVE_FAVORITE_MOVIE, saveFavoriteMovie),
        yield takeLatest(actionTypes.DELETE_MOVIE, deleteMovieFavorite)
    ])
 
}

