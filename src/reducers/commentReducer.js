// import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note the use of the spread operator and Object.assign to create a copy of current state.
export default function commentsReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.LIST_COMMENTS_SUCCESS:
      return action.comments;

    case types.CREATE_COMMENT_SUCCESS:
      return [...state, Object.assign({}, action.comment)];

    case types.UPDATE_COMMENT_SUCCESS:
      return [...state.filter(comment => comment.id !== action.comment.id), Object.assign({}, action.comment)];

    case types.DELETE_COMMENT_SUCCESS: {
      return state.filter(comment => comment.id !== action.commentId);
    }
    
    default:
      return state;
  }
}
