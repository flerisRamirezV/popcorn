import * as actionTypes from "../constants/actions";

export const toogleModal = () => (dispatch) => {
  dispatch({
    type: actionTypes.TOGGLE_MODAL,
  });
};

export const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
