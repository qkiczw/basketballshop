import { combineReducers } from 'readux';

import userReducer from './user/user.reducer';


export default combineReducers( {
    user: userReducer
} )