import React, {useEffect} from 'react';
import {createStructuredSelector} from "reselect";
import {getStudentList} from './StudentTable/redux/selectors.js'
import {connect} from 'react-redux'
import * as actions from './StudentTable/redux/actions';

const Header = (props) => {
    useEffect(() => {
        props.getStudentList();
    }, []);
    return (<div>
        Student Count:{props.studentList && props.studentList.data ? props.studentList.data.length : 0}

    </div>)
};
export const mapStateToProps = createStructuredSelector({
    studentList: getStudentList,
});

const mapDispatchToProps = dispatch => {
    return {
        getStudentList: params => dispatch(actions.getStudentList(params)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
