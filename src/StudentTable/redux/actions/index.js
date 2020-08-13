import * as actionTypes from './ActionTypes';

export const getStudentList = payload => {
    return {
        type: actionTypes.GET_STUDENT_LIST,
        payload,
    };
};
export const getSuccessMessage = payload => {
    return {
        type: actionTypes.GET_SUCCESS_MESSAGE,
        payload,
    };
};
export const getErrorMessage = payload => {
    return {
        type: actionTypes.GET_ERROR_MESSAGE,
        payload,
    };
};
