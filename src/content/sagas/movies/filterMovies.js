import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/actions";
import {
  sendHttpRequest,
  fixedEncodeURIComponent,
} from "../../helpers/request";


function* searchMovies(name) {
  
  try {
    let query = "";
    if (name.name === "") {
      query = "?";
    } else {
      query = name.name;
    }
    let url = `${actionTypes.URL_SEARCH_MOVIE}=${fixedEncodeURIComponent(
      query
    )}&api_key=${actionTypes.API_KEY}`;
    const data = yield call(sendHttpRequest, url);
   
      yield put({
      type: actionTypes.SAVE_DATA_FILTER_MOVIE,
      payload: { data: data.results, name: name },
    });
    
  } catch (error) {
    console.log("ERROR_BUSCAR", error);
  }
}

export function* searchMoviesWatcher() {
  yield takeLatest(actionTypes.FILTER_MOVIE, searchMovies);
}
