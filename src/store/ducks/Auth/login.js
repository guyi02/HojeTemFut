import {createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// CREATORS
const {Types, Creators} = createActions({
  setLoginRequest: ['data'],
  setLoginSuccess: ['data'],
  setLoginFailure: ['data']
})


export const LoginTypes = Types;
export default Creators;


// INITIAL STATE
export const INITIAL_STATE = Immutable({
  data: null,
  isError: false,

})


// REDUCER
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOGIN_SUCCESS]: (state, {data}) => state.merge({data, logado: true}),
  [Types.SET_LOGIN_FAILURE]: (state, {data}) => state.merge({isError: data.data.error})
});
