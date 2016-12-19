import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        errorMessage: action.message
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: {}
      });
    default:
      return state;
  }
}
