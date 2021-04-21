import { sendHttpRequest } from "../helpers/request";
import * as actionTypes from "../constants/actions";

export const getMovies = () => async (dispatch) => {
  try {
    const responseData = await sendHttpRequest(actionTypes.URL);
    console.log(responseData);
    dispatch({
      type: actionTypes.GET_MOVIES,
      payload: responseData.results,
    });
  } catch (error) {
    console.log("error", error);
  }
};
export const getMoviesRated = () => async (dispatch) => {
  try {
    const responseData = await sendHttpRequest(actionTypes.URL_API_RATED);

    dispatch({
      type: actionTypes.GET_MOVIES_RATED,
      payload: responseData.results,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getMovie = () => {
  return {
    type: actionTypes.GET_MOVIES,
  };
};

export const getMovieRated = (payload) => {
  return {
    type: actionTypes.GET_MOVIES_RATED,
    payload,
  };
};

export const getListData = (action,data) => {
  return {
    type: action,
    payload: data.results,
  };
};
