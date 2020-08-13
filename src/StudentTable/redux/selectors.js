import pathOr from 'lodash/fp/pathOr';

export const getStudentList = state => {
    return pathOr(null, 'getStudentList', state);
};
