import { all, takeLatest } from 'redux-saga/effects';
// Types USER
import {LoginTypes} from '~/store/ducks/Auth/login';

// INITIALIZES
import { Login, Register } from './Auth';


export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, Login),
    // takeLatest(RegisterTypes.SET_REGISTER_REQUEST, Register),
  ]);
}