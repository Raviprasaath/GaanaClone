import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
// other reducers needs to import here
const rootReducers = combineReducers({
usersData : usersReducer
// if there are other reducers , we can add here one by one
});
export default rootReducers;