import * as actionTypes from "../constants/actions";
import { fixedEncodeURIComponent, sendHttpRequest } from "../helpers/request";

export const filterData = (name) => async (dispatch) => {
  let url = `${actionTypes.URL_SEARCH_MOVIE}=${fixedEncodeURIComponent(
    name
  )}&api_key=${actionTypes.API_KEY}`;
  const responseData = await sendHttpRequest(url);

  dispatch({
    type: actionTypes.FILTER_MOVIE,
    payload: { data: responseData.results, name: name },
  });
};
