import {sendHttpRequest} from '../helpers/request';
import * as actionTypes from '../constants/actions';

export const getMovies=()=>async (dispatch)=>{
    try {
        const responseData = await sendHttpRequest(actionTypes.URL);
        console.log(responseData);
        dispatch({
            type: actionTypes.GET_MOVIES,
            payload: responseData.results
        })
    } catch (error) {
        console.log("error",error);
    }
}


