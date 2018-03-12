import { combineReducers } from 'redux';
import users from './users';
import newuser from './newuser';

let reducer = combineReducers({users, newuser});
export default reducer;