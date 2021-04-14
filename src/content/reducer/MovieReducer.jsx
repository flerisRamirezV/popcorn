import * as actionType from '../constants/actions';

const initialState = {
    movies:[]
}

export const MovieReducer= (state = initialState, action) => {
    switch (action.type) {

    case actionType.GET_MOVIES:
        return { ...state, movies: action.payload  }

    default:
        return state
    }
}

