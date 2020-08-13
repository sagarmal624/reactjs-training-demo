import {combineReducers} from 'redux';
import getStudentList from '../../StudentTable/redux/reducers'

export default combineReducers({
    getStudentList: getStudentList
});

