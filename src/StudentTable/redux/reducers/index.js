import * as actionTypes from '../actions/ActionTypes';

const reducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.GET_STUDENT_LIST:
            return {...state, loading: true};
        case actionTypes.GET_SUCCESS_MESSAGE:
            return {...state, data: action.payload.data, loading: false};
        case actionTypes.GET_ERROR_MESSAGE:
            return {...state, data: action.data, loading: false};
        default:
            return state;
    }
};

export default reducer;
