import * as types from '../constants/actionTypes';

export const showNotification = message => (
  (dispatch) => {
    return dispatch({ type: types.SHOW_NOTIFICATION, message });
  }
);

export const hideNotification = () => (
  (dispatch) => {
    return dispatch({ type: types.HIDE_NOTIFICATION });
  }
);