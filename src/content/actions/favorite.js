import * as actionTypes from '../constants/actions';



export const addFavorite=(data)=>(dispatch)=>{
    
    dispatch({
        type:actionTypes.FAVORITE_MOVIE,
        payload:data
    })
}