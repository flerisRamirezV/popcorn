import * as actionType from '../constants/actions';

const initialState = {
    movies:[]
}

export const movieReducer= (state = initialState, action) => {
    switch (action.type) {

    case actionType.GET_MOVIES:
        console.log(action);
        return { ...state, movies: action.payload  }

    default:
        return state
    }
}

