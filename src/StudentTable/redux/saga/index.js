import {call, put, takeLatest} from 'redux-saga/effects';
import fetchService from '../../../services/FetchService.js';
import * as actionTypes from '../actions/ActionTypes';
import * as actions from '../actions/index';

export function* getStudentList(action) {

    try {
        const response = yield call(fetchService,
            {url: "http://localhost:8080/api/v1/user/getAll", method: 'GET',}
        );
        if (response.status === 200) {
            yield put(actions.getSuccessMessage(response.data));
        } else {
            yield put(actions.getErrorMessage(response.data));
        }

    } catch (error) {
        yield put(
            actions.getErrorMessage({
                status: error.response ? error.response.status : 404,
                message: error.message || 'Network Request Failed',
            })
        );
    }
}

export function* watchStudentList() {
    yield takeLatest(actionTypes.GET_STUDENT_LIST, getStudentList)
}

// export default function* rootSaga() {
//   yield all([
//     watchAddress(),
//   ]);
// }
