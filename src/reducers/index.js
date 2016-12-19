import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import ajaxStatusReducer from './ajaxStatusReducer';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  comments: commentReducer,
  ajaxCallsInProgress: ajaxStatusReducer,
  notifications: notificationsReducer
});

export default rootReducer;