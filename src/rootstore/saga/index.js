import {fork} from 'redux-saga/effects';
import {watchStudentList} from '../../StudentTable/redux/saga';

export default function* rootSaga() {
    yield fork(watchStudentList);
}
