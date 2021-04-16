import * as actionTypes from "../constants/actions";
import { fixedEncodeURIComponent, sendHttpRequest } from "../helpers/request";

export const filterData = (name) => async (dispatch) => {
  let query = "";
  if (name === "") {
    query = "?";
  } else {
    query = name;
  }
  let url = `${actionTypes.URL_SEARCH_MOVIE}=${fixedEncodeURIComponent(
    query
  )}&api_key=${actionTypes.API_KEY}`;
  const responseData = await sendHttpRequest(url);

  dispatch({
    type: actionTypes.FILTER_MOVIE,
    payload: { data: responseData.results, name: name },
  });
};

export const saveDataInput = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.SAVE_DATA_INPUT,
    payload: data,
  });
};
