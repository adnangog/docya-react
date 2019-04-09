import { combineReducers } from 'redux';
import loginReducers from './login';
import documentReducers from './documents';
import departmentReducers from './departments';
import userReducers from './users';

export default combineReducers({
    login: loginReducers,
    document: documentReducers,
    department: departmentReducers,
    user: userReducers
});