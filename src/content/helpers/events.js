import * as actionTypes from '../constants/actions';


export const toogleModal=()=>dispatch=>{
    dispatch({
        type:actionTypes.TOGGLE_MODAL
    })
}