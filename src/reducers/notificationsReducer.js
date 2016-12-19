import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function notificationsReducer(state = initialState.notifications, action) {
  if (action.type === types.SHOW_NOTIFICATION) {
    return { active: true, message: action.message };
  } else if (action.type === types.HIDE_NOTIFICATION) {
    return { active: false, message: state.message };
  }

  return state;
}
