import { combineReducers } from 'redux';
// USER
import {reducer as Login} from './Auth/login';

const reducers = combineReducers({
  Login
});

export default reducers;
