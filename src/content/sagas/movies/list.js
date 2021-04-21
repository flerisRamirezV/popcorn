import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/actions";
import { sendHttpRequest } from "../../helpers/request";
import {delay} from '../../helpers/events';

function* tryMovieList() {
  try {
     yield call(delay, 2000);
     const data = yield call(sendHttpRequest, actionTypes.URL);
    yield put({ type: actionTypes.LIST_MOVIE, payload: data.results });
  } catch (error) {
    console.log(error);
  
  }
}
function* tryMovieListRated() {
  try {
    const data = yield call(sendHttpRequest, actionTypes.URL_API_RATED);

    yield put({ type: actionTypes.LIST_MOVIE_RAITED, payload: data.results });
  } catch (error) {
    console.log(error);
  }
}

export function* moviesSagasWatcher() {
  yield takeLatest(actionTypes.GET_MOVIES, tryMovieList);
}
export function* moviesRatedSagasWatcher() {
  yield takeLatest(actionTypes.GET_MOVIES_RATED, tryMovieListRated);
}
